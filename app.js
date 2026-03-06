// ============================================
// DSA Tracker - Application Logic
// ============================================

(() => {
  "use strict";

  // --- Storage Keys ---
  const STORAGE_KEYS = {
    DONE: "dsa_done",
    BOOKMARKS: "dsa_bookmarks",
    NOTES: "dsa_notes",
    THEME: "dsa_theme",
    STREAK: "dsa_streak",
    LAST_DATE: "dsa_last_date",
    DAILY_LOG: "dsa_daily_log",
    OPEN_TOPICS: "dsa_open_topics",
    ACTIVE_SHEET: "dsa_active_sheet",
  };

  // --- State ---
  let state = {
    done: new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.DONE) || "[]")),
    bookmarks: new Set(
      JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKMARKS) || "[]"),
    ),
    notes: JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTES) || "{}"),
    theme: localStorage.getItem(STORAGE_KEYS.THEME) || "dark",
    streak: parseInt(localStorage.getItem(STORAGE_KEYS.STREAK) || "0"),
    lastDate: localStorage.getItem(STORAGE_KEYS.LAST_DATE) || "",
    dailyLog: JSON.parse(localStorage.getItem(STORAGE_KEYS.DAILY_LOG) || "{}"),
    openTopics: new Set(
      JSON.parse(localStorage.getItem(STORAGE_KEYS.OPEN_TOPICS) || "[]"),
    ),
    activeSheet:
      localStorage.getItem(STORAGE_KEYS.ACTIVE_SHEET) || Object.keys(SHEETS)[0],
    filter: "all",
    currentNoteId: null,
  };

  // --- Helpers ---
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  function save(key, value) {
    if (value instanceof Set) {
      localStorage.setItem(key, JSON.stringify([...value]));
    } else {
      localStorage.setItem(
        key,
        typeof value === "string" ? value : JSON.stringify(value),
      );
    }
  }

  function getQuestionId(topicIdx, qIdx) {
    return `${state.activeSheet}-${topicIdx}-${qIdx}`;
  }

  function getCurrentData() {
    return SHEETS[state.activeSheet].data;
  }

  function getPlatform(url) {
    if (!url) return { label: "Theory", cls: "other" };
    if (url.includes("leetcode.com")) return { label: "LC", cls: "lc" };
    if (url.includes("geeksforgeeks.org")) return { label: "GFG", cls: "gfg" };
    if (url.includes("takeuforward.org")) return { label: "TUF", cls: "tuf" };
    if (url.includes("hackerearth.com")) return { label: "HE", cls: "other" };
    if (url.includes("hackerrank.com")) return { label: "HR", cls: "other" };
    if (url.includes("spoj.com")) return { label: "SPOJ", cls: "other" };
    return { label: "Link", cls: "other" };
  }

  function renderLinks(q) {
    const badges = [];
    if (q.url) {
      const p = getPlatform(q.url);
      badges.push(
        `<a href="${q.url}" target="_blank" rel="noopener" class="link-badge ${p.cls}" onclick="event.stopPropagation()">${p.label}</a>`,
      );
    }
    if (q.lcUrl) {
      badges.push(
        `<a href="${q.lcUrl}" target="_blank" rel="noopener" class="link-badge lc" onclick="event.stopPropagation()">LC</a>`,
      );
    }
    if (q.gfgUrl) {
      badges.push(
        `<a href="${q.gfgUrl}" target="_blank" rel="noopener" class="link-badge gfg" onclick="event.stopPropagation()">GFG</a>`,
      );
    }
    if (q.tufUrl) {
      badges.push(
        `<a href="${q.tufUrl}" target="_blank" rel="noopener" class="link-badge tuf" onclick="event.stopPropagation()">TUF</a>`,
      );
    }
    if (badges.length === 0) {
      badges.push(`<span class="link-badge other">Theory</span>`);
    }
    return badges.join(" ");
  }

  function getTodayStr() {
    return new Date().toISOString().split("T")[0];
  }

  function getTotalQuestions() {
    return getCurrentData().reduce((s, t) => s + t.questions.length, 0);
  }

  // --- Streak Logic ---
  function updateStreak() {
    const today = getTodayStr();
    if (state.lastDate === today) return; // already updated today

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    if (state.lastDate === yesterdayStr) {
      state.streak++;
    } else if (state.lastDate !== today) {
      state.streak = 1;
    }

    state.lastDate = today;
    save(STORAGE_KEYS.STREAK, state.streak.toString());
    save(STORAGE_KEYS.LAST_DATE, state.lastDate);
  }

  function getDailyCount() {
    const today = getTodayStr();
    return state.dailyLog[today] || 0;
  }

  function incrementDaily() {
    const today = getTodayStr();
    state.dailyLog[today] = (state.dailyLog[today] || 0) + 1;
    save(STORAGE_KEYS.DAILY_LOG, state.dailyLog);
    updateStreak();
  }

  function decrementDaily() {
    const today = getTodayStr();
    if (state.dailyLog[today] > 0) {
      state.dailyLog[today]--;
      save(STORAGE_KEYS.DAILY_LOG, state.dailyLog);
    }
  }

  // --- Theme ---
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
  }

  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    save(STORAGE_KEYS.THEME, state.theme);
    applyTheme();
  }

  // --- Render ---
  function renderSheetTabs() {
    const container = $("#sheetTabs");
    container.innerHTML = "";
    Object.entries(SHEETS).forEach(([key, sheet]) => {
      const total = sheet.data.reduce((s, t) => s + t.questions.length, 0);
      const btn = document.createElement("button");
      btn.className = `sheet-tab${key === state.activeSheet ? " active" : ""}`;
      btn.dataset.sheet = key;
      btn.innerHTML = `${sheet.icon} ${sheet.short} <span class="sheet-count">${total}</span>`;
      btn.addEventListener("click", () => switchSheet(key));
      container.appendChild(btn);
    });
  }

  function switchSheet(sheetKey) {
    if (sheetKey === state.activeSheet) return;
    state.activeSheet = sheetKey;
    save(STORAGE_KEYS.ACTIVE_SHEET, sheetKey);
    state.openTopics = new Set();
    save(STORAGE_KEYS.OPEN_TOPICS, state.openTopics);
    renderSheetTabs();
    renderStats();
    renderTopics();
  }

  function getDoneCountForSheet() {
    const data = getCurrentData();
    let count = 0;
    data.forEach((topic, tIdx) => {
      topic.questions.forEach((_, qIdx) => {
        if (state.done.has(`${state.activeSheet}-${tIdx}-${qIdx}`)) count++;
      });
    });
    return count;
  }

  function renderStats() {
    const total = getTotalQuestions();
    const doneCount = getDoneCountForSheet();
    const percent = total > 0 ? Math.round((doneCount / total) * 100) : 0;

    $("#totalProgress").textContent = `${doneCount} / ${total}`;
    $("#totalPercent").textContent = `${percent}%`;
    $("#progressCircle").setAttribute("stroke-dasharray", `${percent}, 100`);
    $("#streakCount").textContent = state.streak;
    $("#todayCount").textContent = getDailyCount();
    $("#bookmarkCount").textContent = state.bookmarks.size;
  }

  function shouldShowQuestion(qId) {
    const isDone = state.done.has(qId);
    const isBookmarked = state.bookmarks.has(qId);
    switch (state.filter) {
      case "done":
        return isDone;
      case "pending":
        return !isDone;
      case "bookmarked":
        return isBookmarked;
      default:
        return true;
    }
  }

  function renderTopics() {
    const container = $("#mainContent");
    container.innerHTML = "";

    getCurrentData().forEach((topic, tIdx) => {
      const questions = topic.questions;
      const filteredQuestions = questions
        .map((q, qIdx) => ({ ...q, qIdx }))
        .filter((q) => shouldShowQuestion(getQuestionId(tIdx, q.qIdx)));

      // If filter hides all questions in this topic, skip
      if (state.filter !== "all" && filteredQuestions.length === 0) return;

      const doneTopic = questions.filter((_, qIdx) =>
        state.done.has(getQuestionId(tIdx, qIdx)),
      ).length;
      const totalTopic = questions.length;
      const percentTopic = Math.round((doneTopic / totalTopic) * 100);
      const isOpen = state.openTopics.has(topic.topic);
      const isComplete = doneTopic === totalTopic;

      const card = document.createElement("div");
      card.className = `topic-card${isOpen ? " open" : ""}`;
      card.setAttribute("data-topic", topic.topic);

      card.innerHTML = `
        <div class="topic-header">
          <div class="topic-left">
            <div class="topic-icon">${topic.icon}</div>
            <div>
              <div class="topic-name">${topic.topic}</div>
            </div>
          </div>
          <div class="topic-right">
            <div class="topic-progress-info">
              <span>${doneTopic}/${totalTopic}</span>
              <div class="topic-progress-bar">
                <div class="topic-progress-fill${isComplete ? " complete" : ""}" style="width: ${percentTopic}%"></div>
              </div>
            </div>
            <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </div>
        <div class="topic-body">
          <table class="questions-table">
            <thead>
              <tr>
                <th>✓</th>
                <th>#</th>
                <th>Problem</th>
                <th class="hide-mobile" style="text-align:right">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${filteredQuestions
                .map((q, displayIdx) => {
                  const qId = getQuestionId(tIdx, q.qIdx);
                  const isDone = state.done.has(qId);
                  const isBookmarked = state.bookmarks.has(qId);
                  const hasNotes = !!state.notes[qId];
                  return `
                  <tr class="${isDone ? "done" : ""}" data-qid="${qId}">
                    <td class="q-checkbox">
                      <label class="custom-checkbox">
                        <input type="checkbox" ${isDone ? "checked" : ""} data-action="toggle" data-qid="${qId}">
                        <span class="checkmark"></span>
                      </label>
                    </td>
                    <td class="q-number">${q.qIdx + 1}</td>
                    <td class="q-name">
                      ${q.name}
                      <span class="q-links">${renderLinks(q)}</span>
                    </td>
                    <td>
                      <div class="q-actions">
                        <button class="action-btn ${isBookmarked ? "bookmarked" : ""}" data-action="bookmark" data-qid="${qId}" title="Bookmark">
                          ${isBookmarked ? "★" : "☆"}
                        </button>
                        <button class="action-btn ${hasNotes ? "has-notes" : ""}" data-action="notes" data-qid="${qId}" title="Notes">
                          📝
                        </button>
                      </div>
                    </td>
                  </tr>
                `;
                })
                .join("")}
            </tbody>
          </table>
          ${filteredQuestions.length === 0 ? '<div class="empty-state"><div class="empty-state-icon">🎉</div><div class="empty-state-text">No questions match the current filter</div></div>' : ""}
        </div>
      `;

      // Toggle open/close
      card.querySelector(".topic-header").addEventListener("click", () => {
        card.classList.toggle("open");
        if (card.classList.contains("open")) {
          state.openTopics.add(topic.topic);
        } else {
          state.openTopics.delete(topic.topic);
        }
        save(STORAGE_KEYS.OPEN_TOPICS, state.openTopics);
      });

      container.appendChild(card);
    });

    // If empty state for entire page
    if (container.children.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="padding: 4rem 1rem;">
          <div class="empty-state-icon">🔍</div>
          <div class="empty-state-text">No questions match the current filter</div>
        </div>
      `;
    }
  }

  // --- Event Delegation ---
  function handleMainClick(e) {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;

    const action = btn.dataset.action;
    const qId = btn.dataset.qid;

    switch (action) {
      case "toggle":
        if (state.done.has(qId)) {
          state.done.delete(qId);
          decrementDaily();
        } else {
          state.done.add(qId);
          incrementDaily();
          showToast("✅ Question marked as done!");
        }
        save(STORAGE_KEYS.DONE, state.done);
        renderTopics();
        renderStats();
        break;

      case "bookmark":
        if (state.bookmarks.has(qId)) {
          state.bookmarks.delete(qId);
        } else {
          state.bookmarks.add(qId);
          showToast("⭐ Bookmarked!");
        }
        save(STORAGE_KEYS.BOOKMARKS, state.bookmarks);
        renderTopics();
        renderStats();
        break;

      case "notes":
        state.currentNoteId = qId;
        $("#notesTextarea").value = state.notes[qId] || "";
        $("#notesModal").classList.add("active");
        $("#notesTextarea").focus();
        break;
    }
  }

  // --- Search ---
  function handleSearch() {
    const query = $("#searchInput").value.trim().toLowerCase();
    const overlay = $("#searchOverlay");
    const results = $("#searchResults");

    if (!query) {
      overlay.classList.remove("active");
      return;
    }

    overlay.classList.add("active");
    results.innerHTML = "";

    const matches = [];
    getCurrentData().forEach((topic, tIdx) => {
      topic.questions.forEach((q, qIdx) => {
        if (q.name.toLowerCase().includes(query)) {
          matches.push({
            ...q,
            topic: topic.topic,
            icon: topic.icon,
            tIdx,
            qIdx,
          });
        }
      });
    });

    if (matches.length === 0) {
      results.innerHTML =
        '<div class="search-empty">No questions found matching your search.</div>';
      return;
    }

    matches.slice(0, 20).forEach((m) => {
      const qId = getQuestionId(m.tIdx, m.qIdx);
      const isDone = state.done.has(qId);
      const item = document.createElement("div");
      item.className = "search-result-item";
      item.innerHTML = `
        <span class="search-result-topic">${m.icon} ${m.topic}</span>
        <span class="search-result-name">${isDone ? "✅ " : ""}${m.name}</span>
        <span class="search-result-badge">${renderLinks(m)}</span>
      `;
      item.addEventListener("click", () => {
        overlay.classList.remove("active");
        $("#searchInput").value = "";

        // Open the topic and scroll to it
        state.openTopics.add(m.topic);
        save(STORAGE_KEYS.OPEN_TOPICS, state.openTopics);
        renderTopics();

        // Scroll to the topic card
        setTimeout(() => {
          const card = document.querySelector(`[data-topic="${m.topic}"]`);
          if (card) {
            card.scrollIntoView({ behavior: "smooth", block: "start" });
            // Highlight the row briefly
            const row = card.querySelector(`[data-qid="${qId}"]`);
            if (row) {
              row.style.background = "var(--accent-bg)";
              setTimeout(() => {
                row.style.background = "";
              }, 2000);
            }
          }
        }, 100);
      });
      results.appendChild(item);
    });

    if (matches.length > 20) {
      results.innerHTML += `<div class="search-empty">Showing 20 of ${matches.length} results. Refine your search.</div>`;
    }
  }

  // --- Toast ---
  let toastTimeout;
  function showToast(message) {
    let toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove("show"), 2000);
  }

  // --- Filter ---
  function handleFilter(e) {
    const tab = e.target.closest(".filter-tab");
    if (!tab) return;

    $$(".filter-tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    state.filter = tab.dataset.filter;
    renderTopics();
  }

  // --- Init ---
  function init() {
    applyTheme();

    // Check if streak needs reset (missed a day)
    const today = getTodayStr();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    if (
      state.lastDate &&
      state.lastDate !== today &&
      state.lastDate !== yesterdayStr
    ) {
      state.streak = 0;
      save(STORAGE_KEYS.STREAK, "0");
    }

    renderSheetTabs();
    renderStats();
    renderTopics();

    // Event Listeners
    $("#mainContent").addEventListener("click", handleMainClick);
    $("#mainContent").addEventListener("change", handleMainClick);

    $("#themeToggle").addEventListener("click", toggleTheme);

    $("#searchInput").addEventListener("input", handleSearch);
    $("#searchInput").addEventListener("focus", handleSearch);

    // Ctrl+K shortcut
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        $("#searchInput").focus();
      }
      if (e.key === "Escape") {
        $("#searchOverlay").classList.remove("active");
        $("#searchInput").value = "";
        $("#searchInput").blur();
        $("#notesModal").classList.remove("active");
        $("#resetModal").classList.remove("active");
      }
    });

    // Close search overlay when clicking outside
    $("#searchOverlay").addEventListener("click", (e) => {
      if (e.target === $("#searchOverlay")) {
        $("#searchOverlay").classList.remove("active");
        $("#searchInput").value = "";
      }
    });

    // Filter tabs
    document
      .querySelector(".filter-tabs")
      .addEventListener("click", handleFilter);

    // Collapse all
    $("#collapseAll").addEventListener("click", () => {
      const allOpen = $$(".topic-card.open").length > 0;
      if (allOpen) {
        $$(".topic-card").forEach((c) => c.classList.remove("open"));
        state.openTopics.clear();
        $("#collapseAll").textContent = "Expand All";
      } else {
        $$(".topic-card").forEach((c) => c.classList.add("open"));
        getCurrentData().forEach((t) => state.openTopics.add(t.topic));
        $("#collapseAll").textContent = "Collapse All";
      }
      save(STORAGE_KEYS.OPEN_TOPICS, state.openTopics);
    });

    // Notes modal
    $("#closeNotes").addEventListener("click", () => {
      $("#notesModal").classList.remove("active");
    });

    $("#saveNotes").addEventListener("click", () => {
      const qId = state.currentNoteId;
      const text = $("#notesTextarea").value.trim();
      if (text) {
        state.notes[qId] = text;
      } else {
        delete state.notes[qId];
      }
      save(STORAGE_KEYS.NOTES, state.notes);
      $("#notesModal").classList.remove("active");
      renderTopics();
      showToast("📝 Notes saved!");
    });

    $("#notesModal").addEventListener("click", (e) => {
      if (e.target === $("#notesModal")) {
        $("#notesModal").classList.remove("active");
      }
    });

    // Reset modal
    $("#resetBtn").addEventListener("click", () => {
      $("#resetModal").classList.add("active");
    });

    $("#closeReset").addEventListener("click", () => {
      $("#resetModal").classList.remove("active");
    });

    $("#cancelReset").addEventListener("click", () => {
      $("#resetModal").classList.remove("active");
    });

    $("#confirmReset").addEventListener("click", () => {
      state.done = new Set();
      state.bookmarks = new Set();
      state.notes = {};
      state.streak = 0;
      state.lastDate = "";
      state.dailyLog = {};
      state.openTopics = new Set();

      Object.values(STORAGE_KEYS).forEach((key) => {
        if (key !== STORAGE_KEYS.THEME) localStorage.removeItem(key);
      });

      $("#resetModal").classList.remove("active");
      renderStats();
      renderTopics();
      showToast("🔄 All progress has been reset.");
    });

    $("#resetModal").addEventListener("click", (e) => {
      if (e.target === $("#resetModal")) {
        $("#resetModal").classList.remove("active");
      }
    });
  }

  // Run
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

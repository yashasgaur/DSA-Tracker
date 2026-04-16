# 🚀 DSA Tracker — 1700+ Questions

A modern, feature-rich **DSA (Data Structures & Algorithms) tracker** built with vanilla HTML, CSS, and JavaScript. Track your progress through **three popular DSA sheets** with a beautiful, responsive interface.

🔗 **Live Site:** [dsa-tracker-by-yashas.vercel.app](https://dsa-tracker-by-yashas.vercel.app)

![Dark Theme](https://img.shields.io/badge/Theme-Dark%20%2F%20Light-blue)
![Questions](https://img.shields.io/badge/Questions-1000%2B-green)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-black)

## 📋 Sheets Included

| Sheet                      | Questions | Source                                                                                                |
| -------------------------- | --------- | ----------------------------------------------------------------------------------------------------- |
| Love Babbar 450            | 450       | [Love Babbar](https://www.youtube.com/channel/UCQHLxxBFrbfdrk1jF0moTpw)                               |
| Striver A2Z DSA            | 455       | [takeUforward](https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/)     |
| Striver SDE Sheet          | 191       | [takeUforward](https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/) |
| Kunal Kushwaha Assignments | 601       | [DSA Bootcamp Assignments](https://github.com/kunal-kushwaha/DSA-Bootcamp-Java/tree/main/assignments) |

## ✨ Features

- **1700+ curated DSA questions** across 4 sheets and 90+ topics
- **Multi-sheet tabs** — switch between Love Babbar, Striver A2Z, Striver SDE, and Kunal Kushwaha assignments sheets
- **Multi-platform links** — GFG, LeetCode, and TUF badges for each question
- **Progress tracking** with circular chart and per-topic progress bars
- **Dark / Light theme** toggle
- **Search** with Ctrl+K shortcut — instantly find any question
- **Filter** by All / Pending / Completed / Bookmarked
- **Bookmarks** to flag important problems for revision
- **Notes** per question — jot down approaches, time complexity, etc.
- **Streak counter** — tracks consecutive days of practice
- **Daily solved count** — see how many you did today
- **Responsive design** — works on desktop, tablet, and mobile
- **Offline-first** — all data stored in localStorage, no backend needed

## � Getting Started

### Run Locally

No build tools needed — just open the HTML file:

```bash
# Clone the repo
git clone https://github.com/yashasgaur/DSA-Tracker.git
cd DSA-Tracker

# Open in browser
start index.html      # Windows
open index.html       # macOS
xdg-open index.html   # Linux
```

## 🛠️ Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, flexbox, grid, animations
- **Vanilla JavaScript** — no frameworks, no dependencies
- **localStorage** — client-side persistence

## 📁 Project Structure

```
DSA-Tracker/
├── index.html                # Main HTML page
├── style.css                 # All styles (dark/light themes)
├── data.js                   # Love Babbar 450 questions + sheet config
├── striver_a2z_data_gen.js   # Striver A2Z 455 questions
├── striver_data_gen.js       # Striver SDE 191 questions
├── app.js                    # Application logic
├── vercel.json               # Vercel deployment config
└── README.md                 # This file
```

## 📝 Credits

- Love Babbar 450 sheet by [Love Babbar](https://www.youtube.com/channel/UCQHLxxBFrbfdrk1jF0moTpw)
- Striver A2Z & SDE sheets by [takeUforward](https://takeuforward.org)
- UI inspired by [450dsa.com](https://450dsa.com)

## 📄 License

MIT License — feel free to use and modify for your own DSA journey!

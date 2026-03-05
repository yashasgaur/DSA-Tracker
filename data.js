// ============================================
// DSA Tracker - Complete Question Database
// 450+ Questions from Love Babbar's DSA Sheet
// ============================================

const DSA_DATA = [
  {
    topic: "Array",
    icon: "📊",
    questions: [
      {
        name: "Reverse the array",
        url: "https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/",
      },
      {
        name: "Find the maximum and minimum element in an array",
        url: "https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/",
      },
      {
        name: 'Find the "Kth" max and min element of an array',
        url: "https://practice.geeksforgeeks.org/problems/kth-smallest-element/0",
        lcUrl: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      },
      {
        name: "Sort an array of 0s, 1s and 2s without sorting algo",
        url: "https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s/0",
        lcUrl: "https://leetcode.com/problems/sort-colors/",
      },
      {
        name: "Move all negative elements to one side of the array",
        url: "https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/",
      },
      {
        name: "Find the Union and Intersection of two sorted arrays",
        url: "https://practice.geeksforgeeks.org/problems/union-of-two-arrays/0",
      },
      {
        name: "Cyclically rotate an array by one",
        url: "https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one/0",
      },
      {
        name: "Largest sum contiguous Subarray [Kadane's Algo]",
        url: "https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0",
        lcUrl: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        name: "Minimise the maximum difference between heights",
        url: "https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1",
      },
      {
        name: "Minimum no. of Jumps to reach end of an array",
        url: "https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0",
        lcUrl: "https://leetcode.com/problems/jump-game-ii/",
      },
      {
        name: "Find duplicate in an array of N+1 Integers",
        url: "https://leetcode.com/problems/find-the-duplicate-number/",
      },
      {
        name: "Merge 2 sorted arrays without using extra space",
        url: "https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1",
        lcUrl: "https://leetcode.com/problems/merge-sorted-array/",
      },
      {
        name: "Kadane's Algorithm [V.V.V.V.V IMP]",
        url: "https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0",
        lcUrl: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        name: "Merge Intervals",
        url: "https://leetcode.com/problems/merge-intervals/",
      },
      {
        name: "Next Permutation",
        url: "https://leetcode.com/problems/next-permutation/",
      },
      {
        name: "Count Inversions",
        url: "https://practice.geeksforgeeks.org/problems/inversion-of-array/0",
      },
      {
        name: "Best Time to Buy and Sell Stock",
        url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
      {
        name: "Find all pairs whose sum is equal to given number",
        url: "https://practice.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1",
      },
      {
        name: "Find common elements in 3 sorted arrays",
        url: "https://practice.geeksforgeeks.org/problems/common-elements1132/1",
      },
      {
        name: "Rearrange array in alternating positive and negative items",
        url: "https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/",
      },
      {
        name: "Find if there is any subarray with sum equal to 0",
        url: "https://practice.geeksforgeeks.org/problems/subarray-with-0-sum/0",
      },
      {
        name: "Find factorial of a large number",
        url: "https://practice.geeksforgeeks.org/problems/factorials-of-large-numbers/0",
      },
      {
        name: "Find maximum product subarray",
        url: "https://practice.geeksforgeeks.org/problems/maximum-product-subarray3604/1",
        lcUrl: "https://leetcode.com/problems/maximum-product-subarray/",
      },
      {
        name: "Find longest consecutive subsequence",
        url: "https://practice.geeksforgeeks.org/problems/longest-consecutive-subsequence/0",
        lcUrl: "https://leetcode.com/problems/longest-consecutive-sequence/",
      },
      {
        name: "Find elements appearing more than n/k times",
        url: "https://www.geeksforgeeks.org/given-an-array-of-of-size-n-finds-all-the-elements-that-appear-more-than-nk-times/",
      },
      {
        name: "Maximum profit by buying and selling a share at most twice",
        url: "https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/",
        lcUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
      },
      {
        name: "Find whether an array is a subset of another array",
        url: "https://practice.geeksforgeeks.org/problems/array-subset-of-another-array/0",
      },
      {
        name: "Find the triplet that sum to a given value",
        url: "https://practice.geeksforgeeks.org/problems/triplet-sum-in-array/0",
      },
      {
        name: "Trapping Rain Water",
        url: "https://practice.geeksforgeeks.org/problems/trapping-rain-water/0",
        lcUrl: "https://leetcode.com/problems/trapping-rain-water/",
      },
      {
        name: "Chocolate Distribution Problem",
        url: "https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem/0",
      },
      {
        name: "Smallest subarray with sum greater than given value",
        url: "https://practice.geeksforgeeks.org/problems/smallest-subarray-with-sum-greater-than-x/0",
        lcUrl: "https://leetcode.com/problems/minimum-size-subarray-sum/",
      },
      {
        name: "Three way partitioning of an array around a given value",
        url: "https://practice.geeksforgeeks.org/problems/three-way-partitioning/1",
      },
      {
        name: "Minimum swaps required to bring elements <= K together",
        url: "https://practice.geeksforgeeks.org/problems/minimum-swaps-required-to-bring-all-elements-less-than-or-equal-to-k-together/0",
      },
      {
        name: "Minimum no. of operations to make an array palindrome",
        url: "https://practice.geeksforgeeks.org/problems/palindromic-array/0",
      },
      {
        name: "Median of 2 sorted arrays of equal size",
        url: "https://practice.geeksforgeeks.org/problems/find-the-median0527/1",
      },
      {
        name: "Median of 2 sorted arrays of different size",
        url: "https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/",
        lcUrl: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      },
    ],
  },
  {
    topic: "Matrix",
    icon: "🔢",
    questions: [
      {
        name: "Spiral traversal on a Matrix",
        url: "https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix/0",
        lcUrl: "https://leetcode.com/problems/spiral-matrix/",
      },
      {
        name: "Search an element in a matrix",
        url: "https://leetcode.com/problems/search-a-2d-matrix/",
      },
      {
        name: "Find median in a row-wise sorted matrix",
        url: "https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1",
      },
      {
        name: "Find row with maximum no. of 1's",
        url: "https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1",
      },
      {
        name: "Print elements in sorted order using row-column wise sorted matrix",
        url: "https://practice.geeksforgeeks.org/problems/sorted-matrix/0",
      },
      {
        name: "Maximum size rectangle",
        url: "https://practice.geeksforgeeks.org/problems/max-rectangle/1",
        lcUrl: "https://leetcode.com/problems/maximal-rectangle/",
      },
      {
        name: "Find a specific pair in matrix",
        url: "https://www.geeksforgeeks.org/find-a-specific-pair-in-matrix/",
      },
      {
        name: "Rotate matrix by 90 degrees",
        url: "https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/",
        lcUrl: "https://leetcode.com/problems/rotate-image/",
      },
      {
        name: "Kth smallest element in a row-column wise sorted matrix",
        url: "https://practice.geeksforgeeks.org/problems/kth-element-in-matrix/1",
        lcUrl: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
      },
      {
        name: "Common elements in all rows of a given matrix",
        url: "https://www.geeksforgeeks.org/common-elements-in-all-rows-of-a-given-matrix/",
      },
    ],
  },
  {
    topic: "String",
    icon: "🔤",
    questions: [
      {
        name: "Reverse a String",
        url: "https://leetcode.com/problems/reverse-string/",
      },
      {
        name: "Check whether a String is Palindrome or not",
        url: "https://practice.geeksforgeeks.org/problems/palindrome-string0817/1",
        lcUrl: "https://leetcode.com/problems/valid-palindrome/",
      },
      {
        name: "Find Duplicate characters in a string",
        url: "https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/",
      },
      { name: "Why strings are immutable in Java?", url: "" },
      {
        name: "Check whether one string is a rotation of another",
        url: "https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/",
      },
      {
        name: "Check if a string is a valid shuffle of two strings",
        url: "https://www.programiz.com/java-programming/examples/check-valid-shuffle-of-strings",
      },
      {
        name: "Count and Say problem",
        url: "https://leetcode.com/problems/count-and-say/",
      },
      {
        name: "Longest Palindromic Substring",
        url: "https://practice.geeksforgeeks.org/problems/longest-palindrome-in-a-string/0",
        lcUrl: "https://leetcode.com/problems/longest-palindromic-substring/",
      },
      {
        name: "Find Longest Recurring Subsequence in String",
        url: "https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence/0",
      },
      {
        name: "Print all Subsequences of a string",
        url: "https://www.geeksforgeeks.org/print-subsequences-string/",
      },
      {
        name: "Print all permutations of a given string",
        url: "https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string/0",
        lcUrl: "https://leetcode.com/problems/permutations/",
      },
      {
        name: "Split Binary string into substrings with equal 0's and 1's",
        url: "https://www.geeksforgeeks.org/split-the-binary-string-into-substrings-with-equal-number-of-0s-and-1s/",
      },
      {
        name: "Word Wrap Problem [VERY IMP]",
        url: "https://practice.geeksforgeeks.org/problems/word-wrap/0",
      },
      {
        name: "EDIT Distance [Very Imp]",
        url: "https://practice.geeksforgeeks.org/problems/edit-distance3702/1",
        lcUrl: "https://leetcode.com/problems/edit-distance/",
      },
      {
        name: "Find next greater number with same set of digits [V.V IMP]",
        url: "https://practice.geeksforgeeks.org/problems/next-permutation/0",
        lcUrl: "https://leetcode.com/problems/next-permutation/",
      },
      {
        name: "Balanced Parenthesis problem [Imp]",
        url: "https://practice.geeksforgeeks.org/problems/parenthesis-checker/0",
        lcUrl: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        name: "Word Break Problem [Very Imp]",
        url: "https://practice.geeksforgeeks.org/problems/word-break/0",
        lcUrl: "https://leetcode.com/problems/word-break/",
      },
      {
        name: "Rabin Karp Algorithm",
        url: "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/",
      },
      {
        name: "KMP Algorithm",
        url: "https://practice.geeksforgeeks.org/problems/longest-prefix-suffix2527/1",
      },
      {
        name: "Convert Sentence into mobile numeric keypad sequence",
        url: "https://practice.geeksforgeeks.org/problems/convert-a-sentence-into-its-equivalent-mobile-numeric-keypad-sequence0547/1",
      },
      {
        name: "Minimum bracket reversals to make expression balanced",
        url: "https://practice.geeksforgeeks.org/problems/count-the-reversals/0",
      },
      {
        name: "Count All Palindromic Subsequence in a given String",
        url: "https://practice.geeksforgeeks.org/problems/count-palindromic-subsequences/1",
        lcUrl: "https://leetcode.com/problems/count-different-palindromic-subsequences/",
      },
      {
        name: "Count of given string in 2D character array",
        url: "https://practice.geeksforgeeks.org/problems/count-occurences-of-a-given-word-in-a-2-d-array/1",
      },
      {
        name: "Search a Word in a 2D Grid of characters",
        url: "https://practice.geeksforgeeks.org/problems/find-the-string-in-grid/0",
      },
      {
        name: "Boyer Moore Algorithm for Pattern Searching",
        url: "https://www.geeksforgeeks.org/boyer-moore-algorithm-for-pattern-searching/",
      },
      {
        name: "Converting Roman Numerals to Decimal",
        url: "https://practice.geeksforgeeks.org/problems/roman-number-to-integer/0",
        lcUrl: "https://leetcode.com/problems/roman-to-integer/",
      },
      {
        name: "Longest Common Prefix",
        url: "https://leetcode.com/problems/longest-common-prefix/",
      },
      {
        name: "Number of flips to make binary string alternate",
        url: "https://practice.geeksforgeeks.org/problems/min-number-of-flips/0",
      },
      {
        name: "Find the first repeated word in string",
        url: "https://practice.geeksforgeeks.org/problems/second-most-repeated-string-in-a-sequence/0",
      },
      {
        name: "Minimum swaps for bracket balancing",
        url: "https://practice.geeksforgeeks.org/problems/minimum-swaps-for-bracket-balancing/0",
      },
      {
        name: "Find the longest common subsequence between two strings",
        url: "https://practice.geeksforgeeks.org/problems/longest-common-subsequence/0",
        lcUrl: "https://leetcode.com/problems/longest-common-subsequence/",
      },
      {
        name: "Generate all possible valid IP addresses from given string",
        url: "https://practice.geeksforgeeks.org/problems/generate-ip-addresses/1",
        lcUrl: "https://leetcode.com/problems/restore-ip-addresses/",
      },
      {
        name: "Smallest window containing all characters of string itself",
        url: "https://practice.geeksforgeeks.org/problems/smallest-distant-window/0",
      },
      {
        name: "Rearrange characters so no two adjacent are same",
        url: "https://practice.geeksforgeeks.org/problems/rearrange-characters/0",
        lcUrl: "https://leetcode.com/problems/reorganize-string/",
      },
      {
        name: "Minimum characters to add at front to make string palindrome",
        url: "https://www.geeksforgeeks.org/minimum-characters-added-front-make-string-palindrome/",
        lcUrl: "https://leetcode.com/problems/shortest-palindrome/",
      },
      {
        name: "Print all anagrams together",
        url: "https://practice.geeksforgeeks.org/problems/k-anagrams-1/0",
      },
      {
        name: "Smallest window containing all characters of another string",
        url: "https://practice.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string/0",
        lcUrl: "https://leetcode.com/problems/minimum-window-substring/",
      },
      {
        name: "Recursively remove all adjacent duplicates",
        url: "https://practice.geeksforgeeks.org/problems/consecutive-elements/0",
        lcUrl: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",
      },
      {
        name: "String matching with wildcard characters",
        url: "https://practice.geeksforgeeks.org/problems/wildcard-string-matching/0",
        lcUrl: "https://leetcode.com/problems/wildcard-matching/",
      },
      {
        name: "Number of customers who could not get a computer",
        url: "https://www.geeksforgeeks.org/function-to-find-number-of-customers-who-could-not-get-a-computer/",
      },
      {
        name: "Transform one string to another using minimum operations",
        url: "https://www.geeksforgeeks.org/transform-one-string-to-another-using-minimum-number-of-given-operation/",
      },
      {
        name: "Check if two strings are isomorphic",
        url: "https://practice.geeksforgeeks.org/problems/isomorphic-strings/0",
        lcUrl: "https://leetcode.com/problems/isomorphic-strings/",
      },
      {
        name: "Recursively print all sentences from list of word lists",
        url: "https://www.geeksforgeeks.org/recursively-print-all-sentences-that-can-be-formed-from-list-of-word-lists/",
      },
    ],
  },
  {
    topic: "Searching & Sorting",
    icon: "🔍",
    questions: [
      {
        name: "Find first and last positions of element in sorted array",
        url: "https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x/0",
        lcUrl: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
      },
      {
        name: "Find a Fixed Point (Value equal to index)",
        url: "https://practice.geeksforgeeks.org/problems/value-equal-to-index-value1330/1",
      },
      {
        name: "Search in a rotated sorted array",
        url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      {
        name: "Square root of an integer",
        url: "https://practice.geeksforgeeks.org/problems/square-root/1",
        lcUrl: "https://leetcode.com/problems/sqrtx/",
      },
      {
        name: "Maximum and minimum using minimum comparisons",
        url: "https://practice.geeksforgeeks.org/problems/middle-of-three2926/1",
      },
      {
        name: "Optimum location to minimize total distance",
        url: "https://www.geeksforgeeks.org/optimum-location-point-minimize-total-distance/",
      },
      {
        name: "Find the repeating and the missing",
        url: "https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1",
      },
      {
        name: "Find majority element",
        url: "https://practice.geeksforgeeks.org/problems/majority-element/0",
        lcUrl: "https://leetcode.com/problems/majority-element/",
      },
      {
        name: "Searching in array where adjacent differ by at most k",
        url: "https://practice.geeksforgeeks.org/problems/searching-in-an-array-where-adjacent-differ-by-at-most-k0456/1",
      },
      {
        name: "Find a pair with a given difference",
        url: "https://practice.geeksforgeeks.org/problems/find-pair-given-difference/0",
      },
      {
        name: "Find four elements that sum to a given value",
        url: "https://practice.geeksforgeeks.org/problems/find-all-four-sum-numbers/0",
        lcUrl: "https://leetcode.com/problems/4sum/",
      },
      {
        name: "Maximum sum such that no 2 elements are adjacent",
        url: "https://practice.geeksforgeeks.org/problems/stickler-theif/0",
        lcUrl: "https://leetcode.com/problems/house-robber/",
      },
      {
        name: "Count triplets with sum smaller than given value",
        url: "https://practice.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1",
      },
      {
        name: "Merge 2 sorted arrays",
        url: "https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1",
        lcUrl: "https://leetcode.com/problems/merge-sorted-array/",
      },
      {
        name: "Print all subarrays with 0 sum",
        url: "https://practice.geeksforgeeks.org/problems/zero-sum-subarrays/0",
      },
      {
        name: "Product array Puzzle",
        url: "https://practice.geeksforgeeks.org/problems/product-array-puzzle/0",
        lcUrl: "https://leetcode.com/problems/product-of-array-except-self/",
      },
      {
        name: "Sort array according to count of set bits",
        url: "https://practice.geeksforgeeks.org/problems/sort-by-set-bit-count/0",
      },
      {
        name: "Minimum no. of swaps to sort the array",
        url: "https://practice.geeksforgeeks.org/problems/minimum-swaps/1",
      },
      {
        name: "Bishu and Soldiers",
        url: "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/bishu-and-soldiers/",
      },
      {
        name: "Rasta and Kheshtak",
        url: "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/rasta-and-kheshtak/",
      },
      {
        name: "Kth smallest number again",
        url: "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/kth-smallest-number-again-2/",
      },
      {
        name: "Find pivot element in a sorted rotated array",
        url: "http://theoryofprogramming.com/2017/12/16/find-pivot-element-sorted-rotated-array/",
      },
      {
        name: "K-th Element of Two Sorted Arrays",
        url: "https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array/0",
      },
      {
        name: "Aggressive Cows",
        url: "https://www.spoj.com/problems/AGGRCOW/",
      },
      {
        name: "Book Allocation Problem",
        url: "https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0",
      },
      { name: "EKOSPOJ", url: "https://www.spoj.com/problems/EKO/" },
      {
        name: "Job Scheduling Algorithm",
        url: "https://www.geeksforgeeks.org/weighted-job-scheduling-log-n-time/",
      },
      {
        name: "Missing Number in AP",
        url: "https://practice.geeksforgeeks.org/problems/arithmetic-number/0",
      },
      {
        name: "Smallest number with at least n trailing zeroes in factorial",
        url: "https://practice.geeksforgeeks.org/problems/smallest-factorial-number5929/1",
      },
      {
        name: "Painters Partition Problem",
        url: "https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0",
      },
      { name: "ROTI-Prata SPOJ", url: "https://www.spoj.com/problems/PRATA/" },
      {
        name: "Double Helix SPOJ",
        url: "https://www.spoj.com/problems/ANARC05B/",
      },
      { name: "Subset Sums", url: "https://www.spoj.com/problems/SUBSUMS/" },
      {
        name: "Find the inversion count",
        url: "https://practice.geeksforgeeks.org/problems/inversion-of-array/0",
      },
      {
        name: "Implement Merge-sort in-place",
        url: "https://www.geeksforgeeks.org/in-place-merge-sort/",
      },
      {
        name: "Sorting Arrays with Many Repeated Entries",
        url: "https://www.baeldung.com/java-sorting-arrays-with-repeated-entries",
      },
    ],
  },
  {
    topic: "Linked List",
    icon: "🔗",
    questions: [
      {
        name: "Reverse the Linked List (Iterative and Recursive)",
        url: "https://www.geeksforgeeks.org/reverse-a-linked-list/",
        lcUrl: "https://leetcode.com/problems/reverse-linked-list/",
      },
      {
        name: "Reverse a Linked List in groups of given size [V.Imp]",
        url: "https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1",
        lcUrl: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
      },
      {
        name: "Detect loop in a linked list",
        url: "https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1",
        lcUrl: "https://leetcode.com/problems/linked-list-cycle/",
      },
      {
        name: "Delete loop in a linked list",
        url: "https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1",
      },
      {
        name: "Find the starting point of the loop",
        url: "https://www.geeksforgeeks.org/find-first-node-of-loop-in-a-linked-list/",
        lcUrl: "https://leetcode.com/problems/linked-list-cycle-ii/",
      },
      {
        name: "Remove Duplicates in a sorted Linked List",
        url: "https://practice.geeksforgeeks.org/problems/remove-duplicate-element-from-sorted-linked-list/1",
        lcUrl: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
      },
      {
        name: "Remove Duplicates in an Un-sorted Linked List",
        url: "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1",
      },
      {
        name: "Move the last element to Front in a Linked List",
        url: "https://www.geeksforgeeks.org/move-last-element-to-front-of-a-given-linked-list/",
      },
      {
        name: 'Add "1" to a number represented as a Linked List',
        url: "https://practice.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1",
      },
      {
        name: "Add two numbers represented by linked lists",
        url: "https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1",
        lcUrl: "https://leetcode.com/problems/add-two-numbers/",
      },
      {
        name: "Intersection of two Sorted Linked Lists",
        url: "https://practice.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/1",
      },
      {
        name: "Intersection Point of two Linked Lists",
        url: "https://practice.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1",
        lcUrl: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
      },
      {
        name: "Merge Sort for Linked Lists [V. Important]",
        url: "https://practice.geeksforgeeks.org/problems/sort-a-linked-list/1",
        lcUrl: "https://leetcode.com/problems/sort-list/",
      },
      {
        name: "Quicksort for Linked Lists [V. Important]",
        url: "https://practice.geeksforgeeks.org/problems/quick-sort-on-linked-list/1",
      },
      {
        name: "Find the middle element of a linked list",
        url: "https://leetcode.com/problems/middle-of-the-linked-list/",
      },
      {
        name: "Check if a linked list is circular",
        url: "https://practice.geeksforgeeks.org/problems/circular-linked-list/1",
      },
      {
        name: "Split a Circular linked list into two halves",
        url: "https://practice.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1",
      },
      {
        name: "Check if Singly Linked list is a palindrome",
        url: "https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1",
        lcUrl: "https://leetcode.com/problems/palindrome-linked-list/",
      },
      {
        name: "Deletion from a Circular Linked List",
        url: "https://www.geeksforgeeks.org/deletion-circular-linked-list/",
      },
      {
        name: "Reverse a Doubly Linked list",
        url: "https://practice.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1",
      },
      {
        name: "Find pairs with given sum in a DLL",
        url: "https://www.geeksforgeeks.org/find-pairs-given-sum-doubly-linked-list/",
      },
      {
        name: "Count triplets in sorted DLL whose sum equals X",
        url: "https://www.geeksforgeeks.org/count-triplets-sorted-doubly-linked-list-whose-sum-equal-given-value-x/",
      },
      {
        name: "Sort a k-sorted Doubly Linked list [V.IMP]",
        url: "https://www.geeksforgeeks.org/sort-k-sorted-doubly-linked-list/",
      },
      {
        name: "Rotate Doubly Linked list by N nodes",
        url: "https://www.geeksforgeeks.org/rotate-doubly-linked-list-n-nodes/",
      },
      {
        name: "Rotate a Doubly Linked list in groups of given size [V.IMP]",
        url: "https://www.geeksforgeeks.org/reverse-doubly-linked-list-groups-given-size/",
      },
      { name: "Can we reverse a linked list in less than O(n)?", url: "" },
      {
        name: "Why Quicksort is preferred for Arrays and Merge Sort for Linked Lists?",
        url: "",
      },
      {
        name: "Flatten a Linked List",
        url: "https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1",
      },
      {
        name: "Sort a LL of 0's, 1's and 2's",
        url: "https://practice.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1",
      },
      {
        name: "Clone a linked list with next and random pointer",
        url: "https://practice.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1",
        lcUrl: "https://leetcode.com/problems/copy-list-with-random-pointer/",
      },
      {
        name: "Merge K sorted linked lists",
        url: "https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1",
        lcUrl: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        name: "Multiply 2 numbers represented by LL",
        url: "https://practice.geeksforgeeks.org/problems/multiply-two-linked-lists/1",
      },
      {
        name: "Delete nodes having greater value on right side",
        url: "https://practice.geeksforgeeks.org/problems/delete-nodes-having-greater-value-on-right/1",
      },
      {
        name: "Segregate even and odd nodes in a Linked List",
        url: "https://practice.geeksforgeeks.org/problems/segregate-even-and-odd-nodes-in-a-linked-list/0",
        lcUrl: "https://leetcode.com/problems/odd-even-linked-list/",
      },
      {
        name: "N'th node from the end of a Linked List",
        url: "https://practice.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1",
      },
      {
        name: "First non-repeating character from a stream",
        url: "https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream/0",
      },
    ],
  },
  {
    topic: "Binary Trees",
    icon: "🌳",
    questions: [
      {
        name: "Level order traversal",
        url: "https://practice.geeksforgeeks.org/problems/level-order-traversal/1",
        lcUrl: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
      {
        name: "Reverse Level Order traversal",
        url: "https://practice.geeksforgeeks.org/problems/reverse-level-order-traversal/1",
        lcUrl: "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
      },
      {
        name: "Height of a tree",
        url: "https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1",
        lcUrl: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      },
      {
        name: "Diameter of a tree",
        url: "https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1",
        lcUrl: "https://leetcode.com/problems/diameter-of-binary-tree/",
      },
      {
        name: "Mirror of a tree",
        url: "https://www.geeksforgeeks.org/create-a-mirror-tree-from-the-given-binary-tree/",
        lcUrl: "https://leetcode.com/problems/invert-binary-tree/",
      },
      {
        name: "Inorder Traversal (Iterative and Recursive)",
        url: "https://www.techiedelight.com/inorder-tree-traversal-iterative-recursive/",
      },
      {
        name: "Preorder Traversal (Iterative and Recursive)",
        url: "https://www.techiedelight.com/preorder-tree-traversal-iterative-recursive/",
      },
      {
        name: "Postorder Traversal (Iterative and Recursive)",
        url: "https://www.techiedelight.com/postorder-tree-traversal-iterative-recursive/",
      },
      {
        name: "Left View of a tree",
        url: "https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1",
      },
      {
        name: "Right View of a tree",
        url: "https://practice.geeksforgeeks.org/problems/right-view-of-binary-tree/1",
        lcUrl: "https://leetcode.com/problems/binary-tree-right-side-view/",
      },
      {
        name: "Top View of a tree",
        url: "https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
      },
      {
        name: "Bottom View of a tree",
        url: "https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1",
      },
      {
        name: "Zig-Zag traversal of a binary tree",
        url: "https://practice.geeksforgeeks.org/problems/zigzag-tree-traversal/1",
        lcUrl: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
      },
      {
        name: "Check if a tree is balanced or not",
        url: "https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1",
        lcUrl: "https://leetcode.com/problems/balanced-binary-tree/",
      },
      {
        name: "Diagonal Traversal of a Binary tree",
        url: "https://www.geeksforgeeks.org/diagonal-traversal-of-binary-tree/",
      },
      {
        name: "Boundary traversal of a Binary tree",
        url: "https://practice.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1",
      },
      {
        name: "Construct Binary Tree from String with Bracket Representation",
        url: "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-string-with-bracket-representation/1",
      },
      {
        name: "Convert Binary tree into Doubly Linked List",
        url: "https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1",
      },
      {
        name: "Convert Binary tree into Sum tree",
        url: "https://practice.geeksforgeeks.org/problems/transform-to-sum-tree/1",
      },
      {
        name: "Construct Binary tree from Inorder and Preorder traversal",
        url: "https://practice.geeksforgeeks.org/problems/construct-tree-1/1",
        lcUrl: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
      },
      {
        name: "Find minimum swaps to convert Binary tree into BST",
        url: "https://www.geeksforgeeks.org/minimum-swap-required-convert-binary-tree-binary-search-tree/",
      },
      {
        name: "Check if Binary tree is Sum tree or not",
        url: "https://practice.geeksforgeeks.org/problems/sum-tree/1",
      },
      {
        name: "Check if all leaf nodes are at same level",
        url: "https://practice.geeksforgeeks.org/problems/leaf-at-same-level/1",
      },
      {
        name: "Check if Binary Tree contains duplicate subtrees of size 2+",
        url: "https://practice.geeksforgeeks.org/problems/duplicate-subtree-in-binary-tree/1",
        lcUrl: "https://leetcode.com/problems/find-duplicate-subtrees/",
      },
      {
        name: "Check if 2 trees are mirror or not",
        url: "https://practice.geeksforgeeks.org/problems/check-mirror-in-n-ary-tree/0",
      },
      {
        name: "Sum of Nodes on the Longest path from root to leaf",
        url: "https://practice.geeksforgeeks.org/problems/sum-of-the-longest-bloodline-of-a-tree/1",
      },
      {
        name: "Check if given graph is tree or not [IMP]",
        url: "https://www.geeksforgeeks.org/check-given-graph-tree/",
      },
      {
        name: "Find Largest subtree sum in a tree",
        url: "https://www.geeksforgeeks.org/find-largest-subtree-sum-tree/",
      },
      {
        name: "Maximum Sum of nodes such that no two are adjacent",
        url: "https://www.geeksforgeeks.org/maximum-sum-nodes-binary-tree-no-two-adjacent/",
        lcUrl: "https://leetcode.com/problems/house-robber-iii/",
      },
      {
        name: "Print all K Sum paths in a Binary tree",
        url: "https://www.geeksforgeeks.org/print-k-sum-paths-binary-tree/",
        lcUrl: "https://leetcode.com/problems/path-sum-iii/",
      },
      {
        name: "Find LCA in a Binary tree",
        url: "https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1",
        lcUrl: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
      },
      {
        name: "Find distance between 2 nodes in a Binary tree",
        url: "https://practice.geeksforgeeks.org/problems/min-distance-between-two-given-nodes-of-a-binary-tree/1",
      },
      {
        name: "Kth Ancestor of node in a Binary tree",
        url: "https://www.geeksforgeeks.org/kth-ancestor-node-binary-tree-set-2/",
      },
      {
        name: "Find all Duplicate subtrees in a Binary tree [IMP]",
        url: "https://practice.geeksforgeeks.org/problems/duplicate-subtrees/1",
        lcUrl: "https://leetcode.com/problems/find-duplicate-subtrees/",
      },
      {
        name: "Tree Isomorphism Problem",
        url: "https://practice.geeksforgeeks.org/problems/check-if-tree-is-isomorphic/1",
      },
    ],
  },
  {
    topic: "BST",
    icon: "🌲",
    questions: [
      {
        name: "Find a value in a BST",
        url: "https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/",
        lcUrl: "https://leetcode.com/problems/search-in-a-binary-search-tree/",
      },
      {
        name: "Deletion of a node in a BST",
        url: "https://leetcode.com/problems/delete-node-in-a-bst/",
      },
      {
        name: "Find min and max value in a BST",
        url: "https://practice.geeksforgeeks.org/problems/minimum-element-in-bst/1",
      },
      {
        name: "Find inorder successor and predecessor in a BST",
        url: "https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1",
      },
      {
        name: "Check if a tree is a BST or not",
        url: "https://practice.geeksforgeeks.org/problems/check-for-bst/1",
        lcUrl: "https://leetcode.com/problems/validate-binary-search-tree/",
      },
      {
        name: "Populate Inorder successor of all nodes",
        url: "https://practice.geeksforgeeks.org/problems/populate-inorder-successor-for-all-nodes/1",
      },
      {
        name: "Find LCA of 2 nodes in a BST",
        url: "https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1",
        lcUrl: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
      },
      {
        name: "Construct BST from preorder traversal",
        url: "https://www.geeksforgeeks.org/construct-bst-from-given-preorder-traversa/",
        lcUrl: "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",
      },
      {
        name: "Convert Binary tree into BST",
        url: "https://practice.geeksforgeeks.org/problems/binary-tree-to-bst/1",
      },
      {
        name: "Convert a normal BST into a Balanced BST",
        url: "https://www.geeksforgeeks.org/convert-normal-bst-balanced-bst/",
        lcUrl: "https://leetcode.com/problems/balance-a-binary-search-tree/",
      },
      {
        name: "Merge two BST [V.V.V IMP]",
        url: "https://www.geeksforgeeks.org/merge-two-balanced-binary-search-trees/",
      },
      {
        name: "Find Kth largest element in a BST",
        url: "https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1",
      },
      {
        name: "Find Kth smallest element in a BST",
        url: "https://practice.geeksforgeeks.org/problems/find-k-th-smallest-element-in-bst/1",
        lcUrl: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
      },
      {
        name: "Count pairs from 2 BST whose sum equals X",
        url: "https://practice.geeksforgeeks.org/problems/brothers-from-different-root/1",
      },
      {
        name: "Find the median of BST in O(n) time and O(1) space",
        url: "https://www.geeksforgeeks.org/find-median-bst-time-o1-space/",
      },
      {
        name: "Count BST nodes that lie in a given range",
        url: "https://practice.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1",
      },
      {
        name: "Replace every element with least greater element on right",
        url: "https://www.geeksforgeeks.org/replace-every-element-with-the-least-greater-element-on-its-right/",
      },
      {
        name: "Given n appointments, find conflicting appointments",
        url: "https://www.geeksforgeeks.org/given-n-appointments-find-conflicting-appointments/",
      },
      {
        name: "Check preorder is valid or not",
        url: "https://practice.geeksforgeeks.org/problems/preorder-to-postorder/0",
      },
      {
        name: "Check whether BST contains Dead end",
        url: "https://practice.geeksforgeeks.org/problems/check-whether-bst-contains-dead-end/1",
      },
      {
        name: "Largest BST in a Binary Tree [V.V.V.V.V IMP]",
        url: "https://practice.geeksforgeeks.org/problems/largest-bst/1",
      },
      {
        name: "Flatten BST to sorted list",
        url: "https://www.geeksforgeeks.org/flatten-bst-to-sorted-list-increasing-order/",
      },
    ],
  },
  {
    topic: "Greedy",
    icon: "🤑",
    questions: [
      {
        name: "Activity Selection Problem",
        url: "https://practice.geeksforgeeks.org/problems/activity-selection-1587115620/1/",
      },
      {
        name: "Job Sequencing Problem",
        url: "https://practice.geeksforgeeks.org/problems/job-sequencing-problem/0",
      },
      {
        name: "Huffman Coding",
        url: "https://practice.geeksforgeeks.org/problems/huffman-encoding/0",
      },
      {
        name: "Water Connection Problem",
        url: "https://practice.geeksforgeeks.org/problems/water-connection-problem/0",
      },
      {
        name: "Fractional Knapsack Problem",
        url: "https://practice.geeksforgeeks.org/problems/fractional-knapsack/0",
      },
      {
        name: "Greedy Algorithm to find Minimum number of Coins",
        url: "https://practice.geeksforgeeks.org/problems/coin-piles/0",
      },
      {
        name: "Maximum trains for which stoppage can be provided",
        url: "https://www.geeksforgeeks.org/maximum-trains-stoppage-can-provided/",
      },
      {
        name: "Minimum Platforms Problem",
        url: "https://practice.geeksforgeeks.org/problems/minimum-platforms/0",
      },
      {
        name: "Buy Maximum Stocks if i stocks can be bought on i-th day",
        url: "https://www.geeksforgeeks.org/buy-maximum-stocks-stocks-can-bought-th-day/",
      },
      {
        name: "Find minimum and maximum amount to buy all N candies",
        url: "https://practice.geeksforgeeks.org/problems/shop-in-candy-store/0",
      },
      {
        name: "Minimize Cash Flow among friends",
        url: "https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/",
      },
      {
        name: "Minimum Cost to cut a board into squares",
        url: "https://www.geeksforgeeks.org/minimum-cost-cut-board-squares/",
      },
      {
        name: "Check if it is possible to survive on Island",
        url: "https://www.geeksforgeeks.org/survival/",
      },
      {
        name: "Find maximum meetings in one room",
        url: "https://www.geeksforgeeks.org/find-maximum-meetings-in-one-room/",
      },
      {
        name: "Maximum product subset of an array",
        url: "https://www.geeksforgeeks.org/maximum-product-subset-array/",
      },
      {
        name: "Maximize array sum after K negations",
        url: "https://practice.geeksforgeeks.org/problems/maximize-sum-after-k-negations/0",
      },
      {
        name: "Maximize the sum of arr[i]*i",
        url: "https://practice.geeksforgeeks.org/problems/maximize-arrii-of-an-array/0",
      },
      {
        name: "Maximum sum of absolute difference of an array",
        url: "https://www.geeksforgeeks.org/maximum-sum-absolute-difference-array/",
      },
      {
        name: "Maximize sum of consecutive differences in circular array",
        url: "https://practice.geeksforgeeks.org/problems/swap-and-maximize/0",
      },
      {
        name: "Minimum sum of absolute difference of pairs of two arrays",
        url: "https://www.geeksforgeeks.org/minimum-sum-absolute-difference-pairs-two-arrays/",
      },
      {
        name: "Shortest Job First (SJF) CPU Scheduling",
        url: "https://www.geeksforgeeks.org/program-for-shortest-job-first-or-sjf-cpu-scheduling-set-1-non-preemptive/",
      },
      {
        name: "Least Recently Used (LRU) Page Replacement",
        url: "https://practice.geeksforgeeks.org/problems/page-faults-in-lru/0",
      },
      {
        name: "Smallest subset with sum greater than all other elements",
        url: "https://www.geeksforgeeks.org/smallest-subset-sum-greater-elements/",
      },
      {
        name: "Chocolate Distribution Problem",
        url: "https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem/0",
      },
      {
        name: "DEFKIN - Defense of a Kingdom",
        url: "https://www.spoj.com/problems/DEFKIN/",
      },
      {
        name: "DIEHARD - DIE HARD",
        url: "https://www.spoj.com/problems/DIEHARD/",
      },
      {
        name: "GERGOVIA - Wine trading in Gergovia",
        url: "https://www.spoj.com/problems/GERGOVIA/",
      },
      {
        name: "Picking Up Chicks",
        url: "https://www.spoj.com/problems/GCJ101BB/",
      },
      {
        name: "CHOCOLA - Chocolate",
        url: "https://www.spoj.com/problems/CHOCOLA/",
      },
      {
        name: "ARRANGE - Arranging Amplifiers",
        url: "https://www.spoj.com/problems/ARRANGE/",
      },
      {
        name: "K Centers Problem",
        url: "https://www.geeksforgeeks.org/k-centers-problem-set-1-greedy-approximate-algorithm/",
      },
      {
        name: "Minimum Cost of Ropes",
        url: "https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes/0",
      },
      {
        name: "Find smallest number with given digits and sum",
        url: "https://practice.geeksforgeeks.org/problems/smallest-number5829/1",
      },
      {
        name: "Rearrange characters so no two adjacent are same",
        url: "https://practice.geeksforgeeks.org/problems/rearrange-characters/0",
        lcUrl: "https://leetcode.com/problems/reorganize-string/",
      },
      {
        name: "Find maximum sum possible equal sum of three stacks",
        url: "https://www.geeksforgeeks.org/find-maximum-sum-possible-equal-sum-three-stacks/",
      },
    ],
  },
  {
    topic: "Backtracking",
    icon: "🔙",
    questions: [
      {
        name: "Rat in a Maze Problem",
        url: "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
      },
      {
        name: "Printing all solutions in N-Queen Problem",
        url: "https://www.geeksforgeeks.org/printing-solutions-n-queen-problem/",
        lcUrl: "https://leetcode.com/problems/n-queens/",
      },
      {
        name: "Word Break Problem using Backtracking",
        url: "https://practice.geeksforgeeks.org/problems/word-break-part-2/0",
        lcUrl: "https://leetcode.com/problems/word-break-ii/",
      },
      {
        name: "Remove Invalid Parentheses",
        url: "https://leetcode.com/problems/remove-invalid-parentheses/",
      },
      {
        name: "Sudoku Solver",
        url: "https://practice.geeksforgeeks.org/problems/solve-the-sudoku/0",
        lcUrl: "https://leetcode.com/problems/sudoku-solver/",
      },
      {
        name: "m Coloring Problem",
        url: "https://practice.geeksforgeeks.org/problems/m-coloring-problem/0",
      },
      {
        name: "Print all palindromic partitions of a string",
        url: "https://www.geeksforgeeks.org/given-a-string-print-all-possible-palindromic-partition/",
        lcUrl: "https://leetcode.com/problems/palindrome-partitioning/",
      },
      {
        name: "Subset Sum Problem",
        url: "https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1",
        lcUrl: "https://leetcode.com/problems/partition-equal-subset-sum/",
      },
      {
        name: "The Knight's tour problem",
        url: "https://www.geeksforgeeks.org/the-knights-tour-problem-backtracking-1/",
      },
      { name: "Tug of War", url: "https://www.geeksforgeeks.org/tug-of-war/" },
      {
        name: "Find shortest safe route in a path with landmines",
        url: "https://www.geeksforgeeks.org/find-shortest-safe-route-in-a-path-with-landmines/",
      },
      {
        name: "Combination Sum",
        url: "https://practice.geeksforgeeks.org/problems/combination-sum/0",
        lcUrl: "https://leetcode.com/problems/combination-sum/",
      },
      {
        name: "Find Maximum number possible by doing at-most K swaps",
        url: "https://practice.geeksforgeeks.org/problems/largest-number-in-k-swaps/0",
      },
      {
        name: "Print all permutations of a string",
        url: "https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string/0",
        lcUrl: "https://leetcode.com/problems/permutations/",
      },
      {
        name: "Find if there is a path of more than k length from a source",
        url: "https://www.geeksforgeeks.org/find-if-there-is-a-path-of-more-than-k-length-from-a-source/",
      },
      {
        name: "Longest Possible Route in a Matrix with Hurdles",
        url: "https://www.geeksforgeeks.org/longest-possible-route-in-a-matrix-with-hurdles/",
      },
      {
        name: "Print all possible paths from top left to bottom right of mXn matrix",
        url: "https://www.geeksforgeeks.org/print-all-possible-paths-from-top-left-to-bottom-right-of-a-mxn-matrix/",
      },
      {
        name: "Partition of a set into K subsets with equal sum",
        url: "https://practice.geeksforgeeks.org/problems/partition-array-to-k-subsets/1",
        lcUrl: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
      },
      {
        name: "Find the K-th Permutation Sequence of first N natural numbers",
        url: "https://www.geeksforgeeks.org/find-the-k-th-permutation-sequence-of-first-n-natural-numbers/",
        lcUrl: "https://leetcode.com/problems/permutation-sequence/",
      },
    ],
  },
  {
    topic: "Stacks & Queues",
    icon: "📚",
    questions: [
      {
        name: "Implement Stack from Scratch",
        url: "https://www.tutorialspoint.com/javaexamples/data_stack.htm",
      },
      {
        name: "Implement Queue from Scratch",
        url: "https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/",
      },
      {
        name: "Implement 2 stacks in an array",
        url: "https://practice.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1",
      },
      {
        name: "Find the middle element of a stack",
        url: "https://www.geeksforgeeks.org/design-a-stack-with-find-middle-operation/",
      },
      {
        name: "Implement N stacks in an Array",
        url: "https://www.geeksforgeeks.org/efficiently-implement-k-stacks-single-array/",
      },
      {
        name: "Check valid or balanced parenthesis",
        url: "https://practice.geeksforgeeks.org/problems/parenthesis-checker/0",
        lcUrl: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        name: "Reverse a String using Stack",
        url: "https://practice.geeksforgeeks.org/problems/reverse-a-string-using-stack/1",
      },
      {
        name: "Design a Stack that supports getMin() in O(1)",
        url: "https://practice.geeksforgeeks.org/problems/special-stack/1",
        lcUrl: "https://leetcode.com/problems/min-stack/",
      },
      {
        name: "Find the next Greater element",
        url: "https://practice.geeksforgeeks.org/problems/next-larger-element/0",
        lcUrl: "https://leetcode.com/problems/next-greater-element-i/",
      },
      {
        name: "The Celebrity Problem",
        url: "https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1",
      },
      {
        name: "Arithmetic Expression Evaluation",
        url: "https://www.geeksforgeeks.org/arithmetic-expression-evalution/",
      },
      {
        name: "Evaluation of Postfix expression",
        url: "https://practice.geeksforgeeks.org/problems/evaluation-of-postfix-expression/0",
      },
      {
        name: "Insert element at bottom of stack without other DS",
        url: "https://www.geeksforgeeks.org/program-to-insert-an-element-at-the-bottom-of-a-stack/",
      },
      {
        name: "Reverse a stack using recursion",
        url: "https://www.geeksforgeeks.org/reverse-a-stack-using-recursion/",
      },
      {
        name: "Sort a Stack using recursion",
        url: "https://practice.geeksforgeeks.org/problems/sort-a-stack/1",
      },
      {
        name: "Merge Overlapping Intervals",
        url: "https://practice.geeksforgeeks.org/problems/overlapping-intervals/0",
        lcUrl: "https://leetcode.com/problems/merge-intervals/",
      },
      {
        name: "Largest rectangular Area in Histogram",
        url: "https://practice.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram/0",
        lcUrl: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
      },
      {
        name: "Length of the Longest Valid Substring",
        url: "https://practice.geeksforgeeks.org/problems/valid-substring0624/1",
        lcUrl: "https://leetcode.com/problems/longest-valid-parentheses/",
      },
      {
        name: "Expression contains redundant bracket or not",
        url: "https://www.geeksforgeeks.org/expression-contains-redundant-bracket-not/",
      },
      {
        name: "Implement Stack using Queue",
        url: "https://practice.geeksforgeeks.org/problems/stack-using-two-queues/1",
        lcUrl: "https://leetcode.com/problems/implement-stack-using-queues/",
      },
      {
        name: "Implement Stack using Deque",
        url: "https://www.geeksforgeeks.org/implement-stack-queue-using-deque/",
      },
      {
        name: "Stack Permutations (Check if array is stack permutation)",
        url: "https://www.geeksforgeeks.org/stack-permutations-check-if-an-array-is-stack-permutation-of-other/",
      },
      {
        name: "Implement Queue using Stack",
        url: "https://practice.geeksforgeeks.org/problems/queue-using-two-stacks/1",
        lcUrl: "https://leetcode.com/problems/implement-queue-using-stacks/",
      },
      {
        name: "Implement N queues in an array",
        url: "https://www.geeksforgeeks.org/efficiently-implement-k-queues-single-array/",
      },
      {
        name: "Implement a Circular queue",
        url: "https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/",
        lcUrl: "https://leetcode.com/problems/design-circular-queue/",
      },
      {
        name: "LRU Cache Implementation",
        url: "https://practice.geeksforgeeks.org/problems/lru-cache/1",
        lcUrl: "https://leetcode.com/problems/lru-cache/",
      },
      {
        name: "Reverse a Queue using recursion",
        url: "https://practice.geeksforgeeks.org/problems/queue-reversal/1",
      },
      {
        name: "Reverse the first K elements of a queue",
        url: "https://practice.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1",
      },
      {
        name: "Interleave the first half of queue with second half",
        url: "https://www.geeksforgeeks.org/interleave-first-half-queue-second-half/",
      },
      {
        name: "Find the first circular tour that visits all Petrol Pumps",
        url: "https://practice.geeksforgeeks.org/problems/circular-tour/1",
        lcUrl: "https://leetcode.com/problems/gas-station/",
      },
      {
        name: "Minimum time required to rot all oranges",
        url: "https://practice.geeksforgeeks.org/problems/rotten-oranges/0",
        lcUrl: "https://leetcode.com/problems/rotting-oranges/",
      },
      {
        name: "Distance of nearest cell having 1 in a binary matrix",
        url: "https://practice.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1/0",
        lcUrl: "https://leetcode.com/problems/01-matrix/",
      },
      {
        name: "First negative integer in every window of size k",
        url: "https://practice.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k/0",
      },
      {
        name: "Check if all levels of two trees are anagrams",
        url: "https://www.geeksforgeeks.org/check-if-all-levels-of-two-trees-are-anagrams-or-not/",
      },
      {
        name: "Sum of min and max elements of all subarrays of size k",
        url: "https://www.geeksforgeeks.org/sum-minimum-maximum-elements-subarrays-size-k/",
      },
      {
        name: "Minimum sum of squares of character counts after removing k chars",
        url: "https://practice.geeksforgeeks.org/problems/game-with-string/0",
      },
      {
        name: "Queue based approach for first non-repeating character in stream",
        url: "https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream/0",
      },
      {
        name: "Next Smaller Element",
        url: "https://www.geeksforgeeks.org/next-smaller-element/",
      },
    ],
  },
  {
    topic: "Heap",
    icon: "⛰️",
    questions: [
      {
        name: "Implement a MaxHeap/MinHeap using arrays and recursion",
        url: "https://www.geeksforgeeks.org/building-heap-from-array/",
      },
      {
        name: "Sort an Array using Heap (HeapSort)",
        url: "https://www.geeksforgeeks.org/heap-sort/",
      },
      {
        name: "Maximum of all subarrays of size k",
        url: "https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/",
        lcUrl: "https://leetcode.com/problems/sliding-window-maximum/",
      },
      {
        name: "K largest elements in an array",
        url: "https://practice.geeksforgeeks.org/problems/k-largest-elements4206/1",
      },
      {
        name: "Kth smallest and largest element in an unsorted array",
        url: "https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/",
        lcUrl: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      },
      {
        name: "Merge K sorted arrays [IMP]",
        url: "https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1",
      },
      {
        name: "Merge 2 Binary Max Heaps",
        url: "https://practice.geeksforgeeks.org/problems/merge-two-binary-max-heap/0",
      },
      {
        name: "Kth largest sum continuous subarrays",
        url: "https://www.geeksforgeeks.org/k-th-largest-sum-contiguous-subarray/",
      },
      {
        name: "Reorganize String",
        url: "https://leetcode.com/problems/reorganize-string/",
      },
      {
        name: "Merge K Sorted Linked Lists [V.IMP]",
        url: "https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1",
        lcUrl: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        name: "Smallest range in K Lists",
        url: "https://practice.geeksforgeeks.org/problems/find-smallest-range-containing-elements-from-k-lists/1",
        lcUrl: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
      },
      {
        name: "Median in a stream of Integers",
        url: "https://practice.geeksforgeeks.org/problems/find-median-in-a-stream/0",
        lcUrl: "https://leetcode.com/problems/find-median-from-data-stream/",
      },
      {
        name: "Check if a Binary Tree is Heap",
        url: "https://practice.geeksforgeeks.org/problems/is-binary-tree-heap/1",
      },
      {
        name: "Connect n ropes with minimum cost",
        url: "https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes/0",
      },
      {
        name: "Convert BST to Min Heap",
        url: "https://www.geeksforgeeks.org/convert-bst-min-heap/",
      },
      {
        name: "Convert min heap to max heap",
        url: "https://www.geeksforgeeks.org/convert-min-heap-to-max-heap/",
      },
      {
        name: "Rearrange characters so no two adjacent are same",
        url: "https://practice.geeksforgeeks.org/problems/rearrange-characters/0",
        lcUrl: "https://leetcode.com/problems/reorganize-string/",
      },
      {
        name: "Minimum sum of two numbers formed from digits of an array",
        url: "https://practice.geeksforgeeks.org/problems/minimum-sum4058/1",
      },
    ],
  },
  {
    topic: "Graph",
    icon: "🕸️",
    questions: [
      {
        name: "Create a Graph, print it",
        url: "https://practice.geeksforgeeks.org/problems/print-adjacency-list-1587115620/1",
      },
      {
        name: "Implement BFS algorithm",
        url: "https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",
      },
      {
        name: "Implement DFS algorithm",
        url: "https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1",
      },
      {
        name: "Detect Cycle in Directed Graph using BFS/DFS",
        url: "https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1",
        lcUrl: "https://leetcode.com/problems/course-schedule/",
      },
      {
        name: "Detect Cycle in Undirected Graph using BFS/DFS",
        url: "https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",
      },
      {
        name: "Search in a Maze",
        url: "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
      },
      {
        name: "Minimum Step by Knight",
        url: "https://practice.geeksforgeeks.org/problems/steps-by-knight/0",
      },
      {
        name: "Flood Fill Algorithm",
        url: "https://leetcode.com/problems/flood-fill/",
      },
      {
        name: "Clone a graph",
        url: "https://leetcode.com/problems/clone-graph/",
      },
      {
        name: "Making Wired Connections",
        url: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
      },
      {
        name: "Word Ladder",
        url: "https://leetcode.com/problems/word-ladder/",
      },
      {
        name: "Dijkstra's Algorithm",
        url: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/",
      },
      {
        name: "Implement Topological Sort",
        url: "https://practice.geeksforgeeks.org/problems/topological-sort/1",
        lcUrl: "https://leetcode.com/problems/course-schedule-ii/",
      },
      {
        name: "Minimum time taken by each job (DAG)",
        url: "https://www.geeksforgeeks.org/minimum-time-taken-by-each-job-to-be-completed-given-by-a-directed-acyclic-graph/",
      },
      {
        name: "Find whether it is possible to finish all tasks",
        url: "https://www.geeksforgeeks.org/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/",
        lcUrl: "https://leetcode.com/problems/course-schedule/",
      },
      {
        name: "Find the number of Islands",
        url: "https://practice.geeksforgeeks.org/problems/find-the-number-of-islands/1",
        lcUrl: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        name: "Alien Dictionary - find order of characters",
        url: "https://practice.geeksforgeeks.org/problems/alien-dictionary/1",
      },
      {
        name: "Implement Kruskal's Algorithm",
        url: "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
      },
      {
        name: "Implement Prim's Algorithm",
        url: "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/",
      },
      {
        name: "Total number of Spanning trees in a graph",
        url: "https://www.geeksforgeeks.org/total-number-spanning-trees-graph/",
      },
      {
        name: "Implement Bellman Ford Algorithm",
        url: "https://practice.geeksforgeeks.org/problems/negative-weight-cycle/0",
      },
      {
        name: "Implement Floyd Warshall Algorithm",
        url: "https://practice.geeksforgeeks.org/problems/implementing-floyd-warshall/0",
      },
      {
        name: "Travelling Salesman Problem",
        url: "https://www.geeksforgeeks.org/travelling-salesman-problem-set-1/",
      },
      {
        name: "Graph Colouring Problem",
        url: "https://www.geeksforgeeks.org/graph-coloring-applications/",
      },
      {
        name: "Snake and Ladders Problem",
        url: "https://leetcode.com/problems/snakes-and-ladders/",
      },
      {
        name: "Find bridge in a graph",
        url: "https://www.geeksforgeeks.org/bridge-in-a-graph/",
      },
      {
        name: "Count Strongly Connected Components (Kosaraju)",
        url: "https://practice.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1",
      },
      {
        name: "Check whether a graph is Bipartite or Not",
        url: "https://www.geeksforgeeks.org/bipartite-graph/",
        lcUrl: "https://leetcode.com/problems/is-graph-bipartite/",
      },
      {
        name: "Detect Negative cycle in a graph",
        url: "https://www.geeksforgeeks.org/detect-negative-cycle-graph-bellman-ford/",
      },
      {
        name: "Longest path in a Directed Acyclic Graph",
        url: "https://www.geeksforgeeks.org/find-longest-path-directed-acyclic-graph/",
      },
      {
        name: "Journey to the Moon",
        url: "https://www.hackerrank.com/challenges/journey-to-the-moon/problem",
      },
      {
        name: "Cheapest Flights Within K Stops",
        url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/description/",
      },
      {
        name: "Oliver and the Game",
        url: "https://www.hackerearth.com/practice/algorithms/graphs/topological-sort/practice-problems/algorithm/oliver-and-the-game-3/",
      },
      {
        name: "Water Jug problem using BFS",
        url: "https://www.geeksforgeeks.org/water-jug-problem-using-bfs/",
      },
      {
        name: "Find if there is a path of more than k length from a source",
        url: "https://www.geeksforgeeks.org/find-if-there-is-a-path-of-more-than-k-length-from-a-source/",
      },
      {
        name: "M-Colouring Problem",
        url: "https://practice.geeksforgeeks.org/problems/m-coloring-problem/0",
      },
      {
        name: "Minimum edges to reverse to make path from source to destination",
        url: "https://www.geeksforgeeks.org/minimum-edges-reverse-make-path-source-destination/",
      },
      {
        name: "Paths to travel each nodes using each edge (Seven Bridges)",
        url: "https://www.geeksforgeeks.org/paths-travel-nodes-using-edgeseven-bridges-konigsberg/",
      },
      {
        name: "Vertex Cover Problem",
        url: "https://www.geeksforgeeks.org/vertex-cover-problem-set-1-introduction-approximate-algorithm-2/",
      },
      {
        name: "Chinese Postman or Route Inspection",
        url: "https://www.geeksforgeeks.org/chinese-postman-route-inspection-set-1-introduction/",
      },
      {
        name: "Number of Triangles in Directed and Undirected Graph",
        url: "https://www.geeksforgeeks.org/number-of-triangles-in-directed-and-undirected-graphs/",
      },
      {
        name: "Minimise the cashflow among friends",
        url: "https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/",
      },
      {
        name: "Two Clique Problem",
        url: "https://www.geeksforgeeks.org/two-clique-problem-check-graph-can-divided-two-cliques/",
      },
    ],
  },
  {
    topic: "Trie",
    icon: "🌿",
    questions: [
      {
        name: "Construct a trie from scratch",
        url: "https://www.geeksforgeeks.org/trie-insert-and-search/",
        lcUrl: "https://leetcode.com/problems/implement-trie-prefix-tree/",
      },
      {
        name: "Find shortest unique prefix for every word in a given list",
        url: "https://www.geeksforgeeks.org/find-all-shortest-unique-prefixes-to-represent-each-word-in-a-given-list/",
      },
      {
        name: "Word Break Problem (Trie solution)",
        url: "https://www.geeksforgeeks.org/word-break-problem-trie-solution/",
      },
      {
        name: "Print all anagrams together",
        url: "https://practice.geeksforgeeks.org/problems/k-anagrams-1/0",
      },
      {
        name: "Implement a Phone Directory",
        url: "https://practice.geeksforgeeks.org/problems/phone-directory/0",
      },
      {
        name: "Print unique rows in a given boolean matrix",
        url: "https://practice.geeksforgeeks.org/problems/unique-rows-in-boolean-matrix/1",
      },
    ],
  },
  {
    topic: "Dynamic Programming",
    icon: "🧮",
    questions: [
      {
        name: "Coin Change Problem",
        url: "https://practice.geeksforgeeks.org/problems/coin-change2448/1",
        lcUrl: "https://leetcode.com/problems/coin-change-ii/",
      },
      {
        name: "Knapsack Problem",
        url: "https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem/0",
      },
      {
        name: "Binomial Coefficient Problem",
        url: "https://practice.geeksforgeeks.org/problems/ncr1019/1",
      },
      {
        name: "Permutation Coefficient Problem",
        url: "https://www.geeksforgeeks.org/permutation-coefficient/",
      },
      {
        name: "Program for nth Catalan Number",
        url: "https://www.geeksforgeeks.org/program-nth-catalan-number/",
      },
      {
        name: "Matrix Chain Multiplication",
        url: "https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/",
      },
      {
        name: "Edit Distance",
        url: "https://practice.geeksforgeeks.org/problems/edit-distance3702/1",
        lcUrl: "https://leetcode.com/problems/edit-distance/",
      },
      {
        name: "Subset Sum Problem",
        url: "https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1",
        lcUrl: "https://leetcode.com/problems/partition-equal-subset-sum/",
      },
      {
        name: "Friends Pairing Problem",
        url: "https://practice.geeksforgeeks.org/problems/friends-pairing-problem5425/1",
      },
      {
        name: "Gold Mine Problem",
        url: "https://www.geeksforgeeks.org/gold-mine-problem/",
      },
      {
        name: "Assembly Line Scheduling Problem",
        url: "https://www.geeksforgeeks.org/assembly-line-scheduling-dp-34/",
      },
      {
        name: "Painting the Fence Problem",
        url: "https://practice.geeksforgeeks.org/problems/painting-the-fence3727/1",
      },
      {
        name: "Maximize The Cut Segments",
        url: "https://practice.geeksforgeeks.org/problems/cutted-segments/0",
      },
      {
        name: "Longest Common Subsequence",
        url: "https://practice.geeksforgeeks.org/problems/longest-common-subsequence/0",
        lcUrl: "https://leetcode.com/problems/longest-common-subsequence/",
      },
      {
        name: "Longest Repeated Subsequence",
        url: "https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence/0",
      },
      {
        name: "Longest Increasing Subsequence",
        url: "https://practice.geeksforgeeks.org/problems/longest-increasing-subsequence/0",
        lcUrl: "https://leetcode.com/problems/longest-increasing-subsequence/",
      },
      {
        name: "Space Optimized Solution of LCS",
        url: "https://www.geeksforgeeks.org/space-optimized-solution-lcs/",
      },
      {
        name: "LCS of three strings",
        url: "https://practice.geeksforgeeks.org/problems/lcs-of-three-strings/0",
      },
      {
        name: "Maximum Sum Increasing Subsequence",
        url: "https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1",
      },
      {
        name: "Count all subsequences having product less than K",
        url: "https://www.geeksforgeeks.org/count-subsequences-product-less-k/",
      },
      {
        name: "Longest subsequence such that difference between adjacents is one",
        url: "https://practice.geeksforgeeks.org/problems/longest-subsequence-such-that-difference-between-adjacents-is-one4724/1",
      },
      {
        name: "Maximum subsequence sum such that no three are consecutive",
        url: "https://www.geeksforgeeks.org/maximum-subsequence-sum-such-that-no-three-are-consecutive/",
      },
      {
        name: "Egg Dropping Problem",
        url: "https://practice.geeksforgeeks.org/problems/egg-dropping-puzzle/0",
        lcUrl: "https://leetcode.com/problems/super-egg-drop/",
      },
      {
        name: "Maximum Length Chain of Pairs",
        url: "https://practice.geeksforgeeks.org/problems/max-length-chain/1",
        lcUrl: "https://leetcode.com/problems/maximum-length-of-pair-chain/",
      },
      {
        name: "Maximum size square sub-matrix with all 1s",
        url: "https://practice.geeksforgeeks.org/problems/largest-square-formed-in-a-matrix/0",
        lcUrl: "https://leetcode.com/problems/maximal-square/",
      },
      {
        name: "Maximum sum of pairs with specific difference",
        url: "https://practice.geeksforgeeks.org/problems/pairs-with-specific-difference/0",
      },
      {
        name: "Min Cost Path Problem",
        url: "https://practice.geeksforgeeks.org/problems/path-in-matrix3805/1",
        lcUrl: "https://leetcode.com/problems/minimum-path-sum/",
      },
      {
        name: "Maximum difference of zeros and ones in binary string",
        url: "https://practice.geeksforgeeks.org/problems/maximum-difference-of-zeros-and-ones-in-binary-string4111/1",
      },
      {
        name: "Minimum number of jumps to reach end",
        url: "https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0",
        lcUrl: "https://leetcode.com/problems/jump-game-ii/",
      },
      {
        name: "Minimum cost to fill given weight in a bag",
        url: "https://practice.geeksforgeeks.org/problems/minimum-cost-to-fill-given-weight-in-a-bag1956/1",
      },
      {
        name: "Minimum removals from array to make max-min <= K",
        url: "https://www.geeksforgeeks.org/minimum-removals-array-make-max-min-k/",
      },
      {
        name: "Longest Common Substring",
        url: "https://practice.geeksforgeeks.org/problems/longest-common-substring/0",
      },
      {
        name: "Count number of ways to reach a given score in a game",
        url: "https://practice.geeksforgeeks.org/problems/reach-a-given-score/0",
      },
      {
        name: "Count Balanced Binary Trees of Height h",
        url: "https://practice.geeksforgeeks.org/problems/bbt-counter/0",
      },
      {
        name: "Largest Sum Contiguous Subarray [V.V.V.V IMP]",
        url: "https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0",
        lcUrl: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        name: "Smallest sum contiguous subarray",
        url: "https://www.geeksforgeeks.org/smallest-sum-contiguous-subarray/",
      },
      {
        name: "Unbounded Knapsack (Repetition of items allowed)",
        url: "https://practice.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1",
      },
      {
        name: "Word Break Problem",
        url: "https://practice.geeksforgeeks.org/problems/word-break/0",
        lcUrl: "https://leetcode.com/problems/word-break/",
      },
      {
        name: "Largest Independent Set Problem",
        url: "https://www.geeksforgeeks.org/largest-independent-set-problem-dp-26/",
      },
      {
        name: "Partition Problem",
        url: "https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1",
        lcUrl: "https://leetcode.com/problems/partition-equal-subset-sum/",
      },
      {
        name: "Longest Palindromic Subsequence",
        url: "https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/",
        lcUrl: "https://leetcode.com/problems/longest-palindromic-subsequence/",
      },
      {
        name: "Count All Palindromic Subsequences in a given String",
        url: "https://practice.geeksforgeeks.org/problems/count-palindromic-subsequences/1",
        lcUrl: "https://leetcode.com/problems/count-different-palindromic-subsequences/",
      },
      {
        name: "Longest Palindromic Substring",
        url: "https://leetcode.com/problems/longest-palindromic-substring/",
      },
      {
        name: "Longest alternating subsequence",
        url: "https://practice.geeksforgeeks.org/problems/longest-alternating-subsequence/0",
      },
      {
        name: "Weighted Job Scheduling",
        url: "https://www.geeksforgeeks.org/weighted-job-scheduling/",
      },
      {
        name: "Coin game winner where every player has three choices",
        url: "https://www.geeksforgeeks.org/coin-game-winner-every-player-three-choices/",
      },
      {
        name: "Count Derangements [IMPORTANT]",
        url: "https://www.geeksforgeeks.org/count-derangements-permutation-such-that-no-element-appears-in-its-original-position/",
      },
      {
        name: "Maximum profit by buying and selling a share at most twice [IMP]",
        url: "https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/",
        lcUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
      },
      {
        name: "Optimal Strategy for a Game",
        url: "https://practice.geeksforgeeks.org/problems/optimal-strategy-for-a-game/0",
      },
      {
        name: "Optimal Binary Search Tree",
        url: "https://www.geeksforgeeks.org/optimal-binary-search-tree-dp-24/",
      },
      {
        name: "Palindrome Partitioning Problem",
        url: "https://practice.geeksforgeeks.org/problems/palindromic-patitioning4845/1",
        lcUrl: "https://leetcode.com/problems/palindrome-partitioning-ii/",
      },
      {
        name: "Word Wrap Problem",
        url: "https://practice.geeksforgeeks.org/problems/word-wrap/0",
      },
      {
        name: "Mobile Numeric Keypad Problem [IMP]",
        url: "https://practice.geeksforgeeks.org/problems/mobile-numeric-keypad5456/1",
      },
      {
        name: "Boolean Parenthesization Problem",
        url: "https://practice.geeksforgeeks.org/problems/boolean-parenthesization/0",
      },
      {
        name: "Largest rectangular sub-matrix whose sum is 0",
        url: "https://www.geeksforgeeks.org/largest-rectangular-sub-matrix-whose-sum-0/",
      },
      {
        name: "Largest area rectangular sub-matrix with equal 1's and 0's [IMP]",
        url: "https://www.geeksforgeeks.org/largest-area-rectangular-sub-matrix-equal-number-1s-0s/",
      },
      {
        name: "Maximum sum rectangle in a 2D matrix",
        url: "https://practice.geeksforgeeks.org/problems/maximum-sum-rectangle/0",
      },
      {
        name: "Maximum profit by buying and selling share at most k times",
        url: "https://practice.geeksforgeeks.org/problems/maximum-profit4657/1",
        lcUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
      },
      {
        name: "Find if a string is interleaved of two other strings",
        url: "https://practice.geeksforgeeks.org/problems/interleaved-strings/1",
        lcUrl: "https://leetcode.com/problems/interleaving-string/",
      },
      {
        name: "Maximum Length of Pair Chain",
        url: "https://leetcode.com/problems/maximum-length-of-pair-chain/",
      },
    ],
  },
  {
    topic: "Bit Manipulation",
    icon: "💻",
    questions: [
      {
        name: "Count set bits in an integer",
        url: "https://practice.geeksforgeeks.org/problems/set-bits0143/1",
        lcUrl: "https://leetcode.com/problems/number-of-1-bits/",
      },
      {
        name: "Find the two non-repeating elements in an array",
        url: "https://practice.geeksforgeeks.org/problems/finding-the-numbers0215/1",
        lcUrl: "https://leetcode.com/problems/single-number-iii/",
      },
      {
        name: "Count number of bits to be flipped to convert A to B",
        url: "https://practice.geeksforgeeks.org/problems/bit-difference/0",
        lcUrl: "https://leetcode.com/problems/hamming-distance/",
      },
      {
        name: "Count total set bits in all numbers from 1 to n",
        url: "https://practice.geeksforgeeks.org/problems/count-total-set-bits/0",
        lcUrl: "https://leetcode.com/problems/counting-bits/",
      },
      {
        name: "Program to find whether a number is power of two",
        url: "https://practice.geeksforgeeks.org/problems/power-of-2/0",
        lcUrl: "https://leetcode.com/problems/power-of-two/",
      },
      {
        name: "Find position of the only set bit",
        url: "https://practice.geeksforgeeks.org/problems/find-position-of-set-bit3706/1",
      },
      {
        name: "Copy set bits in a range",
        url: "https://www.geeksforgeeks.org/copy-set-bits-in-a-range/",
      },
      {
        name: "Divide two integers without using *, / and mod",
        url: "https://www.geeksforgeeks.org/divide-two-integers-without-using-multiplication-division-mod-operator/",
        lcUrl: "https://leetcode.com/problems/divide-two-integers/",
      },
      {
        name: "Calculate square without using *, / and pow()",
        url: "https://www.geeksforgeeks.org/calculate-square-of-a-number-without-using-and-pow/",
      },
      {
        name: "Power Set",
        url: "https://practice.geeksforgeeks.org/problems/power-set4302/1",
        lcUrl: "https://leetcode.com/problems/subsets/",
      },
    ],
  },
];

// ============================================
// SHEETS CONFIGURATION
// ============================================
const SHEETS = {
  loveBabbar: {
    name: "Love Babbar 450",
    short: "Love Babbar 450",
    icon: "🔥",
    description: "450 DSA questions curated by Love Babbar",
    data: DSA_DATA,
  },
  striverA2Z: {
    name: "Striver A2Z DSA Sheet",
    short: "Striver DSA Sheet",
    icon: "⚡",
    description: "455 problems from Striver's A to Z DSA course",
    data: STRIVER_A2Z_DATA,
  },
  striverSDE: {
    name: "Striver SDE Sheet",
    short: "Striver SDE Sheet",
    icon: "💻",
    description: "191 must-do problems for SDE interviews by Striver",
    data: STRIVER_SDE_DATA,
  },
};

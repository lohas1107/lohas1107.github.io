"use strict";(self.webpackChunk_2_ndbrain=self.webpackChunk_2_ndbrain||[]).push([[4141],{595:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(5893),i=t(1151);const o={},r="22. Generate Parentheses",a={id:"leetcode/generate-parentheses",title:"22. Generate Parentheses",description:'In this post, we\'ll explore the LeetCode problem "Generate Parentheses," a classic problem that tests your understanding of recursion and backtracking. This problem is a great example to showcase not just algorithmic thinking but also the importance of understanding how to construct a well-defined problem space and navigate through it.',source:"@site/docs/leetcode/0022-generate-parentheses.md",sourceDirName:"leetcode",slug:"/leetcode/generate-parentheses",permalink:"/docs/leetcode/generate-parentheses",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{},sidebar:"leetcodeSidebar",previous:{title:"4. Median of Two Sorted Arrays",permalink:"/docs/leetcode/median-of-two-sorted-arrays"},next:{title:"64. Minimum Path Sum",permalink:"/docs/leetcode/minimum-path-sum"}},c={},l=[{value:"Corner Cases",id:"corner-cases",level:2},{value:"Approach and Solutions",id:"approach-and-solutions",level:2},{value:"Backtracking",id:"backtracking",level:3},{value:"Complexity Analysis",id:"complexity-analysis",level:3},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"22-generate-parentheses",children:"22. Generate Parentheses"}),"\n",(0,s.jsx)(n.p,{children:'In this post, we\'ll explore the LeetCode problem "Generate Parentheses," a classic problem that tests your understanding of recursion and backtracking. This problem is a great example to showcase not just algorithmic thinking but also the importance of understanding how to construct a well-defined problem space and navigate through it.'}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= n <= 8"})}),"\n"]}),(0,s.jsx)(n.p,{children:"Understanding the constraints is crucial as it informs us about the potential size of the problem space and the limits within which our solution must operate."})]}),"\n",(0,s.jsx)(n.h2,{id:"corner-cases",children:"Corner Cases"}),"\n",(0,s.jsx)(n.p,{children:"When dealing with recursion, especially in generating combinations or permutations, it's vital to consider the base cases and the conditions under which the recursion terminates. For this problem, the corner cases revolve around the conditions for adding an open or close parenthesis:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["An open parenthesis ",(0,s.jsx)(n.code,{children:"("})," can only be added if the count is less than ",(0,s.jsx)(n.code,{children:"n"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["A close parenthesis ",(0,s.jsx)(n.code,{children:")"})," can only be added if its count is less than the count of open parentheses ",(0,s.jsx)(n.code,{children:"("}),", ensuring validity."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This simple yet effective check ensures that we only generate valid combinations, thus efficiently navigating the problem space"}),"\n",(0,s.jsx)(n.h2,{id:"approach-and-solutions",children:"Approach and Solutions"}),"\n",(0,s.jsxs)(n.p,{children:["The problem inherently suggests the use of recursion to explore all possible combinations of parentheses. However, ",(0,s.jsx)(n.strong,{children:"not all combinations will be valid"}),", and thus we need a strategy to only generate valid ones. We do this by maintaining two counters: ",(0,s.jsx)(n.code,{children:"left"})," for the number of open parentheses ",(0,s.jsx)(n.code,{children:"("})," and ",(0,s.jsx)(n.code,{children:"right"})," for the close parentheses ",(0,s.jsx)(n.code,{children:")"}),". At any point in the recursion, we can add an open parenthesis if it doesn't exceed ",(0,s.jsx)(n.code,{children:"n"}),", and we can add a close parenthesis if it doesn't exceed the number of open parentheses."]}),"\n",(0,s.jsx)(n.h3,{id:"backtracking",children:"Backtracking"}),"\n",(0,s.jsx)(n.p,{children:"Here's a Python function that implements the above logic:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class Solution:\n    def generateParenthesis(self, n: int) -> List[str]:\n        result = []\n\n        def backtrack(left: int, right: int, combination: str):\n            if len(combination) == 2 * n:\n                result.append(combination)\n                return\n            if left < n:\n                backtrack(left + 1, right, combination + "(")\n            if right < left:\n                backtrack(left, right + 1, combination + ")")\n\n        backtrack(0, 0, "")\n        return result\n'})}),"\n",(0,s.jsx)(n.h3,{id:"complexity-analysis",children:"Complexity Analysis"}),"\n",(0,s.jsx)(n.p,{children:"The complexity analysis for generating valid combinations of parentheses involves understanding the branching factor of the recursion tree and the depth of this tree"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Time Complexity:"})," O(2^n) - This is a result of the Catalan number, which approximates the number of correct combinations and grows exponentially. However, due to the pruning of invalid states (when ",(0,s.jsx)(n.code,{children:"right > left"}),"), the actual time complexity is bounded by the nth Catalan number."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Space Complexity:"})," O(n) - The space complexity is linear relative to the input size ",(0,s.jsx)(n.code,{children:"n"}),", due to the depth of the recursion stack. For each recursive call, we are only storing the current state of the string and the counters."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:'"Generate Parentheses" is a fascinating problem that not only tests your understanding of recursion and backtracking but also how to effectively prune the search space. The key takeaway is to always consider the conditions under which you add elements to your combination or permutation in recursion, as this can significantly affect the efficiency of your solution. Happy coding!'})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(7294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
---
head: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css" integrity="sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww" crossorigin="anonymous"><script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js" integrity="sha384-hIoBPJpTUs74ddyc4bFZSM1TVlQDA60VBbJS0oA934VSz82sBx1X7kSx2ATBDIyd" crossorigin="anonymous"></script>'
---

# Using KaTeX

If $f(x) = e^{-x^2}$, then
$$
\int_{-\infty}^{\infty} f(x) \, dx = \sqrt{\pi}.
$$


```js
import renderMathInElement from "https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/contrib/auto-render.mjs";
renderMathInElement(document.body, {
  delimiters: [
      {left: '$$', right: '$$', display: true},
      {left: '$', right: '$', display: false},
      {left: '\\(', right: '\\)', display: false},
      {left: '\\[', right: '\\]', display: true}
  ]
});
```

---
head: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css" integrity="sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww" crossorigin="anonymous">'
---

# Comparing MathJax and KaTeX

$$f(x) = \frac{\cos{\left(x \right)} + \frac{\left(x^{3} + \cos{\left(x^{7} \right)}\right) e^{x}}{x^{\frac{5}{2}}}}{\sin{\left(x \right)}}$$

<div style="display: inline-block; overflow: auto hidden; white-space: nowrap; width: 100%; vertical-align: top;">

$$f'(x) = - \frac{\left(\cos{\left(x \right)} + \frac{\left(x^{3} + \cos{\left(x^{7} \right)}\right) e^{x}}{x^{\frac{5}{2}}}\right) \cos{\left(x \right)}}{\sin^{2}{\left(x \right)}} + \frac{- \sin{\left(x \right)} + \frac{\left(x^{3} + \cos{\left(x^{7} \right)}\right) e^{x}}{x^{\frac{5}{2}}} + \frac{\left(- 7 x^{6} \sin{\left(x^{7} \right)} + 3 x^{2}\right) e^{x}}{x^{\frac{5}{2}}} - \frac{5 \left(x^{3} + \cos{\left(x^{7} \right)}\right) e^{x}}{2 x^{\frac{7}{2}}}}{\sin{\left(x \right)}}$$

</div>

---

$$f(x) = \frac{\left(\left(\cos{\left(x^{7} \right)} + e^{- 2 x^{7}} + e^{- 4 x^{7}}\right) \sqrt{x^{7}} \cos{\left(x^{7} \right)} + e^{x^{7}}\right) \cos{\left(x \right)}}{\cos{\left(x^{7} \right)}}$$

<div style="display: inline-block; overflow: auto hidden; white-space: nowrap; width: 100%; vertical-align: top;">

$$f'(x) = \frac{7 x^{6} \left(\left(\cos{\left(x^{7} \right)} + e^{- 2 x^{7}} + e^{- 4 x^{7}}\right) \sqrt{x^{7}} \cos{\left(x^{7} \right)} + e^{x^{7}}\right) \sin{\left(x^{7} \right)} \cos{\left(x \right)}}{\cos^{2}{\left(x^{7} \right)}} - \frac{\left(\left(\cos{\left(x^{7} \right)} + e^{- 2 x^{7}} + e^{- 4 x^{7}}\right) \sqrt{x^{7}} \cos{\left(x^{7} \right)} + e^{x^{7}}\right) \sin{\left(x \right)}}{\cos{\left(x^{7} \right)}} + \frac{\left(- 7 x^{6} \left(\cos{\left(x^{7} \right)} + e^{- 2 x^{7}} + e^{- 4 x^{7}}\right) \sqrt{x^{7}} \sin{\left(x^{7} \right)} + 7 x^{6} e^{x^{7}} + \left(- 7 x^{6} \sin{\left(x^{7} \right)} - 14 x^{6} e^{- 2 x^{7}} - 28 x^{6} e^{- 4 x^{7}}\right) \sqrt{x^{7}} \cos{\left(x^{7} \right)} + \frac{7 \left(\cos{\left(x^{7} \right)} + e^{- 2 x^{7}} + e^{- 4 x^{7}}\right) \sqrt{x^{7}} \cos{\left(x^{7} \right)}}{2 x}\right) \cos{\left(x \right)}}{\cos{\left(x^{7} \right)}}$$

</div>

---

$$f(x) = \frac{\sqrt{x} + \frac{\left(\sin^{7}{\left(\cos^{7}{\left(x \right)} \right)} + \sin{\left(\cos^{7}{\left(x \right)} \right)}\right) e^{\sin{\left(\cos^{7}{\left(x \right)} \right)}} + e^{\sin{\left(\cos^{7}{\left(x \right)} \right)}}}{\sin{\left(\cos^{7}{\left(x \right)} \right)}}}{x^{2}}$$

<div style="display: inline-block; overflow: auto hidden; white-space: nowrap; width: 100%; vertical-align: top;">

$$f'(x) = \frac{\frac{7 \left(\left(\sin^{7}{\left(\cos^{7}{\left(x \right)} \right)} + \sin{\left(\cos^{7}{\left(x \right)} \right)}\right) e^{\sin{\left(\cos^{7}{\left(x \right)} \right)}} + e^{\sin{\left(\cos^{7}{\left(x \right)} \right)}}\right) \sin{\left(x \right)} \cos^{6}{\left(x \right)} \cos{\left(\cos^{7}{\left(x \right)} \right)}}{\sin^{2}{\left(\cos^{7}{\left(x \right)} \right)}} + \frac{\left(- 49 \sin{\left(x \right)} \sin^{6}{\left(\cos^{7}{\left(x \right)} \right)} \cos^{6}{\left(x \right)} \cos{\left(\cos^{7}{\left(x \right)} \right)} - 7 \sin{\left(x \right)} \cos^{6}{\left(x \right)} \cos{\left(\cos^{7}{\left(x \right)} \right)}\right) e^{\sin{\left(\cos^{7}{\left(x \right)} \right)}} - 7 \left(\sin^{7}{\left(\cos^{7}{\left(x \right)} \right)} + \sin{\left(\cos^{7}{\left(x \right)} \right)}\right) e^{\sin{\left(\cos^{7}{\left(x \right)} \right)}} \sin{\left(x \right)} \cos^{6}{\left(x \right)} \cos{\left(\cos^{7}{\left(x \right)} \right)} - 7 e^{\sin{\left(\cos^{7}{\left(x \right)} \right)}} \sin{\left(x \right)} \cos^{6}{\left(x \right)} \cos{\left(\cos^{7}{\left(x \right)} \right)}}{\sin{\left(\cos^{7}{\left(x \right)} \right)}} + \frac{1}{2 \sqrt{x}}}{x^{2}} - \frac{2 \left(\sqrt{x} + \frac{\left(\sin^{7}{\left(\cos^{7}{\left(x \right)} \right)} + \sin{\left(\cos^{7}{\left(x \right)} \right)}\right) e^{\sin{\left(\cos^{7}{\left(x \right)} \right)}} + e^{\sin{\left(\cos^{7}{\left(x \right)} \right)}}}{\sin{\left(\cos^{7}{\left(x \right)} \right)}}\right)}{x^{3}}$$

</div>

---

$$f(x) = \left(e^{\cos{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)}} \cos^{6}{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)} + \cos^{3}{\left(\cos{\left(x \right)} \right)} + \cos^{2}{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)} + \cos{\left(\cos{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)} \right)}\right) \cos^{10}{\left(x \right)} \cos{\left(\cos{\left(x \right)} \right)}$$

<div style="display: inline-block; overflow: auto hidden; white-space: nowrap; width: 100%; vertical-align: top;">

$$f'(x) = \left(e^{\cos{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)}} \cos^{6}{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)} + \cos^{3}{\left(\cos{\left(x \right)} \right)} + \cos^{2}{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)} + \cos{\left(\cos{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)} \right)}\right) \sin{\left(x \right)} \sin{\left(\cos{\left(x \right)} \right)} \cos^{10}{\left(x \right)} - 10 \left(e^{\cos{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)}} \cos^{6}{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)} + \cos^{3}{\left(\cos{\left(x \right)} \right)} + \cos^{2}{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)} + \cos{\left(\cos{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)} \right)}\right) \sin{\left(x \right)} \cos^{9}{\left(x \right)} \cos{\left(\cos{\left(x \right)} \right)} + \left(- e^{\cos{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)}} \sin{\left(x \right)} \sin{\left(\cos{\left(x \right)} \right)} \sin{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)} \cos^{6}{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)} - 6 e^{\cos{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)}} \sin{\left(x \right)} \sin{\left(\cos{\left(x \right)} \right)} \sin{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)} \cos^{5}{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)} + \sin{\left(x \right)} \sin{\left(\cos{\left(x \right)} \right)} \sin{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)} \sin{\left(\cos{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)} \right)} - 2 \sin{\left(x \right)} \sin{\left(\cos{\left(x \right)} \right)} \sin{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)} \cos{\left(\cos{\left(\cos{\left(x \right)} \right)} \right)} + 3 \sin{\left(x \right)} \sin{\left(\cos{\left(x \right)} \right)} \cos^{2}{\left(\cos{\left(x \right)} \right)}\right) \cos^{10}{\left(x \right)} \cos{\left(\cos{\left(x \right)} \right)}$$

</div>


```js
const n = view(Inputs.radio(d3.range(9), { value: 5, label: "Iterates:" }))
```


```js
let step = (s) => s.replaceAll("x", "{x_x^x}");
let s = "x";
for (let i = 0; i < n; i++) {
  s = step(s);
}
let t = performance.now();
let xx;
xx = await tex.block`${s}`;
await display(xx);
display(Math.round(performance.now() - t))
```

<!-- ```js
import {import_mathjax} from '../../common_components/import_mathjax.js';
const MathJax = import_mathjax();
``` -->


```js
import katex from 'https://cdn.jsdelivr.net/npm/katex@0.16.10/+esm'
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

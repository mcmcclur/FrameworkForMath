# Using MathJax

Observable Framework provides mathematical typesetting using the `tex` macro, as described in ...  The underlying engine that actually does the typesetting is called [KaTeX](https://katex.org/). KaTeX was originally written as a faster alternative to the more venerable [MathJax](https://mathjax.org).

MathJax has always been more feature rich, though, providing

 - the ability to zoom in on typeset expressions,
 - the option to type code in as AsciiMath,
 - access to the LaTeX or AsciiMath code that generate an expression, and
 - enhanced accessibility features.

Furthermore, the speed difference since version 3 of MathJax is minimal.

## Placing MathJax in the `head`

I guess the easiest way to incorporate MathJax into a Framework project is to add the following line to the YAML frontmatter at the top of the document:

    head: '<script>MathJax = {tex: {inlineMath: [["$", "$"], ["\\(", "\\)"]]},svg: {fontCache: "global"}};</script><script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>'

After doing so, those `script` tags are placed in the resulting HTML file's head element. Once you do so, you can use standard LaTeX delimiters like

- <code>$...$</code> for inline math and
- <code>$$...$$</code> for display math.

Thus, we can now enter the following:

If $f(x) = e^{-x^2}$, then
$$\int_{-\infty}^{\infty} f(x) \, dx = \sqrt{\pi}.$$

like so:

    If $f(x) = e^{-x^2}$, then
    $$\int_{-\infty}^{\infty} f(x) \, dx = \sqrt{\pi}.$$

## Using a MathJax component

My preference is to write a MathJax component, whose name I can easily remember. My `loade_mathjax` function looks like so:

    export function load_mathjax() {
      window.MathJax = {
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']]
        },
        svg: {
          fontCache: 'global'
        }
      };
      let script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
      script.async = true;
      document.head.appendChild(script);
    }

We can then include a Javascript block that looks like so:

## Programmatically???

<div id="math"></div>

```js echo
MathJax.tex2svgPromise(`f(x) = ${math_string}`).then(r => r)
```

```js echo
let math_string = view(Inputs.select([
  String.raw`x^2`,
  String.raw`\sin(x^2)`,
  String.raw`\cos(x^3)`,
  String.raw`\frac{1}{\sqrt{1-x^2}}`
], {label: "f(x):"}))
```

```js
import {import_mathjax} from '../../common_components/import_mathjax.js';
const MathJax = import_mathjax();
```

---
head: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css" integrity="sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww" crossorigin="anonymous">'
---

# Using KaTeX

As [described here](../TheTeXMacro/), Observable Framework provides mathematical typesetting using the `tex` macro.  The underlying engine that actually does the typesetting is called [KaTeX](https://katex.org/) and it's actually pretty simple to use KaTeX directly.

## Simpler delimiters

One good reason to import and use KaTeX directly is because it allows you to use LaTeX's natural delimiters, namely

- <code>$...$</code> for inline math and
- <code>$$...$$</code> for display math.

Thus, to write

<div class="card">

If $f(x) = e^{-x^2}$, then
$$
\int_{-\infty}^{\infty} f(x) \, dx = \sqrt{\pi}.
$$

</div>

We simply type

    If $f(x) = e^{-x^2}$, then
    $$\int_{-\infty}^{\infty} f(x) \, dx = \sqrt{\pi}.$$

## Importing KaTeX

KaTeX is easy to import from [jsdelivr](https://cdn.jsdelivr.net). If you want dollar sign delimited snippets to be automatically rendered, you also need to import and configure the auto-render extension. You can do this with a Javascript block like the following:

```js echo
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

There's also a KaTeX stylesheet; the easiest way to use it to to include the following line in the YAML frontmatter at the top of the document:

    head: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css" integrity="sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww" crossorigin="anonymous">'

## Programmatic use

While not quite as automatic as Observable's `tex` macro, KaTeX has a simple API that allows programmatic use. As a simple example, the drop down menu in the interactive example below specifies a LaTeX snippet; that LaTeX snippet is then typeset using KaTeX.


<div class="card">

### Dynamic typesetting with KaTeX


```js
let math_string = view(Inputs.select([
  String.raw`x^2`,
  String.raw`\sin(x^2)`,
  String.raw`\frac{1}{\sqrt{1-x^2}}`,
  String.raw`\frac{1}{\sqrt{2\pi}}\int_0^x e^{-\chi^2/2} \, d\chi`
], {label: tex`f(x):`}))
```
```js
let div = document.createElement("div");
katex.render(`f(x) = ${math_string}`, div, {
    throwOnError: false,
    displayMode: true
});
display(div)
```

</div>

The above demo was generated with the following Javascript blocks:

    ```js
    let math_string = view(Inputs.select([
      String.raw`x^2`,
      String.raw`\sin(x^2)`,
      String.raw`\frac{1}{\sqrt{1-x^2}}`,
      String.raw`\frac{1}{\sqrt{2\pi}}\int_0^x e^{-\chi^2/2} \, d\chi`
    ], {label: tex`f(x):`}))
    ```

    ```js
    let div = document.createElement("div");
    katex.render(`f(x) = ${math_string}`, div, {
        throwOnError: false,
        displayMode: true
    });
    display(div)
    ```

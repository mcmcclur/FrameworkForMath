<!-- ---
style: '../../style.css'
--- -->

# The TeX Macro

Observable Framework provides the [`tex` macro](https://observablehq.com/framework/lib/tex) for mathematical typesetting.  Technically, the macro is implemented as a particular type of Javascript function called a [tagged template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates). The syntax is quite natural from the perspective of a programmer and it integrates well into Javascript programs. This syntax is not, however, particularly natural from the LaTeX point of view and, honestly, it's a bit cumbersome compared to standard LaTeX delimiters.

## Basic usage

To use macro, you type

    tex`latex_snippet`

to produce inline mathematics or

    tex.block`latex_snippet`

to produce display math. You then incorporate that into Markdown using [string interpolation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#string_interpolation) `${value_to_interpolate}`.

Thus, to write

<div class="card">

If ${tex`f(x) = e^{-x^2}`}, then
${tex.block`\int_{-\infty}^{\infty} f(x) \, dx = \sqrt{\pi}.`}

</div>

you'd type

    If ${tex`f(x) = e^{-x^2}`}, then
    ${tex.block`\int_{-\infty}^{\infty} f(x) \, dx = \sqrt{\pi}.`}


## Programmatic use

Again, the `tex` macro integrates very well into Javascript making it easy to interpret LaTeX snippets programmatically. As a simple example, the drop down menu in the interactive example below specifies a LaTeX snippet; that LaTeX snippet is then typeset using `tex.block`.


<div class="card collapse">

### Dynamic typesetting with the tex macro

```js
let math_string = view(Inputs.select([
  String.raw`x^2`,
  String.raw`\sin(x^2)`,
  String.raw`\frac{1}{\sqrt{1-x^2}}`,
  String.raw`\frac{1}{\sqrt{2\pi}}\int_0^x e^{-\chi^2/2} \, d\chi`
], {label: tex`f(x):`}))
```

```js
tex.block`f(x) = ${math_string}`
```

    // Code block 1 to tenerate the dropdown
    let math_string = view(Inputs.select([
      String.raw`x^2`,
      String.raw`\sin(x^2)`,
      String.raw`\frac{1}{\sqrt{1-x^2}}`,
      String.raw`\frac{1}{\sqrt{2\pi}}\int_0^x e^{-\chi^2/2} \, d\chi`
    ], {label: tex`f(x):`}))


    // Code block two to interpret the dropdown
    tex.block`f(x) = ${math_string}`


</div>

The above demo was generated with the following Javascript cells:

```js
import {collapse_code} from '../../common_components/collapse_code.js'
collapse_code()
```

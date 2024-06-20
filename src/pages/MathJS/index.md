# Using MathJS

```js
let f_text = view(Inputs.text({
  // placeholder: 'Enter your function',
  value: "cos(10pi*x) e^(-x^2)",
  submit: true,
  label: tex`f(x):`,
}));
```

---

```js
if(f_text == "") {
  display(html`No function to display`)
}
else {
  try {
    let parsed_plot = plot_function_string(f_text);
    display(html`The graph of ${tex`f(x) = ${parsed_plot.parsed.toTex()}`} over the interval ${tex`[-3,3]`}, looks like so:`);
    display(parsed_plot.plot);
  }
  catch {
    display('Parse error')
  }
}
```


<style>
  label {
    width: 40px !important;
  }
</style>

```js
import {plot_function_string} from './components/plot_function_string.js';
```

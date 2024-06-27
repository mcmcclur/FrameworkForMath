---
head: '<link rel="icon" href="../../observable.png" type="image/png" sizes="32x32"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css" integrity="sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww" crossorigin="anonymous">'
---

# Fractal KaTeX/MathJax Speedtest

A quick Google search will yield plenty of claims that KaTeX is *much* faster than MathJax - 20, 50, 100 times faster. KaTeX's own website includes [this animated GIF](https://katex.org/img/katex-comparison.gif) illustrating how KaTeX fires up complicated typeset math on Math.StackExchange almost instantaneously while MathJax lolligags along for nearly 10 seconds. That illustration refers to [this post](https://math.stackexchange.com/questions/8337/different-ways-to-prove-sum-k-1-infty-frac1k2-frac-pi26-the-b/324158#324158
) and, indeed, the page jumps around a bit while MathJax does its thing before finally settling down.

There are a lot of issues with that comparison, though, including the facts that

- MathJax typesets a large page in sections in order to typeset the beginning of the page more quickly. Each section induces a section refresh and, if you jump straight to the end of the page, then you've waited for a number of refreshes. Indeed, if you [start at the top](https://math.stackexchange.com/questions/8337/different-ways-to-prove-sum-k-1-infty-frac1k2-frac-pi26-the-b), you can read the page right away.
- MathJax can handle more input and output formats and produces more interactive results with enhanced accessibility features - all of which takes time.
- The latest version of MathJax (v3.2.2) is much faster than the version (2.7.5) that is still used on Math.StackExchange.

KaTeX is certainly still faster. The experiment on this page indicates that KaTeX is around 3 times as fast at its more limited mission.

## Fractal typesetting

Let's devise a fun challenge for both KaTeX and MathJax. Suppose we've got some typeset expression and, everywhere we see an
<span class="typeset-mathjax">x</span>, we replace it with
<span class="typeset-mathjax">{{}_{x}^{x}x_x^x}</span>. If we iterate that procedure a few times, we might see something like

<div class="typeset-katex display">
  x \: \longrightarrow \: {{}_{x}^{x}x_x^x} \: \longrightarrow \: {{}_{{{}_{x}^{x}x_x^x}}^{{{}_{x}^{x}x_x^x}}{{}_{x}^{x}x_x^x}_{{}_{x}^{x}x_x^x}^{{}_{x}^{x}x_x^x}}
  \: \longrightarrow \:
  {{}_{{{}_{{{}_{x}^{x}x_x^x}}^{{{}_{x}^{x}x_x^x}}{{}_{x}^{x}x_x^x}_{{}_{x}^{x}x_x^x}^{{}_{x}^{x}x_x^x}}}^{{{}_{{{}_{x}^{x}x_x^x}}^{{{}_{x}^{x}x_x^x}}{{}_{x}^{x}x_x^x}_{{}_{x}^{x}x_x^x}^{{}_{x}^{x}x_x^x}}}{{}_{{{}_{x}^{x}x_x^x}}^{{{}_{x}^{x}x_x^x}}{{}_{x}^{x}x_x^x}_{{}_{x}^{x}x_x^x}^{{}_{x}^{x}x_x^x}}_{{}_{{{}_{x}^{x}x_x^x}}^{{{}_{x}^{x}x_x^x}}{{}_{x}^{x}x_x^x}_{{}_{x}^{x}x_x^x}^{{}_{x}^{x}x_x^x}}^{{}_{{{}_{x}^{x}x_x^x}}^{{{}_{x}^{x}x_x^x}}{{}_{x}^{x}x_x^x}_{{}_{x}^{x}x_x^x}^{{}_{x}^{x}x_x^x}}}
</div>

Thus, the typeset expression starts to look fractal! If we iterate the process a few more times, the typography becomes complicated enough to challenge our typesetting system. It might even make a reasonable speed test.

## The speedtest

The interactive demo below implements the typeset fractal strategy. You can choose both the typesetting system and the number of iterates. The amount of time spent typesetting the expression is (hopefully) displayed as well.

<div class="card">

```js
const typeset_system = view(Inputs.radio(
    ["KaTeX", "MathJax CHTML"], {
    value: "KaTeX",
    label: "Typeset via:"
  })
)
```
```js
const n = view(Inputs.radio(d3.range(8),
  { value: 3, label: "Iterates:" }))
```

  <div id="timing_target"></div>
  <div id="display_target" style="overflow: auto hidden"></div>
</div>

## Comments

- I'm always suspicious of results involving rendering in the browser. The timings seem to me to be a bit low. Nonetheless, you definitely get the sense of waiting a bit longer when using MathJax, particularly when doing 5 or 6 or 7 iterates.
- I can't overemphasize that MathJax takes longer, in part, because it does more work. If you click on the MathJax typeset expression, for example, you generate a zoomed version. You can cntrl-click on the expression to pull up a contextual menu with many more options.


```js
// const step = (s) => s.replaceAll("x", "{x_x^x}");
const step = (s) => s.replaceAll("x", "{{}_{x}^{x}x_x^x}");
let s = "x";
for (let i = 0; i < n; i++) {
  s = step(s);
}
```

```js
if(typeset_system == "KaTeX") {
  // let div = d3.create('div')
  //   .style('overflow', 'auto hidden');
  let div = d3.select('#display_target')
  div.selectAll("*").remove()

  let t = performance.now();
  await katex.render(s, div.node(), {
      throwOnError: false,
      displayMode: true
  });
  // display(div.node());
  t = Math.round(performance.now() - t)
  d3
    .select('#timing_target')
    .html(`Typeset in ${t} milliseconds`)
}
else if(typeset_system == "MathJax CHTML") {
  // const div = d3.create('div')
  //   .style('overflow', 'auto hidden');
  let div = d3.select('#display_target');
  div.selectAll("*").remove()
  let t = performance.now();
  MathJax.tex2chtmlPromise(s).then(function(p) {
    div.append(() => p);
    // display(div.node());
  });
  t = Math.round(performance.now() - t)
  d3
    .select('#timing_target')
    .html(`Typeset in ${t} milliseconds`)
}
```

```js
import katex from 'https://cdn.jsdelivr.net/npm/katex@0.16.10/+esm';
import {import_mathjax as import_mathjax_chtml} from
  './components/import_mathjax-chtml.js';
const MathJax = import_mathjax_chtml();

// Useful to typeset <div> delimited input with KaTeX.
const containers = document.getElementsByClassName("typeset-katex");
for (const container of containers) {
  const display_style = container.classList.contains("display") ?
    true : false;
  katex.render(container.textContent, container, {
      throwOnError: false, displayMode: true
  });
}
```

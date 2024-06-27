---
style: '../../style.css'
---

# Plot for mathematical illustration

[Observable Plot](https://observablehq.com/@observablehq/plot) is a free, open-source library from the folks at [Observable](https://observablehq.com/) designed to make it easy to generate many common types of charts for the visualization of data. Along with [D3](https://d3js.org), Plot has become one of Observable's flagship libraries.

The documentation for Plot is extensive and generally excellent. It's (understandably) focused on its usage with data, though, which obscures how easily it can be used to generate nice mathematical plots. The purpose of this Framework project is to illustrate how I use it to generate mathematical plots.

## Plot basics

One of the most basic types of objects you can draw with Plot is a line - using `Plot.line`. The `Plot.line` function accepts a number of options that allow you to specify things like fill color and stroke width. For example, here's a plot of the unit square in the plane:

<div class="collapse card">

```js echo
Plot.line(
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [0, 1]
  ],
  {
    fill: "#ddd",
    stroke: "black",
    strokeWidth: 2
  }
).plot()
```

</div>

Hmm... Doesn't look like much of a square! We'll see how to configure this with options in a bit to set, for example, the aspect ratio. The key thing to note first is that `Plot.line` accepts some *data* as its first argument, which in this case is just a list of points defining the vertices of the square we want to plot. We then call the `plot` method. This syntax is often used for the simplest examples in the `Plot` documentation. I prefer an alternative that allows us to plot several objects and generally looks like so:

```
Plot.plot({
  various_options...,
  marks:[things_to_show...]
})
```

I often use this to plot axes by including `Plot.ruleX` and `Plot.ruleY` marks for the lines that mark the axis. I might also include `Plot.axisX` and `Plot.axisY` marks to specify the tick locations. Occasionally, I'll incorporate some text as well.

Here's an alternative way to generate a labeled unit square and include axes (as well as some other options:

<div class="collapse card">

```js echo
Plot.plot({
  x: {
    domain: [0, 1.2],
    ticks: [0.25, 0.5, 0.75],
    tickFormat: ".2s"
  },
  y: { domain: [0, 1.2], ticks: 5 },
  width: 640,
  height: 640,
  marks: [
    Plot.line(
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 1],
        [0, 0]
      ],
      {
        fill: "lightgray",
        stroke: "black",
        strokeWidth: 2
      }
    ),
    Plot.text([{ x: 0.5, y: 0.9, text: "An actual square" }], {
      x: "x",
      y: "y",
      text: "text",
      fontSize: 18
    }),
    // Add the axes
    Plot.ruleX([0]),
    Plot.ruleY([0])
  ]
})
```

</div>


Note that I've included a `ruleX` and `ruleY` to generate lines representing the ${tex`y`} and ${tex`x`} axes respectively. I also added `width` and `height` options to control the maximum size of the image. The image is still responsive and should look good on small screens. If you want the aspect ratio to be genuine, the `width/height` ratio should agree with the ratio of the `domain`s for the `x` and `y` options.

## Plotting the graphs of functions

I guess the logical way to plot the graph of a function would be to include a couple of lines that look like:

    const f = x => __groovy formula__
    const pts = d3.range(a,b,dx).map(x => [x,f(x)])

and then using Plot as we've done before. As an example, here's a graph of the standard normal distribution:

<div class="collapse card">

```js echo
const f = x => Math.exp((-(x**2)/2))/Math.sqrt(2*Math.PI)
const pts = d3.range(-3.2,3.2,0.01).map(x => [x,f(x)]);
const plot = Plot.plot({
  width: 900,
  height: 300,
  y: {domain: [-0.05,0.45]},
  marks: [
    Plot.line(pts, {strokeWidth: 3}),
    Plot.ruleY([0]),
    Plot.axisX({y:0}),
    Plot.ruleX([0]),
    Plot.axisY({x:0, ticks: 5})
  ]
});
display(plot)
```

</div>

### Making it interactive

One super nice feature of Observable is the ease with which we can make graphs responsive to sliders and other inputs. The basic idea is to incorporate a control from [Observable Inputs](https://observablehq.com/@observablehq/inputs) that's passed to the `view` function. Anytime we refer to to the name of the control, we get the value of the slider.

For example, we could easily graph the family of normal distributions dependent on the parameters ${tex`\mu`} and ${tex`\sigma`}:

<div class="collapse card">

```js
const m = view(Inputs.range([-2,2],
  { label: tex`\mu:`, value: 0, step: 0.01 }))
```
```js
const s = view(Inputs.range([0.2,1.8],
  { label: tex`\sigma:`, value: 1, step: 0.01 }))
```

```js echo
// // Dependent on the following Input.range elements:
// const m = view(Inputs.range([-2,2],
//   { label: tex`\mu:`, value: 0, step: 0.01 }))
// const s = view(Inputs.range([0.2,1.8],
//   { label: tex`\sigma:`, value: 1, step: 0.01 }))

const f = x => Math.exp((-((x-m)**2)/(2*s**2)))/(Math.sqrt(2*Math.PI)*s)
const pts = d3.range(-3.2,3.2,0.01).map(x => [x,f(x)]);
const plot = Plot.plot({
  width: 900,
  height: 300,
  y: {domain: [-0.05,1.55]},
  marks: [
    Plot.line(pts, {strokeWidth: 3}),
    Plot.ruleY([0]),
    Plot.axisX({y:0}),
    Plot.ruleX([0]),
    Plot.axisY({x:0, ticks: 5})
  ]
});
display(plot)
```

</div>

## Sampling complicated functions

For more complicated functions, I've got a [build_samples](https://observablehq.com/@mcmcclur/adaptive-plotter) function that can come in handy:

<div class="collapse card">

```js echo
// // Dependent on the build_samples function,
// // which is imported as a component with:
// import {build_samples} from
//   '../../common_components/build_samples.js';

Plot.plot({
  width,
  marks: [
    Plot.line(
      build_samples((x) => Math.sqrt(x) * Math.sin(x ** 2), 0, 22, {
        N: 400,
        max_depth: 5
      })
    ),
    Plot.ruleX([0]),
    Plot.ruleY([-4.7])
  ]
})
```

</div>

The `build_samples` function uses a recursive technique to generate points where they're needed the most. It depends on a `depth` parameter to control the level of recursion. The following interactive illustrates how `build_samples` adds points where the graph curves but not where it's straight:

<div class="collapse card">

```js
const depth = view(Inputs.range([0, 7],
  { label: "depth:", value: 3, step: 1 }))
```

```js echo
// Depends on build_samples and depth defined by:
// const depth = view(Inputs.range([0, 7],
//  { label: "depth:", value: 3, step: 1 }))

let pts = build_samples((x) => (x < 0 ? Math.sqrt(1 - x ** 2) : 1), -1, 4, {
  N: 5,
  max_depth: depth
});
let pic = Plot.plot({
  width: width,
  height: width * 0.24,
  marks: [
    Plot.line(pts),
    Plot.dot(pts, { fill: "black" }),
    Plot.ruleX([-1]),
    Plot.ruleY([0]),
    Plot.text([[1, 0.5]], { x: (d) => d[0], y: (d) => d[1], text: "hi" })
  ]
});
pic.pt_cnt = pts.length;

display(pic)
```

</div>

## Unicode

Sometimes, it's nice to place mathematical symbols right into your plot. The easiest way to do so is probably to use unicode together with the `Plot.text` mark. For example, we could include a label to indicate μ and σ in our interactive normal plot:

<div class="collapse card">

```js
const m0 = view(Inputs.range([-2,2],
  { label: tex`\mu:`, value: 0, step: 0.01 }))
```
```js
const s0 = view(Inputs.range([0.2,1.8],
  { label: tex`\sigma:`, value: 1, step: 0.01 }))
```

```js echo
// Depends on two elements of type Input.range:
// const m0 = view(Inputs.range([-2,2],
//   { label: tex`\mu:`, value: 0, step: 0.01 }))
//
// const s0 = view(Inputs.range([0.2,1.8],
//   { label: tex`\sigma:`, value: 1, step: 0.01 }))

const f = x => Math.exp((-((x-m0)**2)/(2*s0**2)))/(Math.sqrt(2*Math.PI)*s0)
const pts = d3.range(-3.2,3.2,0.01).map(x => [x,f(x)]);
const plot = Plot.plot({
  width: 900,
  height: 300,
  y: {domain: [-0.05,1.55]},
  marks: [
    Plot.line(pts, {strokeWidth: 3}),
    Plot.ruleY([0]),
    Plot.axisX({y:0}),
    Plot.ruleX([0]),
    Plot.axisY({x:0, ticks: 5}),
    Plot.text([
      {text: `μ = ${m0}`, x: m0, y: 0.2},
      {text: `σ = ${s0}`, x: m0, y: 0.1}
      ], {text:'text',x:'x',y:'y', fontSize: 15})
  ]
});
display(plot)
```

</div>

We can also incorporate unicode into our tick labels using the `tickFormat` option of `Plot.axisX` and/or `Plot.axisY`. For example, we might like to use the symbol π into the tick marks for a trig function:

<div id="unicode_tick_labels" class="collapse card">

```js echo
const pts = d3.range(-10,10,0.01).map(x => [x,Math.sin(x)]);
const plot = Plot.plot({
  width: 900,
  height: 200,
  y: {domain: [-1.05,1.05]},
  marks: [
    Plot.line(pts),
    Plot.ruleY([0]),
    Plot.axisX({y:0,
      ticks: d3.range(-3*Math.PI,3*Math.PI+0.01,Math.PI),
      tickFormat: function(x) {
        const n = Math.round(x/Math.PI);
        if(x == 0) {
          return ''
        }
        else if(n == 1) {
          return 'π';
        }
        else if(n == -1) {
          return '-π';
        }
        else if(Math.abs(n)>1) {
          return `${n}π`
        }
      },
      fontSize: 16
    }),
    Plot.ruleX([0]),
    Plot.axisY({x:0, ticks: [-1,1], fontSize:14, tickFormat: Math.round})
  ]
});

display(plot)
```

</div>

Unicode is quick, easy, and perfectly acceptable for a lot of diagrams. If you're used to more complete typesetting tools like LaTeX, though, unicode might not seem sufficient. It's also possible to incorporate LaTeX-style typesetting into your plots using either MathJax or KaTeX. That's another topic and more work, though.

<!-- ```js
// Collapse the collapsibles
// From https://github.com/observablehq/framework/issues/833
document.querySelectorAll('.collapse > .observablehq-pre-container').forEach(el => {
  let wrapper = document.createElement('details');
  wrapper.className = 'code'
  let summary = document.createElement('summary')
  summary.textContent = "View the code:"
  wrapper.appendChild(summary)
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
});
``` -->

```js
import {build_samples} from
  '../../common_components/build_samples.js';
import {collapse_code} from '../../common_components/collapse_code.js';
collapse_code()
```

# Observable Plot

```js
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

```js echo
const N = view(Inputs.range([1, 32], { label: tex`N:`, value: 5, step: 1 }))
```

```js echo
Plot.plot({
  x: { domain: [-1.1, 1.1] },
  y: { domain: [-1.1, 1.1] },
  width: 640,
  height: 640,
  marks: [
    Plot.line(
      // Use d3.range to generate a list of t values and then map an anonymous
      // function over over that list to return the points to plot.
      d3
        .range(0, 2 * Math.PI + Math.PI / (50 * N), Math.PI / (50 * N))
        .map(t => [
          Math.sin(N * t) * Math.cos(t),
          Math.sin(N * t) * Math.sin(t)
        ])
    ),
    Plot.ruleX([-1.1]),
    Plot.ruleY([-1.1])
  ]
})
```

```js
// From https://github.com/observablehq/framework/issues/833
document.querySelectorAll('.observablehq-pre-container').forEach(el => {
  let wrapper = document.createElement('details');
  wrapper.className = 'code'
  let summary = document.createElement('summary')
  summary.textContent = "code:"
  wrapper.appendChild(summary)
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
});
```

```js
import {build_samples} from '../../common_components/build_samples.js';
```

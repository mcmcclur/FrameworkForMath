# Animated plots

Here are a couple of approaches to generating animated plots - an easy way and a somewhat less easy way.

## Using `now`

I suppose the easiest way to create an animated plot is to use the reactive variable `now`:

<div class="card collapse">

```js echo
now
```

</div>

It's typically pretty easy to incorporate `now` as a parameter into a plot which automatically updates with the current time. Here, for example, is the graph of
${tex.block`f(x) = \sin(x - \text{now}/200):`}

<div class="card collapse">

```js echo
let pts = d3
  .range(-10,10,0.1)
  .map(x => [x, Math.sin(x-now/200)]);
display(Plot.plot({
  width: 1000,
  height: 200,
  y: {domain: [-1.1,1.1]},
  marks: [
    Plot.line(pts, {strokeWidth: 3}),
    Plot.axisX({y:0}),
    Plot.axisY({x:0}),
    Plot.ruleX([0]),
    Plot.ruleY([0])
  ]
}))
```

</div>

Since `now` is continually updated, we see that the graph is continually shifted to the right.

## Setting up a generator and a switch

Things are a bit trickier, though, if you'd like to incorporate a start/stop mechanism, *particularly* if you'd like the animation to maintain state. Here's an example:


<div class="card collapse">

```js
// A global object that does *not* depend directly
// on `running` so it doesn't reset when `running`
// changes value:
const global = ({ t: 10 * Math.random() });

// A generator function that restarts when `running`
// changes. The value is tied to the `global` value
// so that the value doesn't reset.
const t = (function* () {
  while (running) {
    global.t = global.t + 0.0005
    yield global.t;
  }
})();

// The checkbox.
const running = view(Inputs.toggle({ label: "running:", value: true }));
```

<div id="animation"></div>

```js echo
// // Depends on a separate cell block with the following contents:
// // A global object that does *not* depend directly
// // on `running` so it doesn't reset when `running`
// // changes value:
// const global = ({ t: 10 * Math.random() });
//
// // A generator function that restarts when `running`
// // changes. The value is tied to the `global` value
// // so that the value doesn't reset.
// const t = (async function* () {
//   while (running) {
//     global.t = global.t + 0.0005
//     yield global.t;
//   }
// })();
//
// // The checkbox.
// const running = view(Inputs.toggle({ label: "running:", value: true }));


if(running) {
  let a = Math.sin(t);
  let b = 166 * t;
  let [xmin, xmax, ymin, ymax] = [-100, 100, -2, 2];
  let f = (t) => Math.sin(t) + Math.sin(a * t + b);
  let pts = d3
    .range(xmin, xmax, (xmax - xmin) / 1000)
    .map((x) => [x, f(x)]);
  const plot = Plot.plot({
    width: 1000,
    height: 200,
    x: { ticks: [] },
    y: { domain: [ymin, ymax], ticks: [] },
    marks: [Plot.line(pts)]
  });

  let output = d3.select('#animation')
  output.selectAll("*").remove();
  output.append(() => html`The graph of ${tex.block`f(x) = \sin(x) + \sin(${d3.format('0.3f')
    (Math.sin(t))} \ x + ${d3.format('0.2f')(166*t)}):`}`);
  output.append(() => plot);
}
```

</div>

If you check the code, you'll notice that the main action occurs inside an `if` block that looks like so:

    if(running) {
      /* The action! */
    }

The `running` variable is defined by the toggle so that things only run when the toggle is checked.


```js
import {delay} from '../../common_components/delay.js';
import {collapse_code} from '../../common_components/collapse_code.js';
collapse_code()
```

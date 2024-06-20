# Embedding notebooks

<div id="observablehq-viewof-f-293b28dc"></div>
<div id="observablehq-plot-293b28dc"></div>

```js
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/1ae55e01f82153d0@56.js?v=4";
new Runtime().module(define, name => {
  if (name === "viewof f") return new Inspector(document.querySelector("#observablehq-viewof-f-293b28dc"));
  if (name === "plot") return new Inspector(document.querySelector("#observablehq-plot-293b28dc"));
});
```

<div id="observablehq-table-655eea9b"></div>

```js
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/1ae55e01f82153d0.js?v=4";
new Runtime().module(define, name => {
  if (name === "table") return new Inspector(document.querySelector("#observablehq-table-655eea9b"));
});
```

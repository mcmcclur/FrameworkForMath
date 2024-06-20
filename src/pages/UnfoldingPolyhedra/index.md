# Unfolding polyhedra
## Embedding PlotX3D

https://observablehq.com/@mcmcclur/unfolding-polyhedra

<div id="observablehq-intro-d108d74a"></div>
<div id="observablehq-viewof-class_name-d108d74a"></div>
<div id="observablehq-dynamic_comment-d108d74a"></div>
<div id="observablehq-viewof-polyhedron_data-d108d74a"></div>
<div style="margin: 15px" id="observablehq-viewof-t-d108d74a"></div>
<div id="observablehq-pic-d108d74a"></div>
<div id="observablehq-comments-d108d74a"></div>

```js
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/@mcmcclur/unfolding-polyhedra.js?v=4";
new Runtime().module(define, name => {
  if (name === "intro") return new Inspector(document.querySelector("#observablehq-intro-d108d74a"));
  if (name === "viewof class_name") return new Inspector(document.querySelector("#observablehq-viewof-class_name-d108d74a"));
  if (name === "dynamic_comment") return new Inspector(document.querySelector("#observablehq-dynamic_comment-d108d74a"));
  if (name === "viewof polyhedron_data") return new Inspector(document.querySelector("#observablehq-viewof-polyhedron_data-d108d74a"));
  if (name === "viewof t") return new Inspector(document.querySelector("#observablehq-viewof-t-d108d74a"));
  if (name === "pic") return new Inspector(document.querySelector("#observablehq-pic-d108d74a"));
  if (name === "comments") return new Inspector(document.querySelector("#observablehq-comments-d108d74a"));
});
```

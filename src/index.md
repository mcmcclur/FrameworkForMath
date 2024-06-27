---
head: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css" integrity="sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww" crossorigin="anonymous">'
style: './style.css'
---

# Observable Framework for Mathematicians

<div id="splashville" style="max-width: 100%"></div>

I discovered and started using the Observable notebook in late 2018, when it was still in beta, and still use it a lot today. Like a lot of folks, though, I'm really enjoying using Observable Framework as well.

This developing Framework project outlines how some of the Observable tricks I've learned over these past few years translate to Framework with an emphasis on illustrating ideas that arise in mathematics and statistics. I anticipate that the project will naturally grow as I continue to teach. There will be an emphasis on mathematics and statistics but there will certainly be a few other topics as well.

Generally, I'd put a list of pointers to the content here but Observable Framework has that all so nicely organized in the sidebar!

---

If you're also interested in some of the data visualization work I've done, you might check out

  - [My professional web page](https://wncviz.com),
  - [My academic web page](https://marksmath.org), or
  - [My Observable profile](https://observablehq.com/@mcmcclur).

```js
resize(function(w) {
  console.log(w)
})
```


  ```js
  import {splash} from './components/typeset_fractal_animation.js';
  splash("#splashville")
  ```

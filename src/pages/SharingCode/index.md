# Sharing code

One reason to really love the Observable Notebook as a programming environment is the prominent role played by the *display* of code. The code and output quite literally live together. This feature is very well suited for sharing code and makes for a nice educational environment as well.

Observable Framework, by contrast is designed to create polished, complete, stand-alone projects. As such, the code is much less conspicuous. That's probably perfect for most projects. The fact that code is less easily displayed poses a challenge, though, if your main intention is to share coding techniques with others. Since sharing coding techniques is exactly the intention of this project, I thought I'd start with the approaches that I use for that purpose.

## Github

It's clear that Observable encourages the use of Github to share code. All [their examples](https://github.com/observablehq/framework/tree/main/examples) are stored in Framework's main Github repository and, if you navigate directly to one of the examples, you'll find a link back to that example's code on Github.

Github is surely *the* tool of choice to share, disseminate, and collaborate on code these days. The full code for this project can be found on GitHub:

http://...


When you're trying to explain short, specific pieces of code, though, a pointer to a repository for a full fledged project is possibly overkill.

## Echo

In order to share just the specific code that generates some output,
Framework offers the `echo` parameter for Javascript blocks - a syntax which is common in several other Markdown environments. Thus, if you write

    ```js echo
      groovy code to make a groovy picture
    ```

then the optional `echo` causes the groovy code to be shown along with the groovy picture.


Here's an example where [Observable's DOT template literal](https://observablehq.com/framework/lib/dot) is used to display a so-called *divisor graph*, which has a directed edge from node `i` to node `j` whenever `i` is a divisor of `j`:

<div class="card">

```js echo
let graphViz = "digraph G {\n";
for (let i = 1; i <= 12; i++) {
  for (let j = i + 1; j <= 12; j++) {
    if (j % i === 0) {
      graphViz += `  ${i} -> ${j};\n`;
    }
  }
}
graphViz += "}";
display(dot`${graphViz}`);
```

</div>

## Collapsible code

There is currently no option to make echoed code collapsible, like we see in the notebook environment. There is, however, an [open issue on GitHub](https://github.com/observablehq/framework/issues/833) requesting this feature.

Personally, I think that collapsible code is a very desirable feature so I was happy to see a workaround posted on GitHub. The idea is simply to search for exposed code and wrap it in an HTML `details` element. To use it, just place the following anywhere in your markdown:

```js echo
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
```

Better yet - one could write a component for this purpose! Note that I've modified the code slightly so that exposed code only get's collapsed if it's wrapped in a DIV of class `collapse`. Thus, some but not all exposed code will be collapsed.

### Collapsed example

Here's one last example with collapsed code. We again look at a divisor graph but the code depends on an `Inputs.range` slider to determine the largest integer in the graph. Of course, that's in a separate code block in the markdown file but the collapsed code mentions this in a comment. Just click on "View the code" to see.


<div class="card collapse">

```js
const n = view(Inputs.range([2, 24], { value: 6, step: 1 }));
```

```js echo
// Depends on n defined in another cell by:
// const n = view(Inputs.range([2, 24], { value: 6, step: 1 }));

let graphViz = "digraph G {\n";
for (let i = 1; i <= n; i++) {
  for (let j = i + 1; j <= n; j++) {
    if (j % i === 0) {
      graphViz += `  ${i} -> ${j};\n`;
    }
  }
}
graphViz += "}";
display(dot`${graphViz}`);
```

</div>

export function load_mathjax() {
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']]
    },
    svg: {
      fontCache: 'global'
    },
    // loader: {
    //   paths: {
    //     mathjax: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/'
    //   }
    // },
    startup: {
      pageReady() {
        return MathJax.startup.defaultPageReady().then(
          function() {
            console.log(["ready says", MathJax, MathJax.tex2svg("x^2")])
          }
        )
      }
    }
  };
  let script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
  // script.async = true;
  document.head.appendChild(script);

  // console.log(["tex2svg', MathJax.tex2svg("x^2")])

  return MathJax;
}



window.MathJax = {
  loader: {
    paths: {
      mathjax: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/'
    }
  },
  // startup: {
  //   pageReady() {
  //     return MathJax.startup.defaultPageReady().then(
  //       function() {
  //         console.log(["ready says", MathJax, MathJax.tex2svg("x^2")])
  //       }
  //     )
  //   }
  // },
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  },
  svg: {
    fontCache: 'global'
  }
};

window.MathJax = {
  loader: {
    paths: {
      mathjax: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/'
    }
  },
  chtml: {
    adaptiveCSS: false
  },
  options: {
    menuSettings: {
      zoom: 'Click'
    }
  },
  startup: {
    pageReady() {
      return MathJax.startup.defaultPageReady().then(
        function() {
          const containers = document.getElementsByClassName("typeset-mathjax");
          for (const container of containers) {
            const display_style = container.classList.contains("display") ?
              true : false;
            MathJax.tex2chtmlPromise(container.textContent,
              {display : display_style})
              .then(function(typeset_result) {
                container.textContent = null;
                container.appendChild(typeset_result)
              })
          }
        }
      )
    }
  }
};

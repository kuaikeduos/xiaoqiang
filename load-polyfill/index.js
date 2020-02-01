(function (callback) {
  function loadJs(src, callback) {
    var container = document.body;
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.src = src;
    container.appendChild(script);
    script.onload = function() {
      callback && callback()
    }
  }

  if (window.customElements) {
    callback()
  } else {
    loadJs(
      '//yumkuaizhan-1252921496.file.myqcloud.com/third/shadydom.min.js',
      function () {
        loadJs('//yumkuaizhan-1252921496.file.myqcloud.com/third/custom-elements.min.js', callback)
      }
    )
  }

})(function () {
  /* code here */
})
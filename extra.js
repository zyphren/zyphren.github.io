(() => {
  // 页面加载时恢复保存的颜色设置
  var p = localStorage.getItem("data-md-color-primary");
  if (p) {
    document.body.setAttribute('data-md-color-primary', p);
  }
  
  var a = localStorage.getItem('data-md-color-scheme');
  if (a == null) {
    // 根据系统偏好设置默认模式
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      a = "slate";
    } else {
      a = "default";
    }
    localStorage.setItem("data-md-color-scheme", a);
  }
  document.body.setAttribute('data-md-color-scheme', a);
  
  // 绑定按钮点击事件
  document.addEventListener('DOMContentLoaded', function() {
    // 主色切换按钮
    var primaryButtons = document.querySelectorAll("button[data-md-color-primary]");
    primaryButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        var attr = this.getAttribute("data-md-color-primary");
        document.body.setAttribute("data-md-color-primary", attr);
        localStorage.setItem("data-md-color-primary", attr);
      });
    });
    
    // 日间/夜间切换按钮
    var schemeButtons = document.querySelectorAll("button[data-md-color-scheme]");
    schemeButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        var attr = this.getAttribute("data-md-color-scheme");
        document.body.setAttribute("data-md-color-scheme", attr);
        localStorage.setItem("data-md-color-scheme", attr);
      });
    });
  });
})();

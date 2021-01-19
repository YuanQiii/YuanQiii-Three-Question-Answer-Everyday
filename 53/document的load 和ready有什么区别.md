# document的load 和ready有什么区别

- document ready
```js
$(document).ready(function(){})
// 或者简写
$(function(){})
```

- document load == window.onload
```js
$(document).load(function(){})
// 原生js
window.onload = function() {}
```

## dom文档执行顺序

1. 解析HTML结构
2. 加载外部脚本和样式表文件
3. 解析并执行脚本代码
4. 构建html dom模型 // ready
5. 加载图片等外部文件
6. 页面加载完毕 // load
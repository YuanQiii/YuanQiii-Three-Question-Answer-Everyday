# DOM和BOM有什么区别

- BOM是Browser Object Model的缩写，即浏览器对象模型。DOM是Document Object Model的缩写，即文档对象模型。他们都是浏览器提供给JavaScript的API接口

## BOM指浏览器对象模型

- 提供了独立于内容而与浏览器窗口进行交互的对象。描述了与浏览器进行交互的方法和接口，可以对浏览器窗口进行访问和操作，譬如可以弹出新的窗口，改变状态栏中的文本

## DOM指文档对象模型

- DOM 是针对 HTML 的基于树的 API。描述了处理网页内容的方法和接口，是 HTML 的API，DOM 把整个页面规划成由节点层级构成的文档

> 注意: 只有 JS 的宿主环境是浏览器的时候才有 DOM 和 BOM ，在 Node 中是没有这两个对象的
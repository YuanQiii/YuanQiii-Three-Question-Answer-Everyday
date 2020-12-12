# 请说说<script>、<script async>和<script defer>的区别

- 单纯的 script 会阻塞 DOM 的渲染，如果放在 head 标签中，对页面的显示会有延迟 
- 如果是用过 src 引入外部资源时，浏览器会先停止解析下载外部资源，之后再执行其中的 javaScript（即立即加载并渲染）
- 在添加 async 或者 defer 之后，script 的下载不会阻塞 DOM 的渲染

## 区别

1. script在执行的时候会阻塞 DOM 的渲染
2. 页面内内联的script标签，加载时立即执行所以会阻塞下面页面的渲染
3. async异步加载，加载成功立即执行
4. defer异步加载，但等到文档加载完成后才执行
5. async、defer这两个属性无法应用于内联script
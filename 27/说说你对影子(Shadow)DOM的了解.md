# 说说你对影子(Shadow)DOM的了解

- Shadow DOM 可以想象成我们在 Vue 或者 React 中使用的一个个组件，是一种将 HTML 结构、Style 封装起来的结构。我们熟悉的 \<video> 标签，其实就是 Shadow DOM 的封装，它不会受到外部样式的影响
- 借用 MDN 上的图，可以看到 Shadow DOM 允许我们在 DOM 文档中插入一个 DOM 的子树。Shadow Tree 会挂在 Shadow host 对应的 DOM 上。之后，Shadow DOM 与外层 DOM 不会相互影响，因此可以放心用来做组件
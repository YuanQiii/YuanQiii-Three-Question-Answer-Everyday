# 元素的alt和title有什么区别

## alt

- /<img> 标签的 alt 属性指定了替代文本，用于在图像无法显示或者用户禁用图像显示时，代替图像显示在浏览器中的内容

- alt 文本的使用原则：

1. 如果图像包含信息 - 使用 alt 描述图像
2. 如果图像在 a 元素中 - 使用 alt 描述目标链接
3. 如果图像仅供装饰 - 使用 alt=""

## title

- title 属性规定关于元素的额外信息，这些信息通常会在鼠标移到元素上时显示一段工具提示文本（tooltip text）
- title 属性常与 form 以及 a 元素一同使用，以提供关于输入格式和链接目标的信息
- 同时它也是 abbr 和 acronym 元素的必需属性
- 当然 title 属性是比较广泛使用的，可以用在除了base，basefont，head，html，meta，param，script 和 title 之外的所有标签，但是并不是必须的
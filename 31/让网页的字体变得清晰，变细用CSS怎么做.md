# 让网页的字体变得清晰，变细用CSS怎么做

1. font-weight + font-family
  - font-weight 来控制粗细还是需要看对应的字体有没有对应的变种字体。因此这就和 font-family 相关。

2. -webkit-font-smoothing
  - 这个属性是 Chrome 的抗锯齿属性。加上后会显得细一些，但是只针对 webkit 内核的浏览器才有效。
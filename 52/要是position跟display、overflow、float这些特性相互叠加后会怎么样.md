# 要是position跟display、overflow、float这些特性相互叠加后会怎么样

## 'display'、'position' 和 'float' 的相互关系

- display 属性规定元素应该生成的框的类型
- position 属性规定元素的定位类型
- Float也是一种布局方式
- "position:absolute" 和 "position:fixed" 优先级最高，有它存在的时候，浮动不起作用，'display' 的值也需要调整
- 元素的 'float' 特性的值不是 "none" 的时候或者它是根元素的时候，调整 'display' 的值
- 非根元素，并且非浮动元素，并且非绝对定位的元素，'display' 特性值同设置值
- 浮动或绝对定位的元素，只能是块元素或表格



转换对应表：

| **设定值**                                                   | **计算值** |
| ------------------------------------------------------------ | ---------- |
| inline-table                                                 | table      |
| inline, run-in, table-row-group, table-column, table-column-group, table-header-group, table-footer-group, table-row, table-cell, table-caption, inline-block | block      |
| 其他                                                         | 同设定值   |




## 'display' 的值为 'none'

- 如果 'display' 的值为 'none'，那么 'position' 和 'float' 不起作用。在这种情况下，元素不产生框。因此浮动和定位无效

## 'position' 的值是 'absolute' 或 'fixed'

- 如果 'position' 的值是 'absolute' 或 'fixed'，框就是绝对定位的，'float' 计算后的值应该是 'none'
- 当元素是绝对定位时，浮动失效，'display' 会被按规则重置

## 'float' 的值不是 "none"

- 如果 'float' 的值不是 "none"，该框浮动并且 'display' 会被按照转换对应表设置
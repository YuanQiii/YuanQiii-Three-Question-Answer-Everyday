 # 请描述HTML元素的显示优先级

 ## 在html中，帧元素（frameset）的优先级最高，表单元素比非表单元素的优先级要高

 - 表单元素:
      - 文本输入框，密码输入框，单选框，复选框，文本输入域，列表框等等
 - 非表单元素
      - 链接（a），div, table, span 等等

## 有窗口元素比无窗口元素的优先级高

- 有窗口元素
      - select元素，object元素，以及frames元素等等
- 无窗口元素
      - 大部分html元素都是无窗口元素

> z-index 属性也可以改变显示优先级，但只对同种类型的元素才有效。如果两个元素分别为 表单元素 和 非表单元素 那么 z-index 是无效的
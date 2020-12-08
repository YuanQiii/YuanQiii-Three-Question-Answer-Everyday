# 简述你对BFC规范的理解
  
  ## 应用场景
  - 解决浮动子元素导致父元素，高度坍塌的问题
  - 解决文字环绕在float四周的情况
  - 解决边距重叠问题 （父子，兄弟，空元素等）

  ## 特性
  - 解决边距重叠问题 （父子，兄弟，空元素等）
  - BFC的区域不会与float的元素区域重叠
  - 计算高度浮动子元素也会计算

  ## 条件
  - html 根元素
  - float的值不是none
  - position 的值不是static或者relative
  - display的值是table-cell,table-caption,inline-block,inline-flex,flex
  - overflow的值不是visible

  ## tip
  - BFC解决父子元素边距重叠
  - 浮动元素、inline-block 元素、绝对定位元素都在触发了BFC的同时解决兄弟元素重叠问题
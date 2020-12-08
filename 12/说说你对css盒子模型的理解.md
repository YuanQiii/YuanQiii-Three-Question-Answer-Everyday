# 说说你对css盒子模型的理解

## 是什么

- 网页中，每一个元素都占有一定的空间，无论是div、h1~h6、还是p，都可以看成是盒子

## 组成

- 元素的内容（content）
- 元素的内边距（padding）
- 元素的边框（border）
- 元素的外边距（margin）

## 分类

- 通过box-sizing的取值来切换盒模型

### W3C标准盒模型

- 块元素box-sizing属性为content-box
- 盒子总宽度 = margin + border + padding + width

### IE盒模型

- 块元素box-sizing属性为border-box
- 盒子总宽 = margin + width


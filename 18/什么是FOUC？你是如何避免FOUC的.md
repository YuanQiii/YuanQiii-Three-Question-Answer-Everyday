# 什么是FOUC？你是如何避免FOUC的

## 是什么

- FOUC 即 Flash of Unstyled Content
- 当文档结构表（HTML）先于样式表（CSS）渲染，这时候渲染出来的是没有样式的页面
- 然后当浏览器解析到样式表的时候，又结合样式表重新渲染了一遍文档，这时候页面就添加了样式
- 而前后两次的页面变换会出现一瞬间的闪烁

## 原因

- 通过 @import 方式导入样式表
- style 标签在 body 中

## 解决

- 把 link 标签将样式放在 head 中
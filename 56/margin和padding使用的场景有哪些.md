# margin和padding使用的场景有哪些

## margin

1. margin 可以实现很多流体布局
2. margin 外部尺寸实现等高布局  
3. 实现垂直居中布局

## padding

1. 实现自适应的等比例矩形效果
```css
div { padding: 50%; }
div { padding: 25% 50%; } //宽高比为 2:1 的矩形效果
```
2. 实现头图高度天然等比例缩小效果
```css
.box {
padding: 10% 50%;
position: relative;
}

.box > img {
position: absolute;
width: 100%; height: 100%;
left: 0; top: 0;
}
```

3. padding 属性和 background-clip 属性配合，可以在有限的标签下实现一些 CSS 图形绘制效果

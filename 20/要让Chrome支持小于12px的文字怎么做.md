# 要让Chrome支持小于12px的文字怎么做

1. -webkit-text-size-adjust:none; 这个属性在高版本的 Chrome 中已经被废除
2. 使用 transform: scale(0.5, 0.5)，但使用 transform 需要注意下面几点：
  - transform 对行内元素无效，因此要么使用 display: block; 要么使用 display: inline-block;
  - transform 即使进行了缩放，原来元素还是会占据对应的位置。因此需要做调整，最好是在外面再包一层元素，以免影响其他元素
3. 作为图片
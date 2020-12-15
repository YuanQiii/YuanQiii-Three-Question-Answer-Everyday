# rgba()和opacity这两个的透明效果有什么区别呢

1. opacity 是属性，rgba()是函数，计算之后是个属性值
2. opacity 作用于元素和元素的内容，内容会继承元素的透明度，取值0-1
3. rgba() 一般作为背景色 background-color 或者颜色 color 的属性值，透明度由其中的 alpha 值生效，取值0-1
4. transparent 也是透明，是个属性值，颜色值，跟#000是一类，不过它是关键字来描述
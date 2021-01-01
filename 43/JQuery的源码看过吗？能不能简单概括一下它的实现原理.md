# JQuery的源码看过吗？能不能简单概括一下它的实现原理

```js
(function(window,undefined,document){
  function jQuery(prop){
    return new jQuery.prototype.init()
  }
  jQuery.prototype = {
    contructor:jQuery,
    init:function(prop){},
    //  ...
 }
 jQuery.prototype.init.prototype = jQuery.prototype;
 window['jQuery'] = window['$'] = new jQuery()
})(window,undefined,document)
```

- jQuery是通过封装浏览器原生的DOM API实现dom元素的选取，然后封装到jQuery对象中去，同时根据浏览器检测对不同浏览器操作不同的APi .jQuery 对象上高度集成了超的API
- 当然 jQuery 还有做的更多比如，我们可以new jQuery('div'),也可以直接$('div'),这个巧妙地运算就是上面init方法；如果页面已经有$时，jQuery会先将$接管把之前$的全局名保存下来 等后面使用是在释放
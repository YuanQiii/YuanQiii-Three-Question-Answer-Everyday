# 说说你对meta标签的理解

## 什么是meta

- Meta标签是HTML语言head区的一个辅助性标签，它位于HTML文档头部的head标记和title标记之间，它提供用户不可见的信息
- Meta ： 即 **元数据（Metadata）**是数据的基本信息
- 元数据可以被使用浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 Web 服务调用
- 它本身是一个没什么用的标签，但是一旦在它内部通过其他属性设置了某些效果，它就起作用了，所以我们称之为“ 元数据 ”

## 属性

1. charset (HTML5)
  - character_set
  - 定义文档的字符编码
2. content
  - text
  - 定义与 http-equiv 或 name 属性相关的元信息
3. http-equiv
  - content-type、default-style、refresh
  - 把 content 属性关联到 HTTP 头部
4. name
  - application-name、author、description、generator、keywords
  - 把 content 属性关联到一个名称
5. scheme
  - format/URI
  - HTML5不支持。 定义用于翻译 content 属性值的格式

## 移动端meta

1. 移动端页面设置视口宽度等于设备宽度，并禁止缩放
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
```

2. 移动端页面设置视口宽度等于定宽（如640px），并禁止缩放，常用于微信浏览器页面
```html
<meta name="viewport" content="width=640,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
```

3. 禁止将页面中的数字识别为电话号码
```html
<meta name="format-detection" content="telephone=no" />
```

4. 忽略对邮箱地址的识别
```html
<meta name="format-detection" content="email=no" />
```

5. 当网站添加到主屏幕快速启动方式，伪装webapp，可隐藏工具栏/菜单栏/地址栏，仅针对ios的safari
```html
<meta name="apple-mobile-web-app-capable" content="yes" />
<!-- ios7.0版本以后，safari上已看不到效果 -->
```

6. 添加到主屏幕后，全屏显示
```html
<meta name="apple-touch-fullscreen" content="yes">
```

7. 设置ios的safari浏览器顶端状态条的样式
```html
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<!-- 可选default、black、black-translucent -->
```

8. 添加到主屏后的标题
```html
<meta name="apple-mobile-web-app-title" content="标题">
```

9. 添加智能 App 广告条 Smart App Banner,告诉浏览器这个网站对应的app，并在页面上显示下载banner
```html
<meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL">
```

10. 其他meta
```html
<!-- 可以在 https 协议下请求 http -->
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />

<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">

<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">

<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">

<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">

<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">

<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">

<!-- UC应用模式 -->
<meta name="browsermode" content="application">

<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">

<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">
```



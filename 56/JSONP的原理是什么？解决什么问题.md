# JSONP的原理是什么？解决什么问题

## 解决跨域

## 原理

1. 创建script元素 请求对应路径
2. 将回调函数挂载全局
3. 将script元素挂载到页面上
4. script请求到的代码会执行挂载在全局的回调函数 并传递响应值
5. 当script加载完毕移除该元素

```js
function JSONP(url, params, callback) {
    const script = document.createElement("script");
    script.src = url + parseObjToParams({...params, callback: "jsonpCallback"});
    document.body.appendChild(script);
    window.jsonpCallback = callback;
    script.onload = () => {
        document.body.removeChild(script)
    }
}

JSONP("http://localhost:3019/asd", {name: "vijay"}, (data) => {
    console.log(data);
});

//server
app.use("/asd", (req, res, next) => {
    res.jsonp({ user: 'tobi' })
});
```
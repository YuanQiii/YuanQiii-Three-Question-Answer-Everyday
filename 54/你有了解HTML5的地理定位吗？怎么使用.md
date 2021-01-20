# 你有了解HTML5的地理定位吗？怎么使用

```js
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "该浏览器不支持获取地理位置。";
  }
}

function showPosition(position) {
  x.innerHTML = "纬度: " + position.coords.latitude + "经度: " + position.coords.longitude;
}
```
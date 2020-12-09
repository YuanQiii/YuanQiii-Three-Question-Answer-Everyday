# "attribute"和"property"有什么不同

## property

1. 是DOM中的属性，是JavaScript里的对象
2. 可以读取标签自带属性，包括没有写出来的
3. 不能读取attribute设置的属性
4. 获取方式：element.property;            如：p.className;
5. 设置方式：element.property = 'xxx';    如：p.className = 'xiao';
6. 是元素（对象）的属性

## attribute

1. 是HTML标签的属性,即直接在html标签添加的都是attribute属性
2. 不能读取property设置的属性
3. 读取方式：element.getAttribute('属性名','属性值');  如：a.getAttribute('href');
4. 设置方式：element.setAttribute('属性名','属性值');  如：a.getAttribute('href','xiaowan.jpg');
5. 直接在html标签上添加的和使用setAttribute添加的情况一致

## 取值与赋值

1. attribute赋值只能是字符串
2. attribute需要用getAttribute和setAttribute方法进行取值赋值
3. property可以赋任何值
4. property用“.”属性就可以取值和赋值
5. 用property进行赋值后，用getAttribute的方式取到的是旧值
```html
<input type="text" value="123"/>
```
- 用input.value = 456赋值之后，用input.getAttribute("value")获取到的仍然是123
- 但是用setAttribute赋值后，用property可以取到正确的值
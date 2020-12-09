 // 你理解的"use_strict";是什么，使用它有什么优缺点

  //   设立"严格模式"的目的，主要有以下几个：
  // 　　- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
  // 　　- 消除代码运行的一些不安全之处，保证代码运行的安全；
  // 　　- 提高编译器效率，增加运行速度；
  // 　　- 为未来新版本的Javascript做好铺垫。

  (function fn() {
    // "use strict"

    // 1. 禁止this关键字指向全局对象
    this //undefined

    // 2. 禁止在函数内部遍历调用栈
    fn.caller
    fn.arguments

    // 3. 全局变量必须显式声明
    age = 12

  })()

  // 4. arguments不再追踪参数的变化
  function f(a) {
    a = 2;
    return [a, arguments[0]];
  }
  f(1); // 正常模式为[2,2]

  function f(a) {
    "use strict";
    a = 2;
    return [a, arguments[0]];
  }

  f(1); // 严格模式为[2,1]
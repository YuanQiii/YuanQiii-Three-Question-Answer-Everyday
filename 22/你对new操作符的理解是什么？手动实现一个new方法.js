  // 你对new操作符的理解是什么？手动实现一个new方法

// 1. 创建新对象
// 2. 新对象原型[[prototype]] = 构造函数prototype
// 3. this 指向新对象
// 4. 执行构造函数
// 5. 如果构造函数返回非空对象，就返回这个对象引用，不然返回创建的新对象


  function myNew(constructor, ...args) {

    // 创建对象并将对象的原型指向构造函数原型
    let obj = Object.create(constructor.prototype)

    // 执行构造函数并传入参数
    let obj1 = constructor.apply(obj, args)

    // 判断结果是否为对象
    return obj instanceof Object ? obj1 : obj

  }
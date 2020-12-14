# 说说你对arguments的理解，它是数组吗

 1. 实参列表,是类数组,不是数组
 2. 是传入参数的一个镜像(浅拷贝)
 3. arguments.callee是函数本身, 严格模式禁用arguments.callee
 4. 转换为数组的方法 
  1. \[...arguments]
  2. Array.from(arguments)
  3. [].slice.call(arguments)


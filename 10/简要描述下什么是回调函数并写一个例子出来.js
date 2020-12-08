// 把函数A作为参数传递给另一个函数B

function A(){
  console.log('A');
}

let B = setTimeout(A, 1000)


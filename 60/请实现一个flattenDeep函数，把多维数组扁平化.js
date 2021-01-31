function flattenDeep(arr) {
  let newArr = []

  function fn(arr) {
    arr.forEach(item => {
      if (Array.isArray(item)) {
        fn(item)
      } else {
        newArr.push(item)
      }
    })
  }

  fn(arr)

  return newArr
}


// const newArray = arr.flat(depth)
const temp = [1,2,[1,2]];
console.log(temp.flat(Infinity));
// [1,2,1,2]

const arr = [1,2,[3,4]]
arr.reduce((acc, val) => acc.concat(val), []) 

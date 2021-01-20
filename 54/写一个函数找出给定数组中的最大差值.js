// function getMax(arr){
//   let newArr = arr.sort((a, b) => {
//     return a - b
//   })

//   return newArr[newArr.length - 1] - newArr[0]
// }

function getMax(arr) {
  return Math.max(...arr) - Math.min(...arr)
}

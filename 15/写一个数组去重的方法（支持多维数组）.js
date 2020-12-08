  // 将数组降维
  function resetArray(arr, newArr) {
    arr.forEach(item => {
      if (Array.isArray(item)) {
        resetArray(item, newArr);
      } else {
        newArr.push(item);
      }
    })
  }
  // 将数组去重
  function uniArr(arr) {
    var newArr = [];
    resetArray(arr, newArr);
    return [...new Set(newArr)]
  }

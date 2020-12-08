function strRemoveLast(str, key) {
  let index = str.lastIndexOf(key),
      newStr = ''

  //判断指定字符串是否存在
  if (index === -1) {
    return '指定字符串不存在'
  } else {
    for (let i = 0; i < str.length; i++) {
      
      //判断是否为当前查找字符串
      if (index != i) {
        newStr += str[i]
      }
    }
  }
  return newStr
}

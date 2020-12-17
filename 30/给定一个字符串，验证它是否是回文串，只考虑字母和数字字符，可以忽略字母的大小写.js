function isPalindrome(str) {
  // 将字符串转为数组，然后颠倒，最后变为字符串
  let newStr = str.split('').reverse().join('')

  // 忽略大小写检查是否为回文字符串
  if (str.toLowerCase() === newStr.toLowerCase()) {
    return true
  } else {
    return false
  }
}
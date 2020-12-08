function stringCount(mainStr, itemStr) {

  // 主要字符串长度
  let mainLen = mainStr.length,

    // 次要字符串长度
    itemLen = itemStr.length,

    // 统计次数
    count = 0

  // 当次字符串长度为0时
  if (itemLen === 0) {
    return 0

    // 当次字符串长度超过主字符串时
  } else if (itemLen > mainLen) {
    return 0
  } else {
    for (let i = 0; i < mainLen; i++) {

      // 截取字符串长度参数
      let sliceLen = i + itemLen

      // 截取字符串
      let strSlice = mainStr.slice(i, sliceLen)

      // 截取字符串与次字符串对比
      if (strSlice === itemStr) {
        count++
      }

      //当截取字符串长度参数与主要字符串长度相等时，已经截取完整个主要字符串，不用再进行循环，退出循环
      if (sliceLen === mainLen) {
        break
      }
    }
    return count
  }
}
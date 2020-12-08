function getUrlSearchArgs() {

  // 获取查询字符串
  let locSearch = window.location.search

  // 判断是否为空
  if (!locSearch) {
    return {}
  } else {

    // 将参数以?分隔，获取后面的参数
    let locSearchArgs = locSearch.split('?')[1],

      // 将参数以&分隔
      locSearchArgsArr = locSearchArgs.split('&'),
      locSearchArgsObj = {}

    // 遍历每个参数，将其添加到对象中
    locSearchArgsArr.forEach(item => {
      let arr = item.split('=')
      locSearchArgsObj[arr[0]] = arr[1]
    })

    return locSearchArgsObj
  }
} 
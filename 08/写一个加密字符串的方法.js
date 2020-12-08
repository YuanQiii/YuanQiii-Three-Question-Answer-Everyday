function encryptStr(str) {
  let temp = ''
  for (let i = 0; i < str.length; i++) {
    // 获取随机参数
    let randomNum = (Math.random() * 100).toFixed(0),

      // 转化字符串
      ustr = '\\u00' + Number(str.charCodeAt(i).toString(16)) + randomNum,

      //生成JSON格式
      jsonstr = '{"ustr": "' + ustr + '"}'

    //解析JSON格式
    temp += JSON.parse(jsonstr)['ustr']
  }
  return temp
}
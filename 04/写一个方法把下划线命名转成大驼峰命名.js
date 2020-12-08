function nameUnderlineToHump(varName){
  let newVar = ''
  for(let i=0;i<varName.length;i++){

    //判断是否为下划线
    if(varName[i] === '_'){

      //将下划线后一位变为大写
      newVar += varName[i+1].toUpperCase()

      //从大写后的字符串开始
      i++
    }else {
      newVar += varName[i]
    }
  }
  return newVar
}
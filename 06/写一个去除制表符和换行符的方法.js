function removeTabsAndNewline(value){
  let temp = ''
  for(let i=0; i<value.length; i++){
    
    // 判断制表符和换行符
    switch(value[i]){
      case '\t':
        temp += ''
        break;
      case '\n':
        temp += ''
        break;
      case ' ':
        temp += ''
      default:
        temp += value[i]
    }
  }
  return temp
}
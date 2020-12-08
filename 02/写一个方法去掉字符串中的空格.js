function strTrim(str){
  let temp = ''
  for(let i=0;i<str.length;i++){
    temp += str[i].trim()
  }
  return temp
}
function switchCase(value){
  let temp = ''
  for(let i=0;i<value.length;i++){

    //判断是否为大写
    if(str[i].toUpperCase() === str[i]){
      temp += str[i].toLowerCase()
    }else {
      temp += str[i].toUpperCase()
    }
  }
  return temp
}
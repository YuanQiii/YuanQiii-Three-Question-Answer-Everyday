function wordLongest1(str){
  let wordArr = str.split(' '),
  word = ''

  word = wordArr.reduce((acc, cur) => {
    if(acc.length > cur.length){
      return acc
    }else {
      return cur
    }
  }, 0)

  return {
    word: word,
    length: word.length
  }
}


function wordLongest2(str){
  let wordArr = str.split(' '),
  max = wordArr[0]
  wordArr.forEach(item => {
    max = item.length > max.length ? item : max
  })
  return {
    word: max,
    length: max.length
  }
}

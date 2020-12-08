let arr = [],
  item = null

function arrItem() {
  if (arr.length < 5) {
    getRandom()
    if (arr.indexOf(item) === -1) {
      arr.push(item)
    }
    arrItem()
  } else {
    return arr
  }
}

arrItem()

function getRandom() {
  item = parseInt(Math.random() * 31 + 2)
}
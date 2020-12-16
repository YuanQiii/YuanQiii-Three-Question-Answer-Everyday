function getMaxAndMin(arr) {
  return {
    max: Math.max.apply(Array, arr),
    min: Math.min.apply(Array, arr)
  }
}
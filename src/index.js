module.exports = function towelSort (matrix) {
  if (matrix === [] || matrix === undefined) {
    return []
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 !== 0) {
        matrix[i].reverse();
      }
    }
    if (matrix.join().split(',')[0] == '') {
      return []
    } else {
      return matrix.join().split(',')
    }
  }
}

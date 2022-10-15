const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(Array.isArray(arr))) throw new Error(`'arr' parameter must be an instance of the Array!`);
  var newArr = arr.slice()
  for (let i=0; i<newArr.length;i++){
    if (newArr[i]=='--discard-next') {
        if (i!=newArr.length-1){
          newArr[i]='discard'
          newArr[i+1]='discard'
      } else {
        newArr.pop()
      }
    } else if (newArr[i]=='--discard-prev'){
      if (i!=0){
        newArr[i]='discard'
        newArr[i-1]='discard'
      } else {
        newArr.shift()
          i--
      }
    } else if (newArr[i]=='--double-next') {
      if (i!=newArr.length-1){
        newArr[i] = newArr[i+1]
      } else {
        newArr.pop()
      }
    } else if (newArr[i]=='--double-prev'){
        if (i!=0){
          newArr[i] = newArr[i-1]
       } else {
        newArr.shift()
       }
    }
  }
  for (let i=0; i<newArr.length;i++) {
      if (newArr[i]=='discard'){
        newArr.splice(i, 1)
          i--
      }
  }
  return newArr
}

module.exports = {
  transform
};

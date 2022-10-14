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
  console.log(arr)
  if (!(Array.isArray(arr))) throw new Error(`'arr' parameter must be an instance of the Array!`);
  // for (let i=0; i<arr.length;i++){
  //   if (arr[i]=='--discard-next') {
  //     arr[i]='discard'
  //     arr[i+1]='discard'
  //   } else if (arr[i]=='--discard-prev'){
  //     if (i!=0){
  //       arr[i]='discard'
  //       arr[i-1]='discard'
  //     } else arr[i]='discard'
  //   } else if (arr[i]=='--double-next') {
  //     if (i!=arr.length-1){
  //       arr[i] = arr[i-1]
  //     } else {
  //       arr.splice(arr.length-1, 1)
  //     }
  //   }

  // }
  
  for (let i=0; i<arr.length;i++){
    if (arr[i]=='--discard-next') {
      arr.splice(i, 2)
      i--
    } else if (arr[i]=='--discard-prev'){
      if (i!=0){
        arr.splice(i-1, 2)
        i--
      } else {
        arr.shift()
      }
    } else if (arr[i]=='--double-next'){
      if (i!=arr.length-1){
        arr[i] = arr[i-1]
      } else {
        arr.pop()
      }
    } else if (arr[i]=='--double-prev'){
      if (i!=0){
        arr[i] = arr[i-1]
      } else {
        arr.shift()
      }
      
    }
  }
  return arr
}

module.exports = {
  transform
};

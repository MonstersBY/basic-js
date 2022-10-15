const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    let count =1
    let maxcount =0
    function Depth(newArr){
      for (let i=0;i<newArr.length; i++){
        if (Array.isArray(newArr[i])){
          count++
          Depth(newArr[i])
        } else {
          maxcount=count
          count=0
        }
      }
    }
    Depth(arr)
    
    return maxcount
  }
}

module.exports = {
  DepthCalculator
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let NewStr = ''
  let rTime
  let separate = ''
  let add = ''
  let addRTime
  let addSeparate = ''
  if (options.hasOwnProperty('repeatTimes')){
    rTime =options.repeatTimes
  }else rTime =1
  if (options.hasOwnProperty('separator')){
    separate =options.separator
  }else separate = '+'
  if (options.hasOwnProperty('addition')){
    add =options.addition
  }
  if (options.hasOwnProperty('additionRepeatTimes')){
    addRTime =options.additionRepeatTimes
  }else addRTime =1
  if (options.hasOwnProperty('additionSeparator')){
    addSeparate =options.additionSeparator
  }else addSeparate = '|'
  for (let i=0; i<rTime; i++){
    NewStr +=str
    
    for (let j=0; j<addRTime; j++){
      NewStr +=add
      if (j+1 !=addRTime) NewStr +=addSeparate
    }
    
    if (i+1 !=rTime) NewStr +=separate
  }
  return NewStr
}

module.exports = {
  repeater
};

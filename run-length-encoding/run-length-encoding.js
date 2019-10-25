//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (str) => {
  let newStr = ''

  if (str.length === 0) {
    return newStr
  }

  else {
    let runner = 1

    for (let i = 1; i <= str.length; i++) {
      if (str[i - 1] === str[i]) {
        runner++
      }

      else {
        if (runner === 1) {
          newStr += str[i - 1]
        }

        else {
          newStr += runner + str[i - 1]
          runner = 1
        }
      }
    }
    
    return newStr
  }
};

export const decode = (str) => {
  let newStr = ''

  if (str.length === 0) {
    return newStr
  }

  else {
    let numRegex = /[0-9]/
    let num = 0

    if (!str[0].match(numRegex)) {
      for (let i of str){
        newStr += i
      }

      return newStr
    }

    else {
      for (let i = 1; i < str.length; i++) {
        if (str[i - 1].match(numRegex) && !str[i].match(numRegex)) {
          if (num === 0) {
            num = parseInt(str[i-1])
    
            for (let j = 0; j < num; j++) {
              newStr += str[i]
            }
    
            num = 0
          }
  
          else {
            for (let j = 0; j < num; j++) {
              newStr += str[i]
            }
    
            num = 0
          }
        }
  
        else if (str[i - 1].match(numRegex) && str[i].match(numRegex)) {
          num = parseInt(str[i - 1] + str[i])
        }
  
        else if (!str[i - 1].match(numRegex) && str[i].match(numRegex)) {
          continue
        }
  
        else {
          newStr += str[i]
        }
      }
    }


    return newStr
  }
};

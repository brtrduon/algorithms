//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const matchingBrackets = (bStr) => {
  if (bStr.length % 2 !== 0) {
    return false
  }

  else {
    let cBrack = 0
    let sBrack = 0
    let parens = 0

    for (let i of bStr) {
      if (i === '{') {
        cBrack++
      }

      else if (i === '}') {
        cBrack--

        if (cBrack === 0 && sBrack !== 0) {
          return false
        }

        else if (cBrack === 0 && parens !== 0) {
          return false
        }
      }

      else if (i === '[') {
        sBrack++
      }

      else if (i === ']') {
        sBrack--
      }

      else if (i === '(') {
        parens++
      }
      
      else if (i === ')') {
        parens--
      }


      if (cBrack < 0 || sBrack < 0 || parens < 0) {
        return false
      }
    }

    if (cBrack === 0 && sBrack === 0 && parens === 0) {
      return true
    }

    else {
      return false
    }
  }
};

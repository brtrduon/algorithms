//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = (num) => {
  let strNum = num.toString().split('')
  let sum = 0

  for (let n of strNum) {
    let nToNum = parseInt(n)

    sum += (nToNum ** strNum.length)
  }

  if (sum === num) {
    return true
  }

  else {
    return false
  }
};

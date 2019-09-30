//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (str1, str2) => {
  if (str1.length === str2.length) {
    if (str1 === str2) {
      return 0
    }

    else {
      let difference = 0
      let runner = 1

      for (let i of str1) {
        if (i !== str2[runner]) {
          runner++
          difference++
        }
      }

      return difference
    }
  }
  
  else if (str1.length === 0) {
    throw 'left strand must not be empty'
  }
  
  else if (str2.length === 0) {
    throw 'right strand must not be empty'
  }

  else if (str1.length !== str2.length) {
    throw 'left and right strands must be of equal length'
  }
};

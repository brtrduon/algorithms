//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (str) => {
  let strArr = str.split('')
  let newArr = strArr.map(x => {
    if (x === 'G') {
      return 'C'
    }

    else if (x === 'C') {
      return 'G'
    }

    else if (x === 'T') {
      return 'A'
    }

    else if (x === 'A') {
      return 'U'
    }

    else {
      return x
    }
  })

  return newArr.join('')
};

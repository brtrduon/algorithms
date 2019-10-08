//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (str) => {
  let acronym = ''
  let strArr = str.replace(/[-_]/g, ' ').split(' ')

  for (let word of strArr) {
    if (word === '') {
      continue
    }

    else {
      acronym += word[0].toUpperCase()
    }
  }

  return acronym
};

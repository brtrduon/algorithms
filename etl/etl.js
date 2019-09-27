//
// This is only a SKELETON file for the 'etl' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldObj) => {
  let newObj = {}

  for (let num in oldObj) {
    oldObj[num].forEach(letter => {
      newObj[letter.toLowerCase()] = parseInt(num)
    })
  }

  return newObj
};

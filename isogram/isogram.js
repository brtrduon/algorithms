//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (str) => {
  if (str.length === 0) {
    return true
  }

  let letterMap = {}
  let strArr = str.toLowerCase().split('')

  for (let i = 97; i < 123; i++) {
    letterMap[String.fromCharCode(i)] = 0
  }
  
  for (let char of strArr) {
    if (char.match(/[a-z]/i)) {
      letterMap[char]++
    }
  }
  
  for (let letter in letterMap) {
    if (letterMap[letter] > 1) {
      return false
    }
  }

  return true
};

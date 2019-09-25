//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Anagram {
  constructor(word) {
    this.word = word
  }

  matches(arr) {
    for (let i of arr) {
      if (i.split('').sort() !== this.word.split('').sort()) {
        arr.shift()
      }
    }

    return arr
  }
}

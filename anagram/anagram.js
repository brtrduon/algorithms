//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Anagram {
  constructor(word) {
    this.subject = word.toLowerCase();
  }

  matches(arr) {
    const lArr = arr.map(word => word.toLowerCase());
    let aSubject = this.subject.split('').sort().join('')
    let resArr = []

    for (let word of arr) {
      let lWord = word.toLowerCase();

      let dups = 0;
      for(let oWord of lArr) {
        if(lWord === oWord) ++dups;
      }
      if (dups === 1 && lWord.split('').sort().join('') === aSubject) {
        resArr.push(word)
      }
    }

    return resArr
  }
}

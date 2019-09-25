//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Words {
  count(phrase) {
    let phraseArr = phrase.toLowerCase().split(/\s+/).filter(Boolean);
    let phraseMap = {}

    // build out map
    for (let i of phraseArr) {
      phraseMap[i] = 0
    }

    // increase val of key by one if key matches word in phraseArr
    // for (let j in phraseMap) {
    //   for (let k of phraseArr) {
    //     if (k === j) {
    //       phraseMap[j]++
    //     }
    //   }
    // }
    for (let word of phraseArr) {
      ++phraseMap[word];
    }

    return phraseMap
  }
}

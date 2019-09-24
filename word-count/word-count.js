//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Words {
  count(phrase) {
    let phraseMap = {}

    for (let i of phrase.split(' ')) {
      phraseMap[i] = 0

      
    }

    console.log(phraseMap)
  }
}

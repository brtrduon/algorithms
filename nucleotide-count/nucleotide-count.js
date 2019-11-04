//
// This is only a SKELETON file for the 'Nucleotide-Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class NucleotideCounts {
  static parse(str) {
    let ans = ''
    let nucleotideMap = {
      A: 0,
      C: 0,
      G: 0,
      T: 0
    }

    for (let char of str) {
      if (!char.match(/[ACGT]/g)) {
        throw 'Invalid nucleotide in strand'
      }

      else {
        nucleotideMap[char]++
      }
    }

    for (let char in nucleotideMap) {
      ans += `${nucleotideMap[char]} `
    }

    ans = ans.slice(0, ans.length - 1)

    return ans
  }
}

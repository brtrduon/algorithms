//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rnaStr) => {
  let proteinNames = []

  if (!rnaStr) {
    return proteinNames
  }

  else {
    let allProteinMap = {
      'AUG': 'Methionine',
      'UUU': 'Phenylalanine',
      'UUC': 'Phenylalanine',
      'UUA': 'Leucine',
      'UUG': 'Leucine',
      'UCU': 'Serine',
      'UCC': 'Serine',
      'UCA': 'Serine',
      'UCG': 'Serine',
      'UAU': 'Tyrosine',
      'UAC': 'Tyrosine',
      'UGU': 'Cysteine',
      'UGC': 'Cysteine',
      'UGG': 'Tryptophan',
      'UAA': 'STOP',
      'UAG': 'STOP',
      'UGA': 'STOP'
    }

    let rnaArr = rnaStr.match(/.{1,3}(?=(.{3})+(?!.))|.{1,3}$/g)
    for (let protein of rnaArr) {
      if (!allProteinMap[protein]) {
        throw 'Invalid codon'
      }

      else if (allProteinMap[protein] === 'STOP') {
        return proteinNames
      }

      else {
        proteinNames.push(allProteinMap[protein])
      }
    }

    return proteinNames
  }
};

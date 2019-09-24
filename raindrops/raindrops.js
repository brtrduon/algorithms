//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (n) => {
  if (n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) {
    return n.toString()
  }

  else if (n % 3 === 0 && n % 5 === 0 && n % 7 === 0) {
    return 'PlingPlangPlong'
  }

  else if (n % 3 === 0 && n % 5 === 0) {
    return 'PlingPlang'
  }

  else if (n % 3 === 0 && n % 7 === 0) {
    return 'PlingPlong'
  }

  else if (n % 5 === 0 && n % 7 === 0) {
    return 'PlangPlong'
  }

  else if (n % 7 === 0) {
    return 'Plong'
  }

  else if (n % 5 === 0) {
    return 'Plang'
  }

  else if (n % 3 === 0) {
    return 'Pling'
  }
};

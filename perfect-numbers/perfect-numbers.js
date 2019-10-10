//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (n) => {
  if (n <= 0) {
    throw 'Classification is only possible for natural numbers.'
  }

  else if (n <= 4) {
    return 'deficient'
  }

  else {
    let sum = 0

    for (let i = 1; i < n; i++) {
      if (n % i === 0) {
        sum += i

        if (sum === n) {
          return 'perfect'
        }

        else if (sum > n) {
          return 'abundant'
        }
      }
    }

    return 'deficient'
  }
};

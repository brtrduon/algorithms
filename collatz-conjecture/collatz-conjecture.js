//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
  let numOfStepsToOne = 0

  if (n <= 0) {
    throw new Error('Only positive numbers are allowed')
  }

  else if (n === 1) {
    return numOfStepsToOne
  }

  else {
    while (n > 0) {
      if (n === 1) {
        break
      }

      else if (n % 2 === 0) {
        n = n / 2
        numOfStepsToOne++
      }

      else if (n % 2 !== 0) {
        n = 3 * n + 1
        numOfStepsToOne++
      }
    }

    return numOfStepsToOne
  }
};

//
// This is only a SKELETON file for the 'Accumulate' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const accumulate = (arr, accumulator) => {
  if (arr.length === 0) {
    return arr
  }

  else {
    let ansArr = []

    for (let val of arr) {
      ansArr.push(accumulator(val))
    }

    return ansArr
  }
};

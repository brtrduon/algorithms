//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const flatten = (unflatArr) => {
  let temp = unflatArr.flat(Infinity)

  let flatArr = temp.filter(char => {
    return (parseInt(char) === char)
  })

  return flatArr
}

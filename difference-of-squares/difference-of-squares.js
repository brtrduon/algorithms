//
// This is only a SKELETON file for the 'Difference of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(n) {
    this.n = n
  }

  get sumOfSquares() {
    let sum = 0
    for (let i = this.n; i > 0; i--) {
      sum += i**2
    }
    return sum
  }

  get squareOfSum() {
    let sum = 0
    for (let i = this.n; i > 0; i--) {
      sum += i
    }

    sum **= 2
    return sum
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares
  }
}

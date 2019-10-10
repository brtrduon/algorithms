//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triplet {
  constructor(a, b, c) {
    this.leg1 = a
    this.leg2 = b
    this.hypotenuse = c
  }

  sum() {
    let sum = this.leg1 + this.leg2 + this.hypotenuse

    return sum
  }

  product() {
    let prod = this.leg1 * this.leg2 * this.hypotenuse

    return prod
  }

  isPythagorean() {
    const squareA = this.leg1 ** 2
    const squareB = this.leg2 ** 2
    const squareC = this.hypotenuse ** 2

    if (squareA + squareB === squareC) {
      return true
    }
    
    else {
      return false
    }
  }

  // static where(options) {
  //   let minFactor = null
  //   let maxFactor = null
  //   let sum = null

  //   let newTriplet = null

  //   for (let optionVal in options) {
  //     minFactor, maxFactor, sum = options[optionVal]
  //   }
    
  //   newTriplet = new Triplet(minFactor, maxFactor, sum)
    
  //   console.log(newTriplet)
  // }


  
  // static where() solution taken from somewhere else
  static where ({minFactor=0, maxFactor=0, sum=0}) {
    const trips = []
    let tempTriplet

    for(let a= minFactor; a<maxFactor; a++){
      for(let b=a+1; b<maxFactor; b++){
        for(let c=b+1; c<=maxFactor; c++){
          tempTriplet = new Triplet(a,b,c)
          if (tempTriplet.isPythagorean()) trips.push(tempTriplet)
        }
      }
    }
    if (sum > 0) return trips.filter(tr => tr.sum() === sum)
    return trips
  }
}

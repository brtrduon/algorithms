//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class Triangle {
  constructor(side1, side2, side3) {
    this.l1 = side1
    this.l2 = side2
    this.l3 = side3
  }

  kind() {
    if (this.l1 <= 0 || this.l2 <= 0 || this.l3 <= 0) {
      throw 'test triangles with no size are illegal'
    }

    else if (this.l1 + this.l2 < this.l3 || this.l2 + this.l3 < this.l1) {
      throw 'triangles violating triangle inequality are illegal'
    }

    else if (this.l1 === this.l2 && this.l2 === this.l3) {
      return 'equilateral'
    }

    else if (this.l1 === this.l2 || this.l2 === this.l3 || this.l1 === this.l3) {
      return 'isosceles'
    }

    else if (this.l1 !== this.l2 || this.l2 !== this.l3) {
      return 'scalene'
    }
  }
}

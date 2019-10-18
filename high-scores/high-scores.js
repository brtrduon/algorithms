//
// This is only a SKELETON file for the 'High-Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scoreArr) {
    this.scoreArr = scoreArr
  }

  get scores() {
    return this.scoreArr
  }

  get latest() {
    return this.scoreArr[this.scoreArr.length - 1]
  }

  get personalBest() {
    let highToLowArr = this.scoreArr.sort((a, b) => {
      return b - a
    })

    return highToLowArr[0]
  }

  get personalTopThree() {
    if (this.scoreArr.length < 3) {
      return this.scoreArr.sort((a, b) => {
        return b - a
      })
    }

    else {
      let highToLowArr = this.scoreArr.sort((a, b) => {
        return b - a
      })

      let top3 = highToLowArr.slice(0, 3)

      return top3
    }
  }
}

//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(numStr) {
    this.numStr = numStr
  }

  get digits() {
    let numArr = this.numStr.split('').map(n => {
      return parseInt(n)
    })

    return numArr
  }

  slices(num) {
    let numArr = this.digits
    let temp = []
    let idx = 0

    if (num > numArr.length) {
      throw 'Slice size is too big.'
    }

    else if (num === 1) {
      while(idx < numArr.length) {
        temp.push(numArr.slice(idx, idx + num))
        idx += num
      }

      return temp
    }

    else {
      while (idx < numArr.length) {
        temp.push(numArr.slice(idx, idx + num))
        idx += (num - num + 1)
      
        if (idx === numArr.length - 1) {
          break
        }
      }
  
      let ans = temp.filter(arr => {
        return arr.length === temp[0].length
      })
  
      return ans
    }
  }
}

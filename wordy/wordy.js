//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class ArgumentError extends Error {
  constructor() {
    super(Error)
    throw this
  }
}

class Wordy {
  constructor(str) {
    this.str = str
  }

  answer() {
    let strArr = this.str.split(' ')
    let num1 = 0
    let num2 = 0
    let num3 = 0
    let operand = []
    let ans = 0

    for (let i of strArr) {
      if (!num1 && parseInt(i)) {
        num1 = parseInt(i)
      }

      else if (!num2 && parseInt(i)) {
        num2 = parseInt(i)
      }

      else if (!num3 && parseInt(i)) {
        num3 = parseInt(i)
      }

      else if (i === 'plus' || i === 'minus' || i === 'multiplied' || i === 'divided') {
        operand.push(i)
      }
    }
    
    if (operand[0] === 'plus') {
      ans = num1 + num2

      if (!operand[1]) {
        return ans
      }

      else if (operand[1] === 'plus') {
        return ans += num3
      }

      else if (operand[1] === 'minus') {
        return ans -= num3
      }

      else if (operand[1] === 'multiplied') {
        return ans *= num3
      }
      
      else if (operand[1] === 'divided') {
        return ans /= num3
      }
    }

    else if (operand[0] === 'minus') {
      ans = num1 - num2

      if (!operand[1]) {
        return ans
      }

      else if (operand[1] === 'plus') {
        return ans += num3
      }

      else if (operand[1] === 'minus') {
        return ans -= num3
      }

      else if (operand[1] === 'multiplied') {
        return ans *= num3
      }
      
      else if (operand[1] === 'divided') {
        return ans /= num3
      }
    }

    else if (operand[0] === 'multiplied') {
      ans = num1 * num2

      if (!operand[1]) {
        return ans
      }

      else if (operand[1] === 'plus') {
        return ans += num3
      }

      else if (operand[1] === 'minus') {
        return ans -= num3
      }

      else if (operand[1] === 'multiplied') {
        return ans *= num3
      }
      
      else if (operand[1] === 'divided') {
        return ans /= num3
      }
    }

    else if (operand[0] === 'divided') {
      ans = num1 / num2

      if (!operand[1]) {
        return ans
      }

      else if (operand[1] === 'plus') {
        return ans += num3
      }

      else if (operand[1] === 'minus') {
        return ans -= num3
      }

      else if (operand[1] === 'multiplied') {
        return ans *= num3
      }
      
      else if (operand[1] === 'divided') {
        return ans /= num3
      }
    }
    else {
      new ArgumentError
    }
  }
}

export { Wordy as WordProblem, ArgumentError };
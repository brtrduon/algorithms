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
    let operationStr = this.str.slice(8);
    operationStr = operationStr.replace(/by/g, '');
    operationStr = operationStr.replace(/[?]/g, '');
    operationStr = operationStr.replace(/minus/g, '-');
    operationStr = operationStr.replace(/multiplied/g, '*')
    operationStr = operationStr.replace(/divided/g, '/')
    operationStr = operationStr.replace(/plus/g, '+')

    let newArr = operationStr.split(/'+'-*//g)

    console.log(newArr)

    return eval(operationStr);
  }
}

export { Wordy as WordProblem, ArgumentError };
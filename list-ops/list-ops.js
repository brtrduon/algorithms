//
// This is only a SKELETON file for the 'List - Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(arr = []) {
    this.values = arr;
  }

  append(list2) {
    this.values = this.values.concat(list2.values)

    return this
  }

  concat(listOfLists) {
    let newArr = this.values

    for (let list of listOfLists.values) {
      newArr = newArr.concat(list.values)
    }

    this.values = newArr
    return this
  }

  filter(func) {
    const nList = new List()

    for (let val of this.values) {
      if (func(val)) {
        nList.values.push(val)
      }
    }
    
    return nList
  }
        
  length() {
    let count = 0
    
    for (let _ of this.values) {
      count++
    }

    return count
  }

  map(func) {
    const nList = new List()
    for (let val of this.values) {
      nList.values.push(func(val))
    }

    return nList
  }

  foldl(func, num) {
    for (let val of this.values) {
      num = func(num, val)
    }
    return num
  }

  foldr(func, num) {
    for (let i = this.values.length - 1; i >= 0; i--) {
      num = func(num, this.values[i])
    }

    return num
  }

  reverse() {
    if (!this) {
      return this
    }
    
    else {
      const arrLength = this.values.length - 1
      let newArr = []

      for (let i = arrLength; i >= 0; i--) {
        newArr.push(this.values[i])
      }

      this.values = newArr
      return this
    }
  }
}

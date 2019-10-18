//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class PhoneNumber {
  constructor(phoneStr) {
    this.phoneStr = phoneStr
  }

  number() {
    let numRegex = /[0-9]/
    let flatPhoneStr = ''

    for (let num of this.phoneStr) {
      if (num.match(numRegex)) {
        flatPhoneStr += num
      }
    }

    if (flatPhoneStr.length === 10) {
      if (flatPhoneStr[0] === '0' || flatPhoneStr[0] === '1' || flatPhoneStr[3] === '0' || flatPhoneStr[3] === '1') {
        return null
      }
      
      return flatPhoneStr
    }

    else if (flatPhoneStr.length === 11) {
      if (flatPhoneStr[0] === '1') {
        if (flatPhoneStr[1] === '0' || flatPhoneStr[1] ==='1' || flatPhoneStr[4] === '0' || flatPhoneStr[4] === '1') {
          return null
        }
        
        return flatPhoneStr.slice(1, 11)
      }

      return null
    }

    else {
      return null
    }
  }
}

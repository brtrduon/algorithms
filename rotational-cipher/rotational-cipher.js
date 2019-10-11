//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class RotationalCipher {
  static rotate(str, n) {
    if (n === 0 || n === 26) {
      return str
    }

    else {
      let newStr = ''

      // for future ref, 97 is charCode for a, 122 is charCode for z, 65 is charCode for A, 90 is charCode for Z
      for (let char of str) {
        let charCode = str.charCodeAt(str.indexOf(char))

        if (char.match(/[a-z]/)) {
          if (charCode + n > 122) {
            newStr += String.fromCharCode(96 + (Math.abs(charCode + n - 122)))
          }

          else {
            newStr += String.fromCharCode(charCode + n)
          }
        }

        else if (char.match(/[A-Z]/)) {
          if (charCode + n > 90) {
            newStr += String.fromCharCode(64 + (Math.abs(charCode + n - 90)))
          }

          else {
            newStr += String.fromCharCode(charCode + n)
          }
        }

        else {
          newStr += char
        }
      }

      return newStr
    }
  }
}

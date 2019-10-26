//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (str) => {
  let strBuilder = [];
  const lastI = str.length;

  if (str.length === 0) {
    return ''
  }

  else {
    for (let i = 0, runner = 1; i < lastI; i++) {
      if (str[i] === str[i + 1]) {
        runner++
      } else {
        if (runner === 1) {
          strBuilder.push(str[i]);
        } else {
          strBuilder.push(runner + str[i]);
          runner = 1
        }
      }
    }
    
    return strBuilder.join('');
  }
};

export const decode = (str) => {
  const strLength = str.length,
    nums = str.match(/[0-9]+/g),
    numRegex = /[0-9]/;

  let strBuilder = [];

  if (str.length === 0)
    return '';
  
  for(let i = 0, numI = 0; i < strLength; ++i) {
    if(str[i].match(numRegex)) {
      i += nums[numI].length;
      strBuilder.push(str[i].repeat(parseInt(nums[numI])))
      ++numI;
    } else {
      strBuilder.push(str[i])
    }
  }

  return strBuilder.join('')
};

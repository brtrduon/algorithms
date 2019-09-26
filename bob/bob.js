/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  message = message.trim();
  const alphaRegex = /[a-z]/i
  const mLen = message.length;
  const lastChar = message[mLen - 1];

  if(message === "") {
    return 'Fine. Be that way!'
  }

  else if (message === message.toUpperCase() && message.match(alphaRegex)) {
    if(lastChar === "?") return ('Calm down, I know what I\'m doing!')

    return 'Whoa, chill out!'
  }

  else if (lastChar === '?') {
    return 'Sure.'
  }

  else {
    return 'Whatever.'
  }
};

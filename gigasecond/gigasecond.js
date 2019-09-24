//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var moment = require('moment');


export const gigasecond = (date) => {
  let res = moment.utc(date).add(1e9, 's').toDate()

  return res
};

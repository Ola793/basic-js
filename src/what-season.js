function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  } else if (!date.getMonth) {
    throw Error('Invalid date!');
  } 

  try {
    date.getTime();
  } catch { 
    throw Error('Invalid date!');
  }
  
  let month = date.getMonth();
  return month >= 0 && month <2 ? 'winter' : month >=2 && month <5 ? 'spring' : month >=5 && month <8 ? 'summer' : month >=8 && month <11 ? 'autumn' : 'winter';

}

module.exports = {
  getSeason
};

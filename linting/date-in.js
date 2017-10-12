exports.dateIn = (count=0, unit='days') => {// <label id="code.quote"/>
  const now = new Date();
  const dayInMs = 1000 * 60 * 60 * 24;
  const offset = 0;

  if (/^days?$/.test(unit)) {
    offset = count * dayInMs;// <label id="code.const1"/>
  } else if (/^weeks?$/.test(unit)) {
    offset = count * dayInMs * 7;// <label id="code.const2"/>
  }

  const targetDate = new Date(now.getTime() + offset);
  return targetDate.toISOString().slice(0, 10)
};

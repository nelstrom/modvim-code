exports.dateIn = function(count, unit) {
  var now = new Date();
  var dayInMs = 1000 * 60 * 60 * 24;
  var offset = 0;
  count = count || 0;
  unit = unit || "days";

  if (/^days?$/.test(unit)) {
    offset = count * dayInMs;
  } else if (/^weeks?$/.test(unit)) {
    offset = count * dayInMs * 7;
  }

  var targetDate = new Date(now.getTime() + offset);
  return targetDate.toISOString().slice(0, 10)
};

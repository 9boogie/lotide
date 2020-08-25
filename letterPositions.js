const letterPositions = function (sentence) {
  const letters = [...sentence];
  const results = {};
  //logic to update results here
  for (let i = 0; i < letters.length; i++) {
    let location = [i];
    if (letters[i] === ' ') {
      continue;
    } else if (results[letters[i]]) {
      results[letters[i]].push(i);
    } else {
      results[letters[i]] =[i];
    }
  }
  return results;
};

module.exports = letterPositions;
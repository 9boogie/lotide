const findKeyByValue = function (object, value) {
  const keys = Object.keys(object);
  let result = '';
  for (let key of keys) {
    if (object[key] === value) {
      result = key;
      return result;
    }
  } return undefined;
};

module.exports = findKeyByValue;
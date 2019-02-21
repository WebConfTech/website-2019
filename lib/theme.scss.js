const theme = require('./theme');

const flatternDictionary = (dictionary, union = '.', prefix = '') => {
  let flattern = {};
  const namePrefix = prefix ? `${prefix}${union}` : '';
  Object.keys(dictionary).forEach(key => {
    const name = `${namePrefix}${key}`;
    const value = dictionary[key];
    if (typeof value === 'object') {
      flattern = Object.assign(flattern, flatternDictionary(value, union, name));
    } else {
      flattern[name] = value;
    }
  });

  return flattern;
};

const parsed = flatternDictionary(theme, '-', '$theme');
const variables = Object.keys(parsed)
  .map(name => `${name}: ${parsed[name]};`)
  .join('\n');

module.exports = variables;

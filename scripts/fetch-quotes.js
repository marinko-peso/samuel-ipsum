'use strict';

const { config } = require('../package.json');
const r = require('got');

const reIpsum = /^\s*ipsum\[\d+\]\s*=\s*['"](.*?)['"]\s*;\s*$/;
const reSlip = /^\s*slips\[\d+\]\s*=\s*['"](.*?)['"]\s*;\s*$/;

const exec = (str, regex) => str.match(regex) || [];
const isEmpty = (arr = []) => arr.length <= 0;
const jsonify = obj => JSON.stringify(obj, null, 2);
const pMap = (obj, cb) => Promise.all(Object.keys(obj).map(key => cb(obj[key], key)));

pMap(config.quotes, async (url, category) => {
  const data = validate(await fetchQuotes(url));
  return { category, data };
})
  .then(results => results.reduce((acc, { category, data }) => {
    return Object.assign(acc, { [category]: data });
  }, {}))
  .then(data => console.log(jsonify(data)))
  .catch(err => { throw err; });

async function fetchQuotes(url) {
  const { body: code } = await r.get(url);
  const lines = code.split(/\r?\n/);
  const data = { ipsums: [], slips: [] };
  return lines.reduce((acc, line) => {
    const [, ipsum] = exec(line, reIpsum);
    if (ipsum) {
      acc.ipsums.push(ipsum);
      return acc;
    }
    const [, slip] = exec(line, reSlip);
    if (slip) {
      acc.slips.push(slip);
    }
    return acc;
  }, data);
}

function validate(data = {}) {
  if (isEmpty(data.ipsums) || isEmpty(data.slips)) {
    throw new Error('Failed to grab `ipsums` and/or `slips` from remote source');
  }
  return data;
}

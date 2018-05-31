'use strict';

const r = require('got');
const quotesUrl = 'http://slipsum.com/js/slipsum.js';

const reIpsum = /^\s*ipsum\[\d+\]\s*=\s*['"](.*?)['"]\s*;\s*$/;
const reSlip = /^\s*slips\[\d+\]\s*=\s*['"](.*?)['"]\s*;\s*$/;

const exec = (str, regex) => str.match(regex) || [];
const jsonify = obj => JSON.stringify(obj, null, 2);

fetchQuotes(quotesUrl)
  .then(data => console.log(jsonify(data)))
  .catch(err => { throw err; });

async function fetchQuotes(url) {
  const { body: code } = await r.get(quotesUrl);
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

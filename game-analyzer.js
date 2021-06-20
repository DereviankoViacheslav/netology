#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).argv;
const logFileName = argv.logFileName || 'logs';
const file = path.join(__dirname, `${logFileName}.logs`);

fs.readFile(file, 'utf-8', (err, data) => {
  if (err) throw new Error(err);
  const result = data.match(/res=\d{1}/g);
  console.log('Количество партий:', result ? result.length : 0);
  if (result) {
    const parties = result.reduce(
      (acc, curr) => {
        const num = parseInt(curr.match(/\d/));
        return {
          win: num ? ++acc.win : acc.win,
          loss: !num ? ++acc.loss : acc.loss
        };
      },
      { win: 0, loss: 0 }
    );
    console.log(
      'Количество выигранных и проигранных партий',
      parties.win,
      '/',
      parties.loss
    );
    const countParties = parties.win + parties.loss;
    const percentWin = ((parties.win / countParties) * 100).toFixed(2);
    const percentLoss = 100 - percentWin;
    console.log(
      'Процентное соотношение выигранных партий',
      +percentWin,
      '% /',
      percentLoss,
      '%'
    );
  }
});

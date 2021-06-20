#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const readline = require('readline');
const moment = require('moment');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).argv;
const logFileName = argv.logFileName || 'logs';
const file = path.join(__dirname, `${logFileName}.logs`);
const input = readline.createInterface(process.stdin);

const logger = (res) => {
  const data = moment().format('DD.MM.YYYY HH:mm:ss');
  fs.appendFile(file, `${data} res=${+res}\n`, (err) => {
    if (err) throw new Error(err);
  });
};

console.log('Игра загадывает случайное число: 1 или 2. Попробуйбе угадать!');

input.on('line', (str) => {
  if (str === 'exit') {
    console.log('Пока!');
    input.close();
    return;
  }
  if (str != 2 && str != 1) {
    console.log('Введите число 1 или 2');
    return;
  }
  const randomNumber = Math.floor(Math.random() * 2) + 1;
  const result = str == randomNumber ? 'выиграли' : 'проиграли';
  console.log(`Вы ${result}, было загадано число `, randomNumber);
  logger(str == randomNumber);
});

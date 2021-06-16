#!/usr/bin/env node
const moment = require('moment');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

yargs(hideBin(process.argv))
  .command(
    'current [option]',
    'Показать текущее время и дату',
    () => {},
    (argv) => {
      let result = '';
      if (argv.d) result += `${moment().format('DD')} `;
      if (argv.m) result += `${moment().format('MM')} `;
      if (argv.y) result += `${moment().format('YYYY')}`;
      if (result) {
        console.log(result);
        return;
      }
      console.log(moment().format('YYYY MM DD'));
    }
  )
  .command(
    'add [option]',
    'Показать дату в будущем',
    () => {},
    (argv) => {
      let date = moment();
      if (argv.y) date.add(argv.y, 'years');
      if (argv.m) date.add(argv.m, 'months');
      if (argv.d) date.add(argv.d, 'days');
      console.log(date.format());
    }
  )
  .command(
    'sub [option]',
    'Показать дату в прошлом',
    () => {},
    (argv) => {
      let date = moment();
      if (argv.y) date.subtract(argv.y, 'years');
      if (argv.m) date.subtract(argv.m, 'months');
      if (argv.d) date.subtract(argv.d, 'days');
      console.log(date.format());
    }
  )
  .option('year', {
    alias: 'y',
    description: 'Показать год / количество лет'
  })
  .option('month', {
    alias: 'm',
    description: 'Показать месяц / количество месяцев'
  })
  .option('date', {
    alias: 'd',
    description: 'Показать дату / количество дней'
  }).argv;

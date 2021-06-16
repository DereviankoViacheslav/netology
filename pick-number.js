#!/usr/bin/env node
const readline = require('readline');

const input = readline.createInterface(process.stdin);

const randomNumber = Math.floor(Math.random() * 100) + 1;

input.on('line', (str) => {
  if (isNaN(str)) {
    console.log('Введите номер');
    return;
  }
  if (str > randomNumber) console.log('Меньше');
  if (str < randomNumber) console.log('Больше');
  if (str == randomNumber) {
    console.log('Отгадано число', randomNumber);
    input.close();
  }
});

console.log('Загадано число в диапазоне от 0 до 100');

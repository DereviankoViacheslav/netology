#!/usr/bin/env node
const http = require('http');
const readline = require('readline');
const input = readline.createInterface(process.stdin);

const WEATHERSTACK_API_ACCESS_KEY = process.env.WEATHERSTACK_API_ACCESS_KEY;
const url = `http://api.weatherstack.com/current?access_key=${WEATHERSTACK_API_ACCESS_KEY}`;

console.log('Введите название города на английском (для выхода "exit"):');

input.on('line', (str) => {
  if (str === 'exit') {
    console.log('Пока!');
    input.close();
    return;
  }
  const queryStr = url + '&query=' + str;

  const result = http
    .get(queryStr, (res) => {
      if (res.statusCode !== 200) {
        console.log('Status Code:', res.statusCode);
        return;
      }
      let rawData = '';
      res.on('data', (chank) => (rawData += chank));
      res.on('end', () => {
        let parsedData = JSON.parse(rawData);
        console.log('parsedData', parsedData);
      });
    })
    .on('error', (error) => console.log('Got error:', error));
});

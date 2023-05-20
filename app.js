import { createRequire } from "module";
const require = createRequire(import.meta.url);


const logger = require('morgan')
const express = require('express');
const fetch = require('node-fetch')
import { HeaderGenerator } from "header-generator";
const randomUseragent = require('random-useragent');

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));

const userRandom = randomUseragent.getRandomData(); // gets a random user agent string

const head = new HeaderGenerator()
const newHeaders = head.getHeaders();


app.get('/', (req, res) => {
  // Получение данных о пользователе
  const { headers, query, params, body, ip, cookies } = req;
  const port = req.connection.remotePort
  const ips = req.ips

  console.log(req);
  // Отправка данных о пользователе в ответ
  res.json({ headers, query, params, body, ip, cookies, port, ips });
});

// Запуск сервера на порту 3000
app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// const carsRoter = require('./carsRouter')
import carsRoter from './carsRouter.js'

const logger = require('morgan')
const express = require('express');

const requestIp = require('request-ip');

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(requestIp.mw());

app.get('/head', (req, res) => {
  // Получение данных о пользователе
  const { headers, query, params, body, cookie } = req;
  const ip = req.clientIp; // IP-адрес клиента
  const port = req.connection.remotePort
  const ips = req.ips

  console.log(`Request from ip: ${ip}`);
  // Отправка данных о пользователе в ответ
  res.json({ headers, query, params, body, ip, cookie, port, ips });
});

app.use('/cars', carsRoter)


// Запуск сервера на порту 3000
app.listen(3000, () => {
  console.log('Сервер запущен на порту 3002');
});

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fetch = require('node-fetch');

// /all_cars?park_id=3

// import getCarsData from './carsData.js'

const router = require('express').Router();

router.get('/', async (req, res) => {

  const goToServerCustomer = await fetch('http://89.108.99.163/gps/gpsapi.php/all_cars?park_id=1')
  const result = await goToServerCustomer.json()
  console.log("▶ ⇛ result:", result);


  res.json(result).end()
});

export default router;
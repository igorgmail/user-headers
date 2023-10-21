// /all_cars?park_id=3
import carsData from './carsData.js'
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const router = require('express').Router();

router.get('/', (req, res) => {
  res.json(carsData)
});

export default router;
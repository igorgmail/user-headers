// /all_cars?park_id=3
import getCarsData from './carsData.js'
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const router = require('express').Router();

router.get('/', (req, res) => {
  res.json(getCarsData()).end()
});

export default router;
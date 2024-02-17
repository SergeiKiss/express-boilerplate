import express from 'express';
import {
  exampleController1,
  exampleController2,
} from '../controllers/example-controllers.js';

const router = express.Router();

router.get('/', exampleController1);
router.all('/', exampleController2);

export default router;

import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import routes from './routes/index.js';

const {
  PORT,
  ORIGIN,
} = process.env;
const app = express();

const logger = morgan('combined');
app.use(logger);
app.use(express.json());

// CORS
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', ORIGIN);
  res.set('Access-Control-Allow-Methods', '*');
  res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.set('Access-Control-Allow-Credentials', true);
  next();
});

// Connecting routes is mandatory at the very end
app.use(routes);

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Listening port ${PORT}`);
  } else {
    console.error(err);
    process.exit(1);
  }
});

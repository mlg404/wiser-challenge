import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import routes from './routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

mongoose.connect(process.env.MONGO_URL || '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(process.env.PORT, () => console.log('server started'));

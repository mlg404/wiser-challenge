import { Router } from 'express';
import shortenerRouter from './shortener.routes';

const routes = Router();

routes.get('/', (req, res) => {
  res.json({ ok: true });
});

routes.use('/', shortenerRouter);

export default routes;

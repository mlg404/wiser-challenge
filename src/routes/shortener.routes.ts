import { Router } from 'express';
import ShortenerController from '../modules/shortener/shortener.controller';

const shortenerRouter = Router();

shortenerRouter.post('/', ShortenerController.createShortener);
shortenerRouter.get('/:id', ShortenerController.getShortener);

export default shortenerRouter;

import { Request, Response } from 'express';

import shortenerService from './shorterner.service';

class ShortenerController {
  async createShortener(req: Request, res: Response): Promise<Response> {
    try {
      const shortener = await shortenerService.createShortener(req.body);
      return res.status(201).json(shortener);
    } catch (error) {
      return res.status(500).json({ error: 'Error to create shortener' });
    }
  }

  async getShortener(req: Request, res: Response): Promise<void | Response> {
    try {
      const { id } = req.params;
      const shortener = await shortenerService.getShortener(id);
      return res.redirect(301, shortener);
    } catch (error) {
      return res.status(404).json();
    }
  }
}

export default new ShortenerController();

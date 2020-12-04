import { add, isAfter } from 'date-fns';

import Shortener from './schemas/shortener.schema';
import { randomSequence } from '../../shared/utils';
import createShortenerDto from './dto/createShortener.dto';
import shortenerDto from './dto/shortener.dto';

class ShortenerService {
  async generateName(): Promise<string> {
    const nameData = { name: '', nameExists: true };

    do {
      const randomName = randomSequence();

      const nameExists = await Shortener.findOne({ name: randomName });

      if (!nameExists) {
        nameData.name = randomName;
        nameData.nameExists = false;
      }
    } while (nameData.nameExists);

    return nameData.name;
  }

  async createShortener({
    url,
  }: createShortenerDto): Promise<{ newUrl: string }> {
    try {
      const expiresAt = add(new Date(), {
        days: 7,
      });

      const name = await this.generateName();

      const data = {
        url,
        expiresAt,
        name,
      };

      await Shortener.create(data);

      const newUrl = {
        newUrl: `${process.env.API_URL}/${name}`,
      };

      return newUrl;
    } catch (error) {
      throw new Error('Error to create shortener');
    }
  }

  async getShortener(id: string): Promise<string> {
    try {
      const shortener = await Shortener.findOne({ name: id });

      if (!shortener) {
        throw new Error('No shortener found');
      }
      const { expiresAt, url } = shortener.toJSON() as shortenerDto;

      if (isAfter(expiresAt, new Date('now'))) {
        throw new Error('Shortener expired');
      }

      return url;
    } catch (error) {
      throw new Error('Error to get shortener');
    }
  }
}

export default new ShortenerService();

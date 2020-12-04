import cryptoRandomString from 'crypto-random-string';

export const randomBetween5And10 = (): number => {
  const min = 5;
  const max = 10;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomSequence = (): string => {
  const length = randomBetween5And10();
  return cryptoRandomString({ length, type: 'alphanumeric' });
};

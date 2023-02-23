import jwt from 'jsonwebtoken';

export const generateToken = (userId) =>
  jwt.sign({ userId }, process.env.ACCES_TOKEN, { expiresIn: '10d' });

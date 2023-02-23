import { prisma } from '../prisma.js';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import { userFields } from '../utils/user.utils.js';
export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.ACCES_TOKEN);
    const userFound = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: userFields,
    });
    if (userFound) {
      req.user = userFound;
      next();
    } else {
      res.status(401);
      throw new Error('Не авторизован');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Токен не существует');
  }
});

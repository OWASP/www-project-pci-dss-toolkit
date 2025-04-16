import { Request, Response, NextFunction } from 'express';
import logger from './auditLogger';

export function logMiddleware(req: Request, res: Response, next: NextFunction) {
  const { method, url } = req;
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  logger.info(`Incoming Request: ${method} ${url} - IP: ${ip}`);

  res.on('finish', () => {
    logger.info(`Response Status: ${res.statusCode} for ${method} ${url}`);
  });

  next();
}

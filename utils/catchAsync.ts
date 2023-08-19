import { Request, Response, NextFunction } from 'express';

type catchAsyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>; 

const catchAsync = (fn: catchAsyncFunction) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  fn(req, res, next).catch((err) => next(err));
};

export default catchAsync;
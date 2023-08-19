import express from 'express';
import passport from 'passport'
import { getPagination, getPagingData } from '../utils/pagination'
import Request from "../models/Request";

const router = express()

router.get('/requests',  passport.authenticate('jwt', { session: false }), async (req, res) => {
  const { page, size } = req.query;

  const { limit, offset } = getPagination(Number(page), Number(size));

  const data = await Request.findAndCountAll({ limit, offset})

  const response = getPagingData(data, Number(page), limit);

  res.json(response);
})

export default router


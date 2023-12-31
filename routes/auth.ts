import express from 'express';
import jwt from 'jsonwebtoken'
import passport from 'passport'
import { Admin } from '../models'
import { isValidPassword } from '../utils/isValidPassword'

const router = express()

router.post('/login',  async (req, res) => {
  const {email, password} = req.body;

  const user = await Admin.scope('login').findOne({where: {email}});

  if (!user) {
    return res.status(401).json({ msg: 'No such user found'});
  }

  if (!isValidPassword(user.password, password)) {
    return res.status(401).json({ msg: 'Incorrect password'});
  }

  let payload = { id: user.id };

  let token = jwt.sign(payload, 'MY_SECRET');

  const admin = await Admin.findByPk(user.id)
;
  res.json({ msg: 'OK', user: admin, token: token });
});


router.get('/validate',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {

  const user = await req.user;


  res.status(200).json({
    msg: 'OK',
    user
  })
});


export default router

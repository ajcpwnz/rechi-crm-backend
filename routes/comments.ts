import express from 'express'
import { Admin, Comment } from '../models'
import { AdminAttributes } from '../models/Admin'
import passport from 'passport'

const router = express()

router.post('/new',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { requestId, text } = req.body
    const user = await req.user as AdminAttributes

    const comment = await Comment.create({ requestId, text, authorId: user!.id })

    const data = await Comment.findOne({ where: {id: comment.id}, include: [Admin] })

    res.status(200).json({
      msg: 'OK',
      comment: data
    })
  });

router.get('/by-request/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const comments = await Comment.findAll({ where: { requestId: req.params.id }, include: [Admin] });

  res.json({comments})
});

export default router

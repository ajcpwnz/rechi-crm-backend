import express from 'express';
import passport from 'passport'
import { getPagination, getPagingData } from '../utils/pagination'
import { mapFormFieldsToInternalFields } from '../utils/fieldMapping'
import FormSubmission from '../models/FormSubmission'

const router = express()

router.post('/create/:type', async (req, res) => {
  const transformedFields = mapFormFieldsToInternalFields(req.params.type, req.body.formFields);

    await FormSubmission.create({
      fields: JSON.stringify(transformedFields),
      type: req.params.type,
    });

    res.status(200).send();
  });

router.get('/list/:type', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const { type } = req.params;
  const { page, size } = req.query;
  const { limit, offset } = getPagination(Number(page), Number(size));

  const data = await FormSubmission.findAndCountAll({where: {type}, limit, offset})
  const response = getPagingData(data, Number(page), limit);

  res.json(response);
})

export default router


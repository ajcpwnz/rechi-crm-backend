import express from 'express';

const router = express()

router.post('/request', (req, res) => {

    res.status(200).json({
      success: 'ok',
      data: req.body.formFields
    })
  });


router.post('/donation', (req, res) => {



    console.warn(req.body.formFields, ')))')

    res.status(200).json({
      success: 'ok',
      data: req.body.formFields
    })
  });

export default router

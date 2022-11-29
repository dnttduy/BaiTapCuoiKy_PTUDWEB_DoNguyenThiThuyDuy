const express = require('express');
const router = express.Router();
const DeadLine = require('../models/DeadLines')


router.get('/', async (req, res) => {
  const deadlines = await DeadLine.find();
  res.json(deadlines)
})

router.post('/new', async (req, res) => {
  
  const newDeadLine = new DeadLine(
    req.body
  );
  const savedDeadLine = await newDeadLine.save() 
  res.json(savedDeadLine) 
});

router.get('/get/:id', async (req, res) => {
  const deadline = await DeadLine.findById({ _id : req.params.id })
  res.json(deadline)
})

router.put('/update/:id', async (req, res) => {
  const tUpdate = await DeadLine.updateOne(
    { _id: req.params.id }, 
    
    { $set: req.body }
  )
  res.json(tUpdate)
})


router.delete('/delete/:id', async (req, res) => {
  const tDelete = await DeadLine.findByIdAndDelete({ _id : req.params.id })
  res.json(tDelete)
})



module.exports = router
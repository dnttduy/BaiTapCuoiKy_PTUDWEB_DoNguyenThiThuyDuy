const express = require('express');
const router = express.Router();
const Todo = require('../models/Todos')


router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos)
})

router.post('/new', async (req, res) => {
  const newTodo = new Todo(
    req.body 
  ); 
  const savedTodo = await newTodo.save() 
  res.json(savedTodo) 
});


router.get('/get/:id', async (req, res) => {
  const t = await Todo.findById({ _id : req.params.id })
  res.json(t)
})

router.get('/get-todos/:deadlineId', async (req, res) => {
  const t = await Todo.find({ deadlineId: req.params.deadlineId })
  res.json(t)
})

router.put('/update/:id', async (req, res) => {
  const tUpdate = await Todo.updateOne(
    { _id: req.params.id }, 
    
    { $set: req.body }
  )
  res.json(tUpdate)
})

router.delete('/delete/:id', async (req, res) => {
  const tDelete = await Todo.findByIdAndDelete({ _id : req.params.id })
  res.json(tDelete)
})

module.exports = router
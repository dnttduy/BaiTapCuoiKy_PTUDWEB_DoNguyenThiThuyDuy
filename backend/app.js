const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE"); 
  res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// Kết nối với mongodb
const uri = "mongodb://127.0.0.1:27017/todolist";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB connected")
})
.catch(err => console.log(err))
app.use(bodyParser.json())

//  định nghĩa 2 Api
const TodosRoute = require('./routes/Todos');
const DeadLinesRoute = require('./routes/DeadLines');

  app.use('/todos', TodosRoute)
  app.use('/deadlines', DeadLinesRoute)

//  tạo cổng 3000 cho app
app.listen(3000, () => {
  console.log("Listening at port 3000")
})

const mongoose = require('mongoose')


const DeadLinesSchema = new mongoose.Schema(
  {
    deadlineDate: String,
  }
)

module.exports = mongoose.model('deadline', DeadLinesSchema)
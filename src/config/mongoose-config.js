const mongoose = require('mongoose')
const ProjectModel = require('../model/Project')

const ProjetcSchema = new mongoose.Schema(ProjectModel)
const Project = mongoose.model('Project', ProjetcSchema)

const connect = () => mongoose.connect('mongodb://localhost/adminbroapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = {
  Project,
  connect
}
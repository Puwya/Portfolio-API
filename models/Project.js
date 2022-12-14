const { Schema, model } = require('mongoose');

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  video_path: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  creation: {
    type: String,
    required: true,
  },
  code_link: {
    type: String,
    required: false,
  },
  test_link: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: true,
  },
});

const Project = model('Project', ProjectSchema, 'projects');

module.exports = Project;

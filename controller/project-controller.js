const Project = require('../domain/project');
const { v4: uuidv4} = require('uuid');
const { validationResult } = require("express-validator");


class ProjectController {

  constructor(projectRepository) {
    this.projectRepository = projectRepository;
  }

  getAll(req, res){
      const list = this.projectRepository.findAll();
      res.json(list);

  }

  get(req, res) {
    const projectId = req.params.id;
    const project = this.projectRepository.findById(projectId);
    if (!project) {
      res.status(404).json({ error: 'Project not found' });
    } else {
      res.json(project);
    }
  }

  put(req, res){
    const projectId = req.params.id;
    const { name, employees } = req.body;
    console.log(req.body)
    const project = this.projectRepository.findById(projectId);
    if (!project) {
      res.status(404).json({ error: 'Project not found' });
    } else {
      const newProject = new Project(projectId, name, employees);
      this.projectRepository.replace(newProject)
      console.log(newProject)
      res.json(newProject);
    }

  }

  post(req, res) {

    try {
      const errors = validationResult(req);

      // if there is error then return Error
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }

      const { name, employees } = req.body;
      const newProject = new Project(uuidv4(), name, employees);
      this.projectRepository.save(newProject)
      res.status(201).json(newProject);
    } catch (err) {
      res.status(500).json({})
    }




  }

}

module.exports = ProjectController

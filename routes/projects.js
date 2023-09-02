const express = require("express");
const router = express.Router();
const Employee = require('../domain/employee');
const { v4: uuidv4 } = require('uuid');
const InMemoryProjectRepository = require('../infrastructure/in-memory-project-repository');
const ProjectController = require('../controller/project-controller');

const projectRouter = (projectRepository) => {

  const repo = new InMemoryProjectRepository();
  const controller = new ProjectController(repo)

  //obligé de bind car si on ne bind pas c'est comme si on prend getAll sans son context et le router doit l'utiliser.
  //ou alors call la méthode via arrow function, (req, res) => controller.getAll(req,res)
  router.get("/",  controller.getAll.bind(controller));
  return router

}


module.exports = projectRouter

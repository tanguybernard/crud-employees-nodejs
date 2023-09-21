const express = require("express");
const router = express.Router();
const InMemoryProjectRepository = require('../infrastructure/in-memory-project-repository');
const ProjectController = require('../controller/project-controller');
const projectDataValidateChainableAPI = require('../controller/project-validations');
const projectsData = require('../data/projects');

const projectRouter = () => {

  const repo = new InMemoryProjectRepository();
  repo.load(projectsData);
  const controller = new ProjectController(repo)

  //obligé de bind car si on ne bind pas c'est comme si on prend getAll sans son context et le router doit l'utiliser.
  //ou alors call la méthode via arrow function, (req, res) => controller.getAll(req,res)
  router.get("/",  controller.getAll.bind(controller));
  router.post("/",  projectDataValidateChainableAPI, controller.post.bind(controller));
  router.put("/:id",  controller.put.bind(controller));
  router.get("/:id",  controller.get.bind(controller));

  return router

}


module.exports = projectRouter

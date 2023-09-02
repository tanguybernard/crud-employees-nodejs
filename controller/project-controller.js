class ProjectController {

  constructor(projectRepository) {
    this.projectRepository = projectRepository;
  }

  getAll(req, res){

    console.log(this)


    console.log("GET ALL PROEJCTS")
    console.log(this.projectRepository)



      const list = this.projectRepository.findAll();
      res.json(list);

  }

}

module.exports = ProjectController

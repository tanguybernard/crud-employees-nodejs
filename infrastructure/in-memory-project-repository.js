const Project = require('../domain/project');


class InMemoryProjectRepository {

  projectList = new Map();

  constructor() {
  }

  save(project){
    this.projectList.set(project.id, project);
  }

  findAll(){
    const list = [];

    if(!this.projectList){
      return [];
    }

    this.projectList.forEach((project)=> {
      list.push(new Project(project.id, project.name, project.employees))
    })
    return list;
  }

  findById(id){

    if(this.projectList.has(id)){
      return this.projectList.get(id)
    }
    else {
      return null;
    }

  }

  replace(project){
    this.projectList.set(project.id, project)
  }

  load(projectList) {

    projectList.forEach((project) => {
      this.projectList.set(project.id, new Project(project.id, project.name, project.employees))
    })

  }
}

module.exports = InMemoryProjectRepository;

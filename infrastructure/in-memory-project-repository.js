const Employee = require('../domain/employee') ;
const Project = require('../domain/project');


class InMemoryProjectRepository {

  projectList = new Map();

  constructor() {
    this.projectList.set("1", new Project(1, []))
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
      list.push(new Project(project.id, project.listEmployee))
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

  update(employee){
    this.projectList.set(employee.id, employee)
  }

  load(projectList) {

    projectList.forEach((value) => {
      this.projectList.set(value.id, new Employee(value.id, value.firstName, value.lastName, value.department))

    })

  }
}

module.exports = InMemoryProjectRepository;

class Project {

  id
  name
  employeeIds = []

  constructor(id, name, employeeIds) {
    this.id = id;
    this.name = name
    this.listEmployee = employeeIds
  }


  setEmployee(employeeIds){
    this.employeeIds = employeeIds
  }

  addEmployee(employeeId) {
    this.employeeIds.push(employeeId)
  }

}

module.exports = Project;

class Project {

  id
  listEmployee = []

  constructor(id, listEmployee) {
    this.id = id;
    this.listEmployee = listEmployee
  }


  setEmployee(employeeIds){
    this.listEmployee = employeeIds
  }

  addEmployee(employeeId) {
    this.listEmployee.push(employeeId)
  }

}

module.exports = Project;

class Project {

  id
  name
  employees = []

  constructor(id, name, employees) {
    this.id = id;
    this.name = name
    this.employees = employees
  }


  setEmployee(employees){
    this.employees = employees
  }

  addEmployee(employeeId) {
    this.employees.push(employeeId)
  }

}

module.exports = Project;

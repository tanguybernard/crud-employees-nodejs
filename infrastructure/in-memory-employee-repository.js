const Employee = require('../domain/employee') ;


class InMemoryEmployeeRepository {

  employeeList = new Map();

  save(employee){
    this.employeeList.set(employee.id, employee);
  }

  findAll(){
    const list = [];
    this.employeeList.forEach((value)=> {
      list.push(new Employee(value.id, value.firstName, value.lastName, value.department))
    })
    return list;
  }


  load(employeeList) {

    employeeList.forEach((value) => {
      this.employeeList.set(value.id, new Employee(value.id, value.firstName, value.lastName, value.department))

    })

  }
}

module.exports = InMemoryEmployeeRepository;
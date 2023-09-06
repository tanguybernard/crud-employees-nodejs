const express = require("express");
const router = express.Router();
const Employee = require('../domain/employee');
const { v4: uuidv4 } = require('uuid');

const employeeRouter = (employeeRepository) => {

  router.get("/", (req, res) => {

    const listEmployee = employeeRepository.findAll();

    res.json(listEmployee);
  });

  router.post("/", (req, res) => {

    console.log("POST")


    const { firstName, lastName, department } = req.body;

    console.log(firstName)
    console.log(department)



    const id = uuidv4();
    const employee = new Employee(
      id,
      firstName,
      lastName,
      department
    );

    employeeRepository.save(employee);

    res.status(201).location('/api/employees/' + id).json();

  });



  router.get("/:id", (req, res) => {
    const { id } = req.params;


    const employee = employeeRepository.findById(id)

    if(employee){
      res.status(200).json(employee)
    }
    else{
      res.status(404).send();
    }


  });

  //save updated employee
  router.put('/:id', function(req, res) {

    const { id } = req.params;
    const { firstName, lastName, department } = req.body;


    employeeRepository.update(new Employee(id, firstName, lastName, department))
  });

  router.delete('/:id', function(req, res) {
    const { id } = req.params;
    employeeRepository.delete(id)
    res.status(204).send()

  })

  return router;

}



module.exports = employeeRouter;

const express = require("express");
const router = express.Router();
const Employee = require('../domain/employee');
const { v4: uuidv4 } = require('uuid');

const employeeController = (employeeRepository) => {

  console.log("controller")

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


    console.log()
    res.status(201).location('/api/employees/' + id).json();

  });



  router.put("/:id", (req, res) => {
    const { name, email, mobile, city } = req.body;

  });

  router.delete("/:id", (req, res) => {
  });

  return router;

}



module.exports = employeeController;

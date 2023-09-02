
const express  = require("express")
const app = express()
const cors = require("cors")
const employeeController = require("./routes/employees")
const PORT = 4000
const InMemoryEmployeeRepository = require('./infrastructure/in-memory-employee-repository');
const employeesData = require("./data/employees")
const employeeRepository = new InMemoryEmployeeRepository();


employeeRepository.load(employeesData)


app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
  res.json("Hello World !");
});

app.use("/api/employees", employeeController(employeeRepository));

app.listen(PORT,()=>{
  console.log("server is running on port ",PORT)
})

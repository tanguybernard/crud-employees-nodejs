
# Documentation

## Employee

### Get employees
GET http://localhost:4000/api/employees

### Get employee by id
GET http://localhost:4000/api/employees/{{emplyeeid}}

## Project

### Get projects
GET http://localhost:4000/api/projects

### Get project by id
GET http://localhost:4000/api/projects/{{projectid}}

### Create Project

POST http://localhost:4000/api/projects
Content-Type: application/json

    {
        "name": "Great project",
        "employees": [
            "3928cd00-1104-492a-8d0c-b01f5f524faf", "97d686e7-fc99-4f13-b9dd-127578038849"
        ]
    }

### Update Project

PUT http://localhost:4000/api/projects/{{idProject}}
Content-Type: application/json

    {
        "id": "{{idProject}}",
        "name": "Super Project Name",
        "employees": [
            "3928cd00-1104-492a-8d0c-b01f5f524faf"
        ]
    }






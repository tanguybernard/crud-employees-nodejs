

export async function listPorject(projectService) {
  const projects = await projectService.getAll();


  projects.forEach(function (project) {
    console.log(project.name);

    project.employees.forEach(function (employee) {

      console.log(employee.name + " - " + employee.department);
    })
    console.log(" ");
  })

}


import {Project} from '../models/project.js';
import {Employee} from '../models/employee.js';

export class ProjectService {
  projectHttpService;
  employeeHttpService;

  constructor(projectHttpService, employeeHttpService) {
    this.projectHttpService = projectHttpService;
    this.employeeHttpService = employeeHttpService;

  }

  async getAll(){

    const projectsFromApi = await this.projectHttpService.getProjects();

    const projects = [];
    for (const project of projectsFromApi){
      const employees = [];

      for(let employeeId of project.employees){
        const employee = await this.employeeHttpService.getEmployeeById(employeeId)
        employees.push(new Employee(employee.id, employee.firstName + " " + employee.lastName, employee.department));
      }


      projects.push(new Project(project.id, project.name, employees))

    }

    return projects;
  }

}

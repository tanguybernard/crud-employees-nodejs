import {program} from 'commander';
import {listPorject} from './command/list-projects.js';
import {ProjectHttpService} from './infrastructure/project-http.service.js';
import {EmployeeHttpService} from './infrastructure/employee-http.service.js';
import {ProjectService} from './services/project.service.js';

const projectService = new ProjectService(new ProjectHttpService(), new EmployeeHttpService())

program
  .command('list')
  .description('List all the TODO tasks')
  .action(async () => {
    await listPorject(projectService)
  }
  );



program.parse();




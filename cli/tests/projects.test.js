import { describe, it, mock } from 'node:test';
import assert from 'node:assert/strict';
import {Project} from '../models/project.js';
import {Employee} from '../models/employee.js';
import {ProjectService} from '../services/project.service.js';
import {ProjectHttpService} from '../infrastructure/project-http.service.js';

//https://dev.to/zsevic/spies-and-mocking-with-node-test-runner-nodetest-4l61

const projects = [new Project(1, "Mon Super Projet", [new Employee(1, "John Doe", "Developer")])];
const projectHttpService = new ProjectHttpService();

describe("Get Project and employees", () => {

  it("is empty", async () => {

    const projectService = new ProjectService(projectHttpService);
    mock.method(projectHttpService, 'getProjects', async () => Promise.resolve(projects));

    const result = await projectService.getAll();

    assert.deepEqual(result, projects);
  });

})

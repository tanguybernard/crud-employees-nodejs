

export class ProjectHttpService {

  async getProjects(){

    const res = await fetch('http://localhost:4000/api/projects');
    if (res.ok) {
      return res.json();
    }
    return [];

  }

}

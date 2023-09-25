

export class EmployeeHttpService {


  async getEmployeeById(idEmployee) {
    const res = await fetch('http://localhost:4000/api/employees/' + idEmployee);
    if (res.ok) {
      return res.json();
    }
    return [];

  }


}

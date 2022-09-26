import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees"; /*
                                                              Andiamo a collegare il frontend al backend attraverso questo
                                                              service tramite il modulo HttpClient importato precedentemente
                                                              nel app.module.ts grazie all'import dell HttpClientModule negli imports
                                                              */

  constructor(private httpClient: HttpClient) {
  }

  /*
  Metodo attraverso il quale si riesce ad ottenere le informazioni dal backend e fornirle prima al typescript
  employee-list.component.ts in cui poi viene creato un metodo getEmployees che fornirà i dati alla pagina HTML
   */
  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  /*
  Metodo per creare un oggetto Employee e passarlo poi al database MySQL
  Il tipo si observable può essetre Object oppure any se non si sa che valore dargli
  il valore di employee verrà messo nel body del metodo POST
  In seguito faremo l'inject dell'employee service nel create-employee.component chiamando il metodo createEmployee
   */
  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

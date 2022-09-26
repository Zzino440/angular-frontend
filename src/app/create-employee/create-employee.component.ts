import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/employee";
import {EmployeeService} from "../service/employee.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee(); //creiamo una nuova istanza dell'oggetto Employee in modo da poter utilizzare
                                       //i suoi attributi nel file html
  /*
  facciamo l'inject dell EmployeeService nel costruttore per poter utilizzare i suoi metodi in questo componente
  facciamo anche l'inject del Router che ci permette di muoverci tra le pagine
   */
  constructor(private employeeService: EmployeeService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList()
    });
  }

  /*
  In questo metodo utilzziamo un router per navigare alla pagina employees una volta riempito il form di add employee
  Il Router fornisce il metodo navigate attraverso il quale (passandogli un path) possiamo navigare tra vari path url
   */
  goToEmployeeList() {
    this.router.navigate(['/employees'])
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();

  }

}

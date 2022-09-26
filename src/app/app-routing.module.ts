import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./update-employee/update-employee.component";
import {EmployeeDetailsComponent} from "./employee-details/employee-details.component";

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent}, /*ogni route normalmente ha 2 proprietà:
                                                        1)il path cioè una stringa che specifica l'url del route
                                                        2)un component che speicifica quale componente l'applicazione deve
                                                        mostrare dato un particolare path
                                                          */
  {path: 'create-employee', component: CreateEmployeeComponent}, //route al form di creazione di un nuovo employee
  {path: '', redirectTo: 'employees', pathMatch: 'full'}, /* in questo modo quando nel browser mettiamo un empty path,
                                                          verremo indirizzati al path employees.
                                                          E' consigliato utilizzare la pathMatch strategy quando si configura un emptypath
                                                          */
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},// /:id per dire che andremo a fare l'update
                                                                   // di un employee specifico
  {path: 'employee-details/:id', component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

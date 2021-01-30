import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SymptomsCheckerComponent} from './symptoms-checker/symptoms-checker.component'
import { MainComponent } from './main/main.component'

const routes: Routes = [
  {path: '' , component : MainComponent},
  {path: 'symptomschecker', component : SymptomsCheckerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

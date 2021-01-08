import { Component, OnInit } from '@angular/core';
import { SymptomsCheckerService } from '../services/symptoms-checker.service';

@Component({
  selector: 'app-symptoms-checker',
  templateUrl: './symptoms-checker.component.html',
  styleUrls: ['./symptoms-checker.component.css']
})
export class SymptomsCheckerComponent implements OnInit {
   ourArray
  constructor(public symptomsCheckerService : SymptomsCheckerService ) { 
  }
  ngOnInit()  {
    this.symptomsCheckerService.selectedBodypart.subscribe(
      (value) =>{this.symptomsCheckerService.alertBodyPart(value)
                this.symptomsCheckerService.toggleJson(value) 
                this.ourArray= this.symptomsCheckerService.selectedBodypartSymptoms
      }
    )
  }


}

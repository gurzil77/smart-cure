import { Component, OnInit, ViewChild } from '@angular/core';
import { SymptomsCheckerService } from '../services/symptoms-checker.service';
import { ModalService } from '../services/modal.service'

@Component({
  selector: 'app-symptoms-checker',
  templateUrl: './symptoms-checker.component.html',
  styleUrls: ['./symptoms-checker.component.css']
})
export class SymptomsCheckerComponent implements OnInit {
  selectedBodypartSymptoms  = []
  @ViewChild('checkbox') checkbox
  constructor(public symptomsCheckerService : SymptomsCheckerService, private modalService : ModalService ) { 
  }
  ngOnInit() {
    this.symptomsCheckerService.selectedBodypart.subscribe(
      (value) =>{//this.symptomsCheckerService.alertBodyPart(value)
                this.selectedBodypartSymptoms =this.symptomsCheckerService.toggleJson(value)
                this.modalService.open(this.checkbox)
              }
    )
  }


}
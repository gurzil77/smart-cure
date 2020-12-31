import { Component, OnInit, Output } from '@angular/core';
import { SymptomsCheckerService } from '../../services/symptoms-checker.service'

@Component({
  selector: 'app-body-map',
  templateUrl: './body-map.component.html',
  styleUrls: ['./body-map.component.css']
})
export class BodyMapComponent implements OnInit {

  constructor(private symptomsCheckerService : SymptomsCheckerService ) { }
  
  ngOnInit(): void {
  }
  shoulderWasClicked(event){
    this.symptomsCheckerService.updateBodyPart(event.target.id)
  }
}

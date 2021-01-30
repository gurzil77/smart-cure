import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { SymptomsCheckerService } from '../../services/symptoms-checker.service'

@Component({
  selector: 'app-body-map',
  templateUrl: './body-map.component.html',
  styleUrls: ['./body-map.component.css']
})
export class BodyMapComponent implements OnInit {

  constructor(private symptomsCheckerService : SymptomsCheckerService ) { }
  front = true;
  back = false;
  ngOnInit(): void {
  }
  bodyPartWasClicked(event){
    this.symptomsCheckerService.updateBodyPart(event.target.id)
  }
  onButtonClick(){
    this.front = !this.front
    this.back = !this.back
  }
}

import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import  *  as  symptoms  from  '../../assets/symptoms.json';


@Injectable({providedIn: 'root'})


export class SymptomsCheckerService {
     public selectedBodypart = new EventEmitter()
    
    updateBodyPart(bodypart){
        this.selectedBodypart = bodypart
    }
    alertBodyPart(value) {
        alert(value)

    }

}
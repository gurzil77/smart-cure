import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import  *  as  symptoms  from  '../../assets/symptoms.json';


@Injectable({providedIn: 'root'})


export class SymptomsCheckerService {
     public selectedBodypart = new EventEmitter()
     public selectedBodypartSymptoms = []

    
    updateBodyPart(bodypart){
        this.selectedBodypart.emit(bodypart)
    }
    alertBodyPart(value) {
        alert(value)
    }
    toggleJson(bodyPart) {
        let bodyPartConverted = JSON.stringify(bodyPart)
         symptoms.find((el) => {
          el === bodyPart }
         )}
         
}
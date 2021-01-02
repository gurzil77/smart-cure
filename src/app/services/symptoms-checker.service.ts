import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import   symptoms  from  '../../assets/symptoms.json';


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
         symptoms.find((el) => {
            console.log(el === bodyPart )
             }
         )}
         
}
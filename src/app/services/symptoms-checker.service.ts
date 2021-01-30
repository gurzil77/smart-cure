import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import   symptoms  from  '../../assets/symptoms.json';


@Injectable({providedIn: 'root'})


export class SymptomsCheckerService {
     public selectedBodypart = new EventEmitter()

    
    updateBodyPart(bodypart){
        this.selectedBodypart.emit(bodypart)
    }
    /*alertBodyPart(value) {
        alert(value)
    }*/

 /*   toggleJson(bodyPart) {
        let find = symptoms.filter((el) => {
                return el.bodypart == bodyPart
             }
         )  
            let toggleSymptoms = find.filter((el => {
                return JSON.stringify(el["diseases list"]).includes("symptoms")
            }))

            let iterat = [...toggleSymptoms][0]["diseases list"]
            for (const symptom of iterat) {
                if (!this.selectedBodypartSymptoms.includes(el => (symptom.symptoms == el ))) {
                    this.selectedBodypartSymptoms.push(...symptom.symptoms)
                    console.log(this.selectedBodypartSymptoms)
                }
            }
        }
         */
    toggleJson(bodyPart) {
        const symptom = symptoms.find((s) => {
        return s.bodypart === bodyPart;
      }
    );

    return [...new Set(symptom.diseasesList.flatMap(diseaseList => diseaseList.symptoms))];
  }
}
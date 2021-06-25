import {Subject} from 'rxjs'

export class AppareilService {

  appareilSubject = new Subject<any[]>();

    private appareils = [
        {
          id: 1,
          name: "Machine à laver",
          status: "Allumé"
        },
        {
          id:2,
          name: "TV",
          status: "Éteint"
        },
        {
          id:3,
          name: "PC Seb",
          status: "Allumé"
        }
        ]

      constructor() { }
    
    // Dès que cette méthode emitAppareilSubject reçoit des nouvelles données, elle émet des données par le Subject
    // et met à jour les composants qui utilisent appareils 
      emitAppareilSubject() {
        this.appareilSubject.next(this.appareils.slice());
      }

        switchOnAll() {
            for(let appareil of this.appareils) {
              appareil.status = 'Allumé';
            }
            }
          
            switchOffAll() {
                if(confirm("Tout éteindre ?")) {
              for(let appareil of this.appareils) {
                appareil.status = 'Éteint';
              } 
            }
            }
        
        switchOn(i: number){
          this.appareils[i].status = 'Allumé';
        }
        switchOff(i: number){
          this.appareils[i].status = 'Éteint';
        }
    
        getAppareilById(id: number){
          const appareil = this.appareils.find(
            (item) => {
              return item.id === id;
            }
            );
            return appareil;
        }

        createAppareil(p_name: string, p_status: string){
          const appareilObject={
            id: 0,
            name: "",
            status: ""
          }
          
          appareilObject.id = this.appareils[(this.appareils.length-1)].id + 1;
          appareilObject.name = p_name;
          appareilObject.status = p_status;
          this.appareils.push(appareilObject);
          this.emitAppareilSubject();
          //this.appareils.push
        }
}
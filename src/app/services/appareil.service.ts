export class AppareilService {
    appareils = [
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
    
}
import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {


  @Input() appareilName: string = "";
  @Input() appareilStatus: string = '';
  @Input() index: number = 0;
  @Input() id: number = 0;

  constructor(private appareilService: AppareilService) { }
  ngOnInit(): void {
  } 

  getStatus() {
    return this.appareilStatus;
  }

  // Change la couleur du texte de l'appareil selon son statut
  getColor() {
    if (this.appareilStatus === "Éteint") {
      return "red"
    } else {
      return "green"
    }
  }

  onSwitch(){
    if(this.getStatus() === 'Allumé') {
    this.appareilService.switchOff(this.index);
    }
    else {
      this.appareilService.switchOn(this.index);
     
    }
  } 
}

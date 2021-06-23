import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  isAuth = true;

  appareils: any[] = [];
  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
          this.isAuth = true;
        }, 2000
    );
  }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

  //lastUpdate = new Date();
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date()
    setTimeout(() => {

      resolve(date)
    }, 1000)
    
  })

switchOnAll(){
  this.appareilService.switchOnAll();
}


switchOffAll() {
  this.appareilService.switchOffAll();
} 
}

import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
//import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  seconds: number = 0

  constructor() {}

  ngOnInit(){
    const counter = interval(1000);

    counter.subscribe(
      (value) => {
        this.seconds = value;
      }, (error) => {
        console.log("Uh-oh, an error occured! : " + error);
      },
      () => {
        console.log("Observable complete!")
      }




    )



  }

}

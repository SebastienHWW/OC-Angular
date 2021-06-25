import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defaultOnOff: string = 'Éteint'

  constructor(private appareilService: AppareilService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){

const name: string = form.value['name'];
const status: string = form.value['status'];
this.appareilService.createAppareil(name, status);
this.router.navigate(['/appareils']);
  }


}

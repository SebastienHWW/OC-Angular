import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';  //FormBuilder  est une classe qui vous met à disposition des méthodes facilitant la création d'objet FormGroup
import { Router } from '@angular/router';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder:  FormBuilder, 
              private UserService:  UserService,
              private router:       Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    // La méthode  group  prend comme argument un objet où les clés correspondent aux noms des contrôles souhaités et les valeurs correspondent aux valeurs par défaut de ces champs
    this.userForm = this.formBuilder.group({
      // l'objectif est d'avoir des champs vides au départ, chaque valeur ici correspond au string vide
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // Si besoin de plusieurs Validators, il faut utiliser un tableau
      drinkPreference: ['', Validators.required],
      hobbies: this.formBuilder.array([])
    })
  }

  onSubmitForm(){
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'], 
      formValue['hobbies'] ? formValue['hobbies']: []
    );
    this.UserService.addUser(newUser);
    this.router.navigate(['/userList'])
  }

  getHobbies(): FormArray{
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobby(){
    const newHobbyControl = this.formBuilder.control(null, Validators.required);
    this.getHobbies().push(newHobbyControl);
  }

}

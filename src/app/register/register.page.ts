import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  registerForm: FormGroup;
  validation_messages = {
    name: [
      {type: "required", message:"El nombre es requerido"},
      {type: "minlength", message:"El nombre dene tener minimo 3 letras"}

    ],
    last_name: [
      {type: "required", message:"El apellido es requerido"},
      {type: "minlength", message:"El Apellido debe tener minimo 3 letras"}

    ],
    email: [
      {type: "required", message:"El email es requerido"},
      {type: "pattern", message:"ojo! este no es un email valido"}
    ],
    password: [
      {type: "required", message:"El password es requerido"},
      {type: "minlength", message:"Minimo 5 letras para el password"}
    ]
  }
  errorMessage: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private authService:AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.registerForm = this.formBuilder.group({
      name: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3)

      ])),
      last_name: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")

      ])),
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5)

      ]))
    });
  }

  register(userData){
    userData.password = btoa(userData.password);
    this.authService.registerUser(userData).then(() =>{
      this.navCtrl.navigateBack("/login")
    });

  }
  goToLogin() {
    this.navCtrl.navigateBack("/login")
  }
}

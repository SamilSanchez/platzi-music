import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  loginUser(credential){
    return new Promise((accept, reject) => {
      this.storage.get('user').then((userData)=> {
        if (
          credential.email == userData.email &&
          btoa(credential.password)  == userData.password
          ) {
            accept("Login Correcto");
          }else{
            reject("Login Incorrecto")
          }

        });
      });
  }

  registerUser(userData) {
     return this.storage.set('user', userData);
  }
}

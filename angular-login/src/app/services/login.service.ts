import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  loggedInEmail :string = ''

  validateDate(loginData:any){
    const email=loginData.username
    const pass = loginData.password
    if(email.includes("@")){
      this.loggedInEmail = loginData.username
    }
    if(pass.length >=6){
      return true
    }
    return false
  }
}

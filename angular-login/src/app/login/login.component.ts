import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {LoginService} from "../services/login.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    emailId: new FormControl('',[Validators.required,
                                                        Validators.pattern("[^ @]*@[^ @]*")]),
    pswd: new FormControl('',[Validators.required,
                                                      Validators.minLength(6)]),
  });


  constructor(private loginService: LoginService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

  get f() { return this.loginForm.controls; }

  onSubmit(){
    const loginData = {
      username : this.loginForm.get('emailId')?.value,
      password : this.loginForm.get("pswd")?.value
    }

    if(this.loginService.validateDate(loginData)){
      this.router.navigate(['home'])
    }

  }


}

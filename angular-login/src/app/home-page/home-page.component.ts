import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public loginService :LoginService,private route: ActivatedRoute,
              private router: Router) { }
  public userEmail = '';

  ngOnInit(): void {
    this.userEmail = this.loginService.loggedInEmail
    if(this.userEmail === '') {
      this.router.navigate(['login'])
    }
  }

}

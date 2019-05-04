import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  model: any = {}; //creating empty object that we will store our username and password that are given from form with

  //Injecting AuthService that we created
  constructor(private authService: AuthService) {

  }
  ngOnInit() {

  }
  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log("Logged in successfully");
    }, error => {
      console.log("Failed to log in");
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token; //if theres something in token will retuns true else returns false;
  }

  logOut() {
    localStorage.removeItem('token');
    console.log("logged out");
  }
}
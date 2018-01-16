import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../models/app-user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent { 

  appUser:AppUser;

  constructor(private authService: AuthService) {
      authService.appUser$.subscribe(user => this.appUser = user);
   }

  logout(){

    this.authService.logout();
    
  }

}

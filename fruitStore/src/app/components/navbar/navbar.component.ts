import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AppUser } from '../../models/app-user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  appUser: AppUser;

  constructor(private authService: AuthService) {
    authService.appUser$.subscribe(user => {
      this.appUser = user;
    });
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}

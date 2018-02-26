import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user$: Observable<firebase.User>;
  constructor(private afAuth:AngularFireAuth) {
    this.user$ = afAuth.authState;
   }

  ngOnInit() {
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}

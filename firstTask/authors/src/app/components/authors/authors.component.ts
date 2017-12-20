import { AuthorsService } from './../../services/authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  private _authors;

  constructor(private authorsService: AuthorsService) {
    
   }

  ngOnInit() {
  }

  get authors(){
    return  this.authorsService.authors;
  }
   
  
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input  ('title') title;

  toggled:boolean;

  toggle(){
    this.toggled = !this.toggled;
  }

  constructor() { }

  ngOnInit() {
  }

}

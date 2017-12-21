import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() isActive:boolean;
  @Input() likesCount:number;

  @Output() change = new EventEmitter();


  onClick(){
    this.isActive = !this.isActive;
    this.change.emit(this.isActive);
    
  }

}

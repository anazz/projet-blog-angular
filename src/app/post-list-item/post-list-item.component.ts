import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreated_at: Date;

  constructor() { }

  ngOnInit() {
  }

  onIncrement(){
     this.postLoveIts += 1;
 	}
 
  onDecrement(){
     this.postLoveIts -= 1;
  }

  getPostLoveIts(){
  	return this.postLoveIts;
  }

  getColor() {
 
    if(this.getPostLoveIts() < 0){
         return 'red';
    }else if(this.getPostLoveIts() > 0){
         return 'green';
    }
  }

}

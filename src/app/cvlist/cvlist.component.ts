import { Component, EventEmitter, OnInit } from '@angular/core';
import { Cvideo } from '../services/cvideo';

@Component({
  selector: 'cvlist',
  templateUrl: './cvlist.component.html',
  styleUrls: ['./cvlist.component.css'],
  inputs: ['cvideos'],
  outputs: ['selectCvideo']
})
export class CvlistComponent implements OnInit {

  public selectCvideo = new EventEmitter();
  public addVideoEvent = new EventEmitter();
  constructor() { }
 
  ngOnInit() {
  }

  onSelectCvideo(cvideo: Cvideo){
    this.selectCvideo.emit(cvideo);
  }

  onAddVideo(){
    this.addVideoEvent.emit();
  }

}

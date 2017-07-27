import { Component, EventEmitter, OnInit } from '@angular/core';
import { Cvideo } from '../services/cvideo';

@Component({
  selector: 'cvdetail',
  templateUrl: './cvdetail.component.html',
  styleUrls: ['./cvdetail.component.css'],
  inputs: ['cvideo'],
  outputs:['updateVideoEvent', 'deleteVideoEvent']
})
export class CvdetailComponent implements OnInit {
  cvideo: any;
  private updateVideoEvent = new EventEmitter();
  private deleteVideoEvent = new EventEmitter();
  private editTitle: boolean = false;
  private editUrl: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.editTitle = false;
    this.editUrl = false;
  }

  onTitleClick(){
    this.editTitle = true;
  }

  onUrlClick(){
    this.editUrl = true;
  }

  updateVideo(){
    this.updateVideoEvent.emit(this.cvideo);
  }

  deleteVideo(){
    this.deleteVideoEvent.emit(this.cvideo);
  }
}

import { Component, OnInit } from '@angular/core';
import { CVService } from  '../services/cv.service';
import { Cvideo } from '../services/cvideo';

@Component({
  selector: 'cvcontrol',
  templateUrl: './cvcontrol.component.html',
  styleUrls: ['./cvcontrol.component.css'],
  providers: [CVService]
})
export class CvcontrolComponent implements OnInit {
cvideos: Array<Cvideo>;

private hideNewVideo: boolean  = true;

public selectedCvideo = Cvideo; 

  constructor(private _cvService: CVService) { }

  ngOnInit() {
    this._cvService.getCVideos()
      .subscribe(resCvideos => this.cvideos = resCvideos);
  }

  onSelectedCvideo(cvideo: any){
    this.selectedCvideo = cvideo;
    this.hideNewVideo = true;
  }

  newVideo(){
    this.hideNewVideo = false;
  }

  onSubmitAddVideo(video: Cvideo){
    this._cvService.addVideo(video)
      .subscribe(resAddedVideo =>{
        this.cvideos.push(resAddedVideo);
        this.hideNewVideo = true;
        this.selectedCvideo = resAddedVideo;
      });
  }
  
  onUpdateVideoEvent(cvideo: Cvideo){
    this._cvService.updateVideo(cvideo)
      .subscribe(resUpdatedVideo=> cvideo = resUpdatedVideo);
  }

  onDeleteVideoEvent(cvideo: Cvideo){
    let va = this.cvideos;
    this._cvService.deleteVideo(cvideo)
      .subscribe(resDeletedVideo =>{
        for(let x=0; x < va.length;x++){
          if(va[x]._id === cvideo._id){
            va.splice(x, 1);
          }
        }
      })
      this.selectedCvideo = null;
  }
}

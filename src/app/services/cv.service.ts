import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { Cvideo } from './cvideo';
import 'rxjs/add/operator/map';

@Injectable()
export class CVService {

    constructor(private http: Http){}

    ngOnInit()
    {

    }

    private _getUrl = "/api/cvideos";
    private _postUrl = "/api/addvideo";
    private _putUrl = "/api/updatecvideo/";
    private _delUrl = "/api/cvideos/";




    getCVideos(){
        return this.http.get(this._getUrl)
            .map((res: Response)=>res.json());
    }
    addVideo(cvideo: Cvideo){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.post(this._postUrl, JSON.stringify(cvideo), options)
            .map((res: Response)=> res.json());
    }
    updateVideo(cvideo: Cvideo){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.put(this._putUrl + cvideo._id, JSON.stringify(cvideo), options)
            .map((res: Response)=> res.json());
    }

      deleteVideo(cvideo: Cvideo){
    return this.http.delete(this._delUrl + cvideo._id)
      .map((response: Response) => response.json());

  }
}
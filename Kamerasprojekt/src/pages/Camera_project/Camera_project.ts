import { Component, NgModule} from '@angular/core';
import { CameraPreview, CameraPreviewRect } from 'ionic-native';
import {AlertController} from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';
import { URLSearchParams } from "@angular/http"
import { Camera } from 'ionic-native';

@Component({
  templateUrl: 'Camera_project.html'
})
export class Camera_project{
  //ip adress of the server
  private ip = "192.168.0.105";
  private ServerUrl = 'http://'+this.ip+':8080/post';
  constructor(private http: Http, public alertCtrl: AlertController) {
    this.http = http; 
  }
  
  Start(){
    let data = new URLSearchParams();
   
    Camera.getPicture().then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    
    data.append('A kép',imageData);
    this.http.post(this.ServerUrl, data).subscribe(data => {alert('ok');}, error => {console.log(JSON.stringify(error.json()));});
    }, (err) => {
    // Handle error
    });
  }
}

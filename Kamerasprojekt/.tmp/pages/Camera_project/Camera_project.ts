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
  text;
  constructor(private http: Http, public alertCtrl: AlertController) {
    this.http = http; 
  }
  
  Start(){
    let data = new URLSearchParams();
    let data2 = new URLSearchParams();
    this.text = 'Elindult a kamera';
    data.append('Szoveg',this.text);
    this.http.post(this.ServerUrl, data).subscribe(data => {alert('ok');}, error => {console.log(JSON.stringify(error.json()));});
    this.http.post( "https://posttestserver.com/post.php/?dir=csabee", data).subscribe(data => {alert('ok');}, error => {console.log(JSON.stringify(error.json()));});
   
    Camera.getPicture().then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    data2.append('A kép',imageData);
    this.http.post(this.ServerUrl, data2).subscribe(data => {alert('ok');}, error => {console.log(JSON.stringify(error.json()));});
    }, (err) => {
    // Handle error
    });
    // camera options (Size and location)
    /*let cameraRect: CameraPreviewRect = {
      x: 100,
      y: 100,
      width: 200,
      height: 200
    };
    // start camera
    CameraPreview.startCamera(
      cameraRect, // position and size of preview
      'back', // default camera
      true, // tap to take picture
      false, // disable drag
      false, // keep preview in front. Set to true (back of the screen) to apply overlaying elements
      1 // set the preview alpha
    );*/
  }
  /*Take(){
    // take a picture
    CameraPreview.takePicture({
      maxWidth: 640,
      maxHeight: 640
    });
    // Set the handler to run every time we take a picture
    CameraPreview.setOnPictureTakenHandler().subscribe((result) => {
      console.log(result);
      // do something with the result
    });
  }
  Stop(){
    // Stop the camera preview
    CameraPreview.stopCamera();
  }*/
}

import { Component, NgModule} from '@angular/core';
import { CameraPreview, CameraPreviewRect } from 'ionic-native';
import {AlertController} from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'Camera_project.html'
})
export class Camera_project{
  
  private ServerUrl = 'http://localhost:8080';
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  constructor(private http: Http, public alertCtrl: AlertController) {
    this.http = http;
  }
  text;
  
  Start(){
    this.text = "Elindult a kamera";
    this.http.post(this.ServerUrl, this.text);
    // camera options (Size and location)
    let cameraRect: CameraPreviewRect = {
      x: 100,
      y: 100,
      width: 200,
      height: 200
    };
    // start camera
    CameraPreview.startCamera(
      cameraRect, // position and size of preview
      'front', // default camera
      true, // tap to take picture
      false, // disable drag
      false, // keep preview in front. Set to true (back of the screen) to apply overlaying elements
      1 // set the preview alpha
    );
  }
  Take(){
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
  }
}

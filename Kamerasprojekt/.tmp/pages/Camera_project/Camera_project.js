import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { URLSearchParams } from "@angular/http";
import { Camera } from 'ionic-native';
export var Camera_project = (function () {
    function Camera_project(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        //ip adress of the server
        this.ip = "192.168.0.105";
        this.ServerUrl = 'http://' + this.ip + ':8080/post';
        this.http = http;
    }
    Camera_project.prototype.Start = function () {
        var _this = this;
        var data = new URLSearchParams();
        var data2 = new URLSearchParams();
        this.text = 'Elindult a kamera';
        data.append('Szoveg', this.text);
        this.http.post(this.ServerUrl, data).subscribe(function (data) { alert('ok'); }, function (error) { console.log(JSON.stringify(error.json())); });
        this.http.post("https://posttestserver.com/post.php/?dir=csabee", data).subscribe(function (data) { alert('ok'); }, function (error) { console.log(JSON.stringify(error.json())); });
        Camera.getPicture().then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            data2.append('A kép', imageData);
            _this.http.post(_this.ServerUrl, data2).subscribe(function (data) { alert('ok'); }, function (error) { console.log(JSON.stringify(error.json())); });
        }, function (err) {
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
    };
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
    Camera_project.decorators = [
        { type: Component, args: [{
                    templateUrl: 'Camera_project.html'
                },] },
    ];
    /** @nocollapse */
    Camera_project.ctorParameters = [
        { type: Http, },
        { type: AlertController, },
    ];
    return Camera_project;
}());
//# sourceMappingURL=Camera_project.js.map
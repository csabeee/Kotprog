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
        Camera.getPicture().then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            data.append('A kép', imageData);
            _this.http.post(_this.ServerUrl, data).subscribe(function (data) { alert('ok'); }, function (error) { console.log(JSON.stringify(error.json())); });
        }, function (err) {
            // Handle error
        });
    };
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
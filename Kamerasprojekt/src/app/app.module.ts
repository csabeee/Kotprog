import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera_project } from '../pages/Camera_project/Camera_project';


@NgModule({
  declarations: [
    MyApp,
    Camera_project,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Camera_project,
  ],
  providers: []
})
export class AppModule {}

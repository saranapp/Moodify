import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableComponent } from './table/table.component';
import { BoolToYesNoPipe } from './pipes/bool-to-yes-no/bool-to-yes-no.pipe';
import { HttpClientModule } from '@angular/common/http';
import { DesktopCameraService } from './services/desktop-camera.service';
import { MobileCameraService } from './services/mobile-camera.service';
import { FaceRecognitionService } from './services/face-recognition.service';
import { PlatformInformationProvider } from './services/platform-information.provider';
import { AbstractCameraService, cameraFactory } from './services/abstract-camera.service';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    BoolToYesNoPipe,
    NavigationComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    DesktopCameraService,
    MobileCameraService,
    FaceRecognitionService,
    PlatformInformationProvider,
    {
      provide: AbstractCameraService,
      useFactory: cameraFactory,
      deps: [PlatformInformationProvider]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

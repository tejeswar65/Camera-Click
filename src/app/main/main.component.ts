import { Component, OnInit } from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  public DispWebcam = true;
  public CameraSwitch = true;
  public videoOptions: MediaTrackConstraints = {};
  public errors: WebcamInitError[] = [];
  public webcamImage: WebcamImage = null;
  private trigger: Subject<void> = new Subject<void>();
  dataUrl;

  ngOnInit(): void {

  }
  public triggerSnapshot(): void {
    this.trigger.next();
  }
  public toggleWebcam(): void {
    this.DispWebcam = !this.DispWebcam;
  }
  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }
  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.dataUrl = webcamImage.imageAsDataUrl
    this.webcamImage = webcamImage;
  }
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

}

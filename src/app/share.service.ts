import { Injectable } from '@angular/core';
import { HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private adModalImageSource: string = "https://charts-images.scdn.co/REGIONAL_IN_LARGE.jpg";
  private jwtToken: string;

  constructor() { }

  getJwtToken(): string{
    return this.jwtToken;
  }

  setJwtToken(token: string): void{
    this.jwtToken = token;
  }

  getAdModalImageSource(): string{
    return this.adModalImageSource;
  }

  setAdModalImageSource(source : string): void{
    this.adModalImageSource = source;
  }
}

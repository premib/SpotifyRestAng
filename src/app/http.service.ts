import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAccount } from './user-account'

@Injectable({
  providedIn: 'root'
})


export class HttpService {

  commonOption: object ={
    "Content-Type": "application/json",
    Accept: "application/json",
    Connection: "keep-alive"
  };

  constructor(private http: HttpClient) { }

  registerAccount(credential: UserAccount): Observable<any>{
      
      return this.http.post('http://www.localhost:8080/v1/auth/register', credential,this.commonOption);
  }

  login(credential: object): Observable<any>{

    return this.http.post('http://www.localhost:8080/v1/auth/login', credential, this.commonOption);
  }

  getDummyHome(): Observable<any>{

    return this.http.get('http://localhost:8080/v1/auth/home');
  }


  uploadImageToServer(uploadImageData):Observable<any>{
  
    return this.http.post('http://localhost:8080/file/upload', uploadImageData, this.commonOption);
  }

  getImageFromServer(imageName): Observable<any>{
    return this.http.get('http://www.localhost:8080/file/get/'+imageName);
        
  }

  getAudioFromServer(): Observable<any>{
    return this.http.get('http://localhost:8080/admin/music/Recording.wav');
  }

  getPlaylistSongs(playlistMongoId): Observable<any>{
    return this.http.get(`http://localhost:8080/v1/auth/playlist`, playlistMongoId);
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-playlist-addition',
  templateUrl: './playlist-addition.component.html',
  styleUrls: ['./playlist-addition.component.css']
})
export class PlaylistAdditionComponent implements OnInit {

  filed: File;
  retrievedImage: string;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: string;
  adminForm: FormGroup;
  retreivedAudio: string;

  constructor(private http: HttpService, fb: FormBuilder, private sanitizer: DomSanitizer) {
    this.http.getAudioFromServer().subscribe(
      res =>{
        console.log(this.sanitizer.bypassSecurityTrustUrl(`data:audio/wav;base64,` + res.audio));
        this.retreivedAudio = `data:${res.musicType};base64,${res.audio}`;
      }
    );
   
  }

  ngOnInit(): void {
  }

  public onFileChanged(event) {
    this.filed = event.target.files[0];
  }

  
  onUpload() {
      console.log(this.filed);
      const uploadImageData : FormData = new FormData();
      uploadImageData.append('imageFile', this.filed, this.filed.name);
      this.http.uploadImageToServer(uploadImageData)
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      });       
  }

  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.http.getImageFromServer(this.imageName).subscribe(
      res => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      }
    );
  }
}

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  btns: boolean = false;
  forms ;
  filed: File; 
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  constructor(private fb: FormBuilder,  private http: HttpService, private router: Router) {
      this.forms = fb.group({
        'file' : ['']
      });

   }

   public onFileChanged(event) {
        this.filed = event.target.files[0];
      }

      
  onUpload() {
        console.log(this.filed);
        //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
        const uploadImageData = new FormData();
        uploadImageData.append('imageFile', this.filed, this.filed.name);
        this.http.uploadImageToServer(uploadImageData)
        .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        }   );       
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

goBack(){
  history.back();
}

goForward(){
  history.forward();
}
  ngOnInit(): void {
  }


}

import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { HttpService } from '../http.service';
import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  errorMessage: string;
  showError: boolean = false;
  loginButtonClicked: boolean = false;
  
  constructor(private fb: FormBuilder, private http: HttpService, private shared: ShareService, private router: Router) {

    this.loginForm = fb.group({
      'email': ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      'password': ['', [Validators.required]]
    });
   }

  loginAccount(forms: FormGroup){
    
    if(forms.valid){
      this.loginButtonClicked = true;
      this.http.login({
        email: forms.value.email,
        password: forms.value.password
      }).subscribe(
        data => {
          this.shared.setJwtToken(data.response);
          localStorage.setItem('spotify_rest_token', data.response);
          this.router.navigateByUrl("/");
        },
        error => {
          console.log(error);
          if(error.status == 401){
            this.errorMessage = "Incorrect username or password."
          }
          else if(error.status < 500)
            this.errorMessage = "Couldn't connect with server, try later."
          this.showError = true;
          window.scroll(0, 0);
        }
      );
    }
    else{
      for(let validator in forms.controls)
        forms.controls[validator].markAllAsTouched();
    }
  } 

  ngOnInit(): void {
  }

}

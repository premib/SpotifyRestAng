import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { UserAccount } from '../user-account';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;
  today: Date;
  maxYear : number;
  emailFlag: boolean = false;
  inputFlags: object = {

  };
  
  constructor(private fb: FormBuilder, private httpService: HttpService) {

      this.today = new Date();
      this.maxYear = (this.today.getFullYear()- 13);

      this.myForm = fb.group({
        'email' : ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
        'emailConfirm' : ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
        'password' : ['', [Validators.required, Validators.min(6)]],
        'userName' : ['',[ Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
        'dobYear' : ['', [Validators.required, Validators.pattern("[0-9]*"), Validators.min(1900), Validators.max(+this.maxYear)]],
        'dobMonth' : ['',[ Validators.required]],
        'dobDay' : ['', [Validators.required, Validators.pattern("[0-9]*"), Validators.min(1), Validators.max(31)]],
        'gender' : ['', [Validators.required]],
        'shareData' : ['']
      })
   }

  ngOnInit(): void {
  }

  yearWrong(enteredYear: number): boolean{
    console.log(enteredYear, this.maxYear)
    return (enteredYear > this.maxYear)?true:false;
  }

  sameEmail(): boolean{
    
    return (this.myForm.value.email == this.myForm.value.emailConfirm);   
  }

  sendRegisterRequest(form: FormGroup){
    console.log(form);
    if(this.sameEmail()){
      if(form.status == "VALID"){
        console.log("n");
        let obtainedCredential: UserAccount ={
          email: form.value.email,
          password: form.value.password,
          userName: form.value.userName,
          dob: new Date(`${form.value.dobyear}-${form.value.dobMonth}-${form.value.dobDay}`),
          gender: form.value.gender,
          shareData: form.value.shareData
        }
        this.httpService.registerAccount(obtainedCredential).subscribe(
          data=>{
            console.log(data);
          },
          error=> {console.log(error)},
          ()=> console.log("done")
        );
      }
      else{        
        for(let validator in form.controls){
          if(validator !== "emailConfirm")
            form.controls[validator].markAsTouched();
        }
      }
    }
    else{
      document.getElementById('registerEmailRe').focus();
    }
  }
    
}

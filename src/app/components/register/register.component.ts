import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm:FormGroup
  
  constructor(private formBuilder:FormBuilder,private authService:AuthService
    ,private toasterService:ToastrService){}
  ngOnInit(): void {
    this.createLoginForm();
  } 

  createLoginForm(){
    this.registerForm = this.formBuilder.group({
      firstName: ["",Validators.required],
      lastName:["",Validators.required],
      email: ["",Validators.required],
      password:["",Validators.required]
    })
  }

  register(){
    if(this.registerForm.value){
      let registerModel = Object.assign({},this.registerForm.value)
      
      this.authService.Register(registerModel).subscribe(response=>{
        this.toasterService.info(response.message)
        localStorage.setItem("token",response.data.token.toString())
      },responseError=>{
        this.toasterService.error(responseError.error)
      })
  }
  }
}

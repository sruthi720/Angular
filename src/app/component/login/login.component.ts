import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  type: string="password";
  isText: boolean= false;
  eyeicon: string ="fa-eye-slash";
  

 ngOnInit(): void{

 }
 hideShowPass(){
  this.isText=!this.isText ;
  this.isText? this.eyeicon="fa-eye" :this.eyeicon="fa-eye-slash";
  this.isText? this.type="text":this.type="password";
}

}

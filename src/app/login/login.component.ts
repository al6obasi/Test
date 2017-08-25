import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private Auth:UserDataService) { }

  ngOnInit() {
  }
	message:string;
	username:string;
	password:string;

  	login(){
  		var user={
  			username:this.username,
  			email:this.email,
  			password:this.password
  		}
  		this.Auth.signin(user).subscribe(ok=>{
        localStorage.setItem('username',JSON.stringify(this.username));
        if( typeof(ok)!=="string" ){
        localStorage.setItem('com.MedianCorpTest',JSON.stringify(ok.token));
			  this.message=ok.id
  			}else{
  			this.message=ok;
	        this.password = undefined;
  			}
  		}
  			
	)}
}

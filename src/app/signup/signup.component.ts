import { Component, OnInit } from '@angular/core';
import {UserAuthService } from '../user-data.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private Auth:UserAuthService) { }

  ngOnInit() {
  }
	 signup(){
	    var newUser = {
	    username:this.username,
	    password:this.password,
	    email:this.email
	        }
	        this.Auth.signup(newUser).subscribe(ok=>{
		       if(typeof(ok) === "string"){
  					this.message=ok
  			   }
  		       else{
  			     window.location.href=("/#Login")
  		      }
	    });   
    };
}

import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserDataService {

  constructor(private http:Http) { }
  signup(data){
        return this.http.post('/api/signup',data).map( resp=>{ return resp.json() });
    }; 

  signin(data){
  		return this.http.post('/api/signin',data).map( resp=>{return resp.json() })
    };
  isLoggedIn(){
    if(!localStorage.getItem("com.MedianCorpTest")){
      return false;
    }else{
      return true;
    }
  };    
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  constructor(private http: HttpClient) { }

  
  getMovies(){
    return new Promise((resolve, reject)=>{
      this.http.get(environment.rootUrl + 'get-movies').subscribe(result=>{
        resolve(result)
      }, error =>{
        reject(error)
      })
    })
  }

}

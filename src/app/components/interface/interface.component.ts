import { Component, OnInit } from '@angular/core';
import {GetMoviesService} from '../../services/get-movies.service'
import { GetMovies} from '../../interfaces/get-movies'
@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  constructor(private movies: GetMoviesService) { }
  moviesList = []
  showError = false
  ngOnInit(): void {
    try{
      this.movies.getMovies().then((result: GetMovies )=>{
        this.moviesList = result.data
        console.log(this.moviesList)
  
      }, error =>{
        this.showError = true
        console.log(error)
      })
    }
    catch(error) {
      this.showError = true
      console.log(error)
      console.log("error")
    }
    
  }

  

}

import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private m_service:MoviesService) { }
 movies=[];
  ngOnInit(): void {
    this.m_service.getMovies().subscribe(res=>{
      res=this.movies;
      console.log(this.movies);
    });
  }


}

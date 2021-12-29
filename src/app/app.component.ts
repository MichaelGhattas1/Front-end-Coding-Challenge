import { Component, OnInit } from '@angular/core';
import { GetRepoService } from './get-repo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Github Repo Most Started';
  allRepo: any = [];
  day:number = new Date().getUTCDate()
  month:any= new Date().getUTCMonth()
  year:number= new Date().getUTCFullYear()
  currentIndex:number = 2
  constructor(private _GetRepoService: GetRepoService) {
  }
  ngOnInit() {
    this.getStartedRepos(1)  
  }
  getStartedRepos(num: number) {
    if(this.day > 30 )
    {
      this.day = 30 
    } 
    if(this.month == 0){
      this.month=12
    } // handle if in jun to bak to Dec
    if(this.month == 2 && this.day>28)
    {
      this.day=28 
    } // handling feb days not to be greater than 28 day 
    this._GetRepoService.getAllRep(num , this.year , this.month, this.day).subscribe((result) =>
      this.allRepo.push(result.items)
    )
  }

  calculateTimeDiff(data:Date){
    let date = new Date(data);
    let currentDate = new Date();
    let days = Math.floor((currentDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24); // convert milliseconds to day
    return days;
  }

  onScroll() {
    this.getStartedRepos(this.currentIndex)
    this.currentIndex ++ ;
  } 

}



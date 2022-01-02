import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GetRepoService {
  day:number = new Date().getUTCDate()
  addZero:string=''
  constructor( private _HttpClient:HttpClient ) { 
   if(this.day<10)
    {
      this.addZero='0'
    }
  }
 getAllRep ( pageNum:number ,  year:number , month:number ,day:number  ) :Observable<any>
{
  return this._HttpClient.get(`https://api.github.com/search/repositories?q=created:>${year}-${month}-${day}&sort=stars&order=desc&page=${pageNum}`)
}

}

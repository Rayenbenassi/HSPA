import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/Iproperty.interface';




@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
  getAllProperties(sellRent : number):Observable<IProperty[]>{
     return this.http.get<any>('data/properties.json').pipe(
      map(
        data=> {
          const propertiesArray:Array<IProperty>=[];
          for(const id in data["results"]){
            if(data["results"].hasOwnProperty(id) && data["results"][id].SellRent===sellRent ){

              propertiesArray.push(data["results"][id])

            }
          }

          return propertiesArray;
        }
      )
     );
  }

}

import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../Iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties !: Array<IProperty>;


  constructor(private _housingService:HousingService) { }

  ngOnInit(): void {
   this._housingService.getAllProperties().subscribe(
      data=>{

        this.Properties=data;
        console.log(data)},

        error=>{
          console.log(error);
        }
    );
  }

}

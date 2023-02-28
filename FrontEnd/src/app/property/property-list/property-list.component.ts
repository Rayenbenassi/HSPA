import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../Iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties !: Array<IProperty>;
  SellRent = 1;


  constructor(private _housingService:HousingService, private _activeRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    if (this._activeRoute.snapshot.url.toString()){
      this.SellRent=2;
    }
   this._housingService.getAllProperties(this.SellRent).subscribe(
      data=>{

        this.Properties=data;
        console.log(this._activeRoute.snapshot.url.toString())
        },

        error=>{
          console.log(error);
        }
    );
  }

}

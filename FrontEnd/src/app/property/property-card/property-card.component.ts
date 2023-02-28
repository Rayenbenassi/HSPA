import { Component, Input, OnInit } from "@angular/core";
import { IProperty } from "../Iproperty.interface";

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls:['./property-card.component.css']
})
export class PropertyCard implements OnInit {
  ngOnInit(): void {
    if(!this.prop.ImageUrl){
      this.prop.ImageUrl="assets/img/default-house.jpg";
    };
  }
  @Input() prop!:IProperty;



}

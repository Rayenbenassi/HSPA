import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute) { }
  public propertyId!: number;

  ngOnInit() {
    this.propertyId=this.activeRoute.snapshot.params['id']
  }

}

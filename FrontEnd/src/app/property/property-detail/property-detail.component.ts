import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute , private router:Router) { }
  public propertyId!: number;

  ngOnInit() {
    this.propertyId=this.activeRoute.snapshot.params['id']
  }
  onNextPage():void{
    this.propertyId++;
    this.router.navigate(['/property-detail/'+this.propertyId])

  }

}

import {Component} from '@angular/core';

@Component({
  selector : 'app-property-card',
 // template : `<h1> Hi DInesh! </h1>`
 templateUrl : 'property-card.component.html',
 styleUrls : ['property-card.component.css']
  //style:
})
export class ProperyClassComponent
{
  Property : any = {
    "ID":1,
     "Name" : "Birla House",
     "Type" : "House",
     "Price" : 120000
  }
}

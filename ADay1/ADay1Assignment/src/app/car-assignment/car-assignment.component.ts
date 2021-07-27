import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-assignment',
  templateUrl: './car-assignment.component.html',
  styleUrls: ['./car-assignment.component.css']
})
export class CarAssignmentComponent implements OnInit {

  constructor() { }

  car:any[]=[
    {"Brand":"Maruti Suzuki","Price":"450000","Colour":"White" },
    {"Brand":"Honda","Price":"550000","Colour":"Red" },
    {"Brand":"Audi","Price":"9000000","Colour":"Black" },
    {"Brand":"BMW","Price":"8000000","Colour":"Black" },
    {"Brand":"Jaguar","Price":"750000","Colour":"Red" },
    {"Brand":"Ford","Price":"650000","Colour":"White" },
    {"Brand":"Toyota","Price":"250000","Colour":"Red" },
    {"Brand":"Tata","Price":"400000","Colour":"White" },
    {"Brand":"Mercedes-Benz","Price":"8500000","Colour":"Black" }

  ];


  ngOnInit(): void {
  }

}





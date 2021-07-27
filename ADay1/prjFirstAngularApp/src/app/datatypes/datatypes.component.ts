import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatypes',
  templateUrl: './datatypes.component.html',
  styleUrls: ['./datatypes.component.css']
})
export class DatatypesComponent implements OnInit {

  //declaring variable

  name:string="SRI";
  age:number;
  hobbies:string[];
  marks:Array<number>;
  Istrue:boolean;
  tupleval:[string,number,boolean];
  dynamicvalue:any;
  student:any;
  picture="assest/images/doll.jpeg"


  constructor() { 

    this.age=30;
    this.hobbies=["Playing","Singing"];
    this.marks=[90,78,89];
    this.Istrue=false;
    this.tupleval=["Pune",1200,true];
    this.dynamicvalue=89;
    this.student={fathername:"Raj",Address:"TNB Road,Chennai-42"};

  }


  ngOnInit(){

  }



}

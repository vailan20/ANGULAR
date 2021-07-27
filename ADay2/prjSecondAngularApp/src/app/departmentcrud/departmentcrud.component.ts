import { Component, OnInit } from '@angular/core';
import { Department } from '../Model/department';

@Component({
  selector: 'app-departmentcrud',
  templateUrl: './departmentcrud.component.html',
  styleUrls: ['./departmentcrud.component.css']
})
export class DepartmentcrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //dept:any[]=[];
  dept:Department[]=[
    {did:1001,dname:"AI",location:"Mumbai"},
    {did:1002,dname:"HR",location:"Pune"},
    {did:1003,dname:"Finance",location:"Bangalore"},
    {did:1004,dname:"Sales",location:"Chennai"},
  ];

  //object creation of the type any
  //getdeptinfo:any={};
  //object of type department
  getdeptinfo:Department={};

  //Adding Employee details into emp array
  addDepartment(){
    debugger;
    this.dept.push(this.getdeptinfo);
    this.getdeptinfo={}; //Emptying the object
  }


  //deleting the department info from array by passing emp id
  msg:any;
  deleteDepartment(deptid?:number)
  {
    debugger;
    for(let i=0; i<this.dept.length; i++) //iterate through array
    {
      if(this.dept[i].did==deptid) //particular emp id exists
      {
        this.dept.splice(i,1); //slice is an array method to remove one record at a time
        this.msg="Record Deleted!!!";
      }
      else{
        this.msg="Record not Found!!!";
      }
    }
  }


  //edit
  departmentid:any;
  EditDepartment(deptid?:number)
  {
    for(let i=0;i<this.dept.length;i++)//iterate through array
    {
      if(this.dept[i].did==deptid)//particular emp id exists
      {
        this.getdeptinfo=this.dept[i];
      }
    }
  }

  //updating the edited emp info
  
  updateDepartment(){
    let k = this.getdeptinfo.did;
    for(let i = 0; i<this.dept.length; i++)//iterate through array
    {
      if(this.dept[i].did==k)//particular id exists
      {
        this.dept[i]=this.getdeptinfo;
        this.getdeptinfo={}; //empty object
        this.msg="Record updated!!!"
      }
    }
  }

}

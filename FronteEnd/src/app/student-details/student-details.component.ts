import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
import { error } from 'console';

@Component({
  selector: 'app-student-details',
  standalone: false,
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit{

  
  sid:number=0;
 student:any=Student;



 constructor(private route: ActivatedRoute,private r: Router, private studetService:StudentServiceService) { }
  ngOnInit(): void {
   this.student=new Student();
   this.sid=this.route.snapshot.params['sid'];
   this.studetService.getStudent(this.sid).subscribe(data=>{
    console.log(data);
  
    this.student=data
  },
  error=>{
    console.log(Error)
  }
)
  }


  list() {
    this.r.navigate(['list-student'])
    }

  // ngOnInit():  {
  //   // this.student=new Student();
  //   // this.sid=this.route.snapshot.params['sid'];
  //   // this.studetService.getStudent(this.sid).subscribe(data=>{console.log(data)this.student=data;})
  // }

}

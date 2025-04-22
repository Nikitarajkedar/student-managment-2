import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  standalone: false,
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent implements OnInit{
  

  student:any=Observable<Student[]>;

  constructor(private studentService:StudentServiceService,
    private r:Router){}

  ngOnInit() {
   this.reloadData();
  }

reloadData(){
  this.student=this.studentService.getStudentList();
  //console.log("******************",this.student);
}

studentDetails(sid: number) {
  alert('hi')
  this.r.navigate(['student-detail',sid])
  console.log("**********nikita********",sid);
  }

  


  updateStudent(sid: number){
    console.log('Navigating to update',sid);
    this.r.navigate(['update-student',sid]);
  }
  
  deleteStudent(id: number) {
    this.studentService.delete(id)
    .subscribe(
      data => {
        alert("data deleted")
      console.log(data);
        this.reloadData();
      },
      error => console.log(error));
     
    }
}







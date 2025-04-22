import { Component } from '@angular/core';
import { Student } from '../student';
import { Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-add-student',
  standalone: false,
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {

  student: Student = new Student();
  submitted = false;
firstName: any;

  constructor(private studentService: StudentServiceService,
    private router: Router) { }

  ngOnInit() {
  }

  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }

  save() {
    this.studentService
    .create(this.student).subscribe(data => {
      console.log(data)
      this.student = new Student();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    if(this.student.sname===''){
      alert('student name should not empty');
      return;
              
    }
   if(this.student.sname.length<4){
     alert('student name more than 4 char');
     return;
  }
   const userPartten = (/[A-Za-z]+$/)  
   if(!userPartten.test(this.student.sname)){
     alert('student name  should be A-Z and a-z only $ allow character');
     return;
   } 
    
      if(this.student.emailId==='')
   {
     alert('email id should not empty')
     return;
   }
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailPattern.test(this.student.emailId)) {
    
   alert('enter valid email');
   return;
  }

   if(this.student.contact==='')
      {
        alert('contact should not empty')
       return;
  }
  
   const mobilePattern = /^[6-9]\d{9}$/;
       if (!mobilePattern.test(this.student.contact)) {
      alert('enter valid contact');
 return;
      }
      if(this.student.department==='')
         {
         alert('department should not empty')
          return;
            }
      if(this.student.address==='')
        {
            alert('address should not empty')
       return;
         }

    
    this.submitted = true;
    this.save();   
    return; 
  }

  gotoList() {
    this.router.navigate(['/list-student']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute  } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-student',
  standalone: false,
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent  implements OnInit {
  sid: number=0;
 //student:any= Student;
 student:any=Student;


  constructor(private route: ActivatedRoute,private router: Router,
    private studentService: StudentServiceService) { }

  ngOnInit() {

    this.student=new Student();
    this.sid=this.route.snapshot.params['sid'];
    this.studentService.getStudent(this.sid).subscribe(data=>{
     console.log(data);
     this.student=data;
        console.log(this.student)
      }, error => console.log(error));
  }

  updateStudent() {
    this.studentService.update(this.sid, this.student)
      .subscribe(data => {
        console.log(data);
        this.student = new Student();
        this.gotoList();
       
      }, error => console.log(error));
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

    this.updateStudent();    
  }

  gotoList() {
    this.router.navigate(['/list-student']);
   // this.router.navigate(['/student']);
  }
}

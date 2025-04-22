import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-sarch-student',
  standalone: false,
  templateUrl: './sarch-student.component.html',
  styleUrl: './sarch-student.component.css'
})
export class SarchStudentComponent implements OnInit {
  student:any=Student;
  searchResult: Student[]=[];
  searchKeyword: string = '';
  
  constructor(
    private studentService: StudentServiceService
  ) { }
  ngOnInit() {
   this.studentService.getStudentList().subscribe((res: any) => {
    this.student = res;
  });

}
getSearchStudent():void{
  setTimeout(()=>{
    if (this.searchKeyword === '') {
    this.searchResult = [];
  } else {
    //this.searchResult = this.student.filter((item: student) => this.searchKeyword.includes(item?.firstName));
    //this.searchResult = this.student.filter((x:any) => x.sname.includes(this.searchKeyword));
  
    this.searchResult = this.searchKeyword
  ? this.student.filter((x: any) =>
      x.sname.toLowerCase().includes(this.searchKeyword.toLowerCase())
    )
  : this.student;
  
  }
}, 500);

}
  }



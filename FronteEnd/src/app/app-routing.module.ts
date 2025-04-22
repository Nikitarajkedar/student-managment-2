import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentComponent } from './list-student/list-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { SarchStudentComponent } from './sarch-student/sarch-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ApphomeComponent } from './apphome/apphome.component';


const routes: Routes = [
//{path:'',redirectTo:'student',pathMatch:'full'},
  {path:'home',component:ApphomeComponent},
  {path:'list-student',component:ListStudentComponent},
  {path:'add-student',component:AddStudentComponent},
  {path:'search-student',component:SarchStudentComponent},
  {path:'student-detail/:sid',component:StudentDetailsComponent},
  {path:'update-student/:sid',component:UpdateStudentComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', redirectTo: '/home' }
 // { path: '**', redirectTo: '/student' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

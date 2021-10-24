import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student/intefaces/student.interface';
import { Teacher } from 'src/app/teacher/interfaces/teacher.interface';
import { StudentService } from 'src/app/student/services/student.service';
import { TeacherService } from 'src/app/teacher/services/teacher.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  student: Student = {
    fullName: '',
    userName: '',
    password: ''
  };
  teacher: Teacher = {
    fullName: '',
    userName: '',
    password: ''
  };
  edit: boolean = false;

  constructor(
    private studentService: StudentService,
    private teacherService: TeacherService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  submitStudent() {
    this.studentService.createStudent(this.student)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/student']);
        },
        err => console.log(err)
      )
  }
  submitTeacher() {
    this.teacherService.createTeacher(this.teacher)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/teacher']);
        },
        err => console.log(err)
      )
  }
}

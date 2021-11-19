import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-view-student',
  templateUrl: './welcome-view-student.component.html',
  styleUrls: ['./welcome-view-student.component.scss']
})
export class WelcomeViewStudentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  salir():void{
    this.router.navigate(['./login']);
  }

  irCursos():void{
    this.router.navigate(['./studentCourses']);
  }
}

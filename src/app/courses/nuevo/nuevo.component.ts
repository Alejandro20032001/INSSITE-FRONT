import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {
  //name = new FormControl('hhhhh')
  constructor() { }

  ngOnInit(): void {
  }
  mostrar(){
    //console.log(this.name.value)
    }

}

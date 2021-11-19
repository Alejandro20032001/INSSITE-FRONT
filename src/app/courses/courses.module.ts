import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoComponent } from './nuevo/nuevo.component';
import { FormControl, FormsModule, ReactiveFormsModule,FormGroup } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'

//import { NewCRoutingModule } from './new-c-routing.module';
//import { NativeDateModule} from '@angular/material'


@NgModule({
  declarations: [
    NuevoComponent,

  ],
  imports: [
    CommonModule,
    //NewCRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class CoursesModule { }

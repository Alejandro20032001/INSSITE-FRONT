import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoComponent } from './nuevo/nuevo.component';
//import { NewCRoutingModule } from './new-c-routing.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { NativeDateModule} from '@angular/material'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


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

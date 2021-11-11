import { Pipe, PipeTransform } from '@angular/core';
import { ViewSearchCourseComponent } from '../student/view-search-course/view-search-course.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    let date: Date=new Date();
    let msPerDay: number=1000*60*60*24;
    if (arg === '' || arg.length < 3 || arg.length !> 30) return value;
    const resultPosts = [];
   
    for (const course of value) {
    // console.log(" " + (course.dateStartEnroles.getTime()-date.getTime())/msPerDay);
     // if(Math.round((course.dateStartEnroles.getTime()-date.getTime())/msPerDay)==30){
        if (course.courseName.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
          resultPosts.push(course);
        };
        if (course.areaCourse.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
          resultPosts.push(course);
        };
     // };
    };
        return resultPosts;
  }


}

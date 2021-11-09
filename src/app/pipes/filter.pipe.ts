import { Pipe, PipeTransform } from '@angular/core';
import { ViewSearchCourseComponent } from '../student/view-search-course/view-search-course.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
    for (const course of value) {
      if (course.courseName.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
        resultPosts.push(course);
      };
      if (course.areaCourse.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
        resultPosts.push(course);
      };
    };
        return resultPosts;
  }


}

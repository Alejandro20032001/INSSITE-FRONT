import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    let date: Date = new Date();
    if (arg === '' || arg.length < 3 || arg.length !> 30) return value;
    const resultPosts = [];
    console.log(date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear());
    for (const course of value) {
     console.log(course.dateStartEnroles);
    var xMonth=course.dateStartEnroles.substring(5, 7);  
    var xYear=course.dateStartEnroles.substring(0, 4);  
    var xDate=course.dateStartEnroles.substring(8,10);
    console.log(xMonth+"  "+xYear+" "+xDate);
  if (xYear> date.getFullYear())  
    {  
      if (course.courseName.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
        resultPosts.push(course);
      };
      if (course.areaCourse.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
        resultPosts.push(course);
      };  
    }  
    else  
    {  
      if (xYear == date.getFullYear())  
      {   
        if (xMonth> date.getMonth()+1)  
        {  
          if (course.courseName.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
            resultPosts.push(course);
          };
          if (course.areaCourse.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
            resultPosts.push(course);
          };  
        }  
        else  
        {   
          if (xMonth == date.getMonth()+1)  
          {  
            if (xDate> date.getDate())  
            if (course.courseName.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
              resultPosts.push(course);
            };
            if (course.areaCourse.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
              resultPosts.push(course);
            };  
           };  
          }; 
        };
      };

    };
    if(resultPosts.length!=0){
       return resultPosts;
    }else{
      alert('El curso esta cerrado o no existe');
    }
  }
}

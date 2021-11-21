import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    let cont:number=0;
    let date: Date = new Date();
    if (arg === '' || arg.length < 1)  return value;
    const resultPosts = [];
    console.log(date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear());
    if (arg.length<30){
      for (const course of value) {
      
        let dateEnrole: Date =new Date(course.dateStartEnrole);
         console.log(course.dateStartEnrole);
      if (dateEnrole.getFullYear()> date.getFullYear())  
        {  
          if (course.courseName.toLowerCase().indexOf(arg.toLowerCase()) > -1 || course.areaCourse.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
            resultPosts.push(course);
          };
        }  
        else  
        {  
          if (dateEnrole.getFullYear() == date.getFullYear())  
          {   
            if (dateEnrole.getMonth()> date.getMonth()+1)  
            {  
              if (course.courseName.toLowerCase().indexOf(arg.toLowerCase()) > -1 || course.areaCourse.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                resultPosts.push(course);
              };
            }  
            else  
            {   
              if (dateEnrole.getMonth()+1 == date.getMonth()+1)  
              {  
                if (dateEnrole.getDate()> date.getDate())  
                if (course.courseName.toLowerCase().indexOf(arg.toLowerCase()) > -1 || course.areaCourse.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                  resultPosts.push(course);
                };
               };  
              }; 
            };
          };
    
        };
    }else{
      location.reload();
      window.alert('Tu busqueda no debe contener mas de 30 caracteres');
      return value;
    }
    if(resultPosts.length!=0){
      return resultPosts;
    }else{
      location.reload();
      alert("El curso no existe")
    }
  }
}



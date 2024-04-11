//factory pattern
            /*function Student(rno,str){
                var obj=new Object();
                obj.rollno=rno;
                obj.name=str;
                obj.getName=function(){
                    console.log(obj.name);
                }
                return obj;
            }*/

            //var s1=Student(1,"aaa");
            //console.log(s1 instanceof Student);
            //s1 just pretends to be an object

            //2.constructor
            function Student(rno,str){
               
              this.rollno=rno;
              this.name=str;
              this.getName=function(){
                  console.log(this.name);
              }  
          }
          var s1=new Student(1,"aaa");
          var s2=new Student(2,"bbbb");
          console.log(s1 instanceof Student);//t
          console.log(s1.rollno);//1
          console.log(s2.rollno);//2
          s1.rollno=100;
          console.log(s1.rollno);//100
          console.log(s2.rollno);//2
          s1.getName();
          s2.getName();
          console.log(s1.getName===s2.getName);//f
          //Prototype
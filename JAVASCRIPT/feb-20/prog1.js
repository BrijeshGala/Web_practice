//combi constructor and Prototype
function Student(rno,str){
  this.rollno=rno;
  this.name=str;
}
Student.prototype={
constructor:Student,
getName:function(){
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
console.log(s1.getName===s2.getName);//t
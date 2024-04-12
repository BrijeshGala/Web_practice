var students = {
  arr: [
      {
          name: "sachin",
          rollno: 10,
          marks: 90,
      },
      { 
          name: "sachin",
          rollno: 10,
          marks: 90
      },
      {
          name: "sachin",
          rollno: 10,
          marks: 90
      },
      {
          name: "sachin",
          rollno: 10,
          marks: 90
      }
  ],
  getallstudents: function () {
      return this.arr;
  },
  getstudent:function (rno) {
for(i=0;i<this.arr.length;i++){
  if(rno==this.arr[i].rollno){
      return this.arr[i];
  }
}
      
  }
};

module.exports = students;
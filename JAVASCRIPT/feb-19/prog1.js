var name="hello";
//literal
var obj={
    rollno:1,
    name:"aaa",
    getName:function(){
        console.log("Name="+this.name);
    }
}
console.log(obj.rollno);
obj.getName();
//configurable true
obj.color="red";
console.log(obj);
delete obj.color;
console.log(obj);

//enumearble true
for(x in obj){
    console.log(x+"="+obj[x]);
}

//Data properties
//set writable to false
var obj1={};
Object.defineProperty(obj1,"name",{
    writable:false,
    value:"test"
});
//alert(obj1.name);//test
obj1.name="bitcode";
//alert(obj1.name);//test

//Accessor properties
var book={
        year:2004
}
Object.defineProperty(book,"_year",{
    get:function(){
        alert("get");
        return this.year;
    },
    set:function(newValue){
        alert("set");
        this.year=newValue;
    }
});
alert(book._year);
book._year=2020;
alert(book.year);

//new keyword
/*var obj2=new Object();
obj2.rollno=2;
obj2.name="test";
obj2.getName=function(){
    console.log(this.name);
}
obj2.getName();
*/
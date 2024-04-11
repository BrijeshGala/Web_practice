var obj={
  name:"bitcode",
  getName:function(){
    var self=this;
    setTimeout(function(){
      console.log("timeout="+self.name);
    },1000);

  console.log("outside="+this.name);
  }
}
obj.getName();

//ES6
var obj={
  name:"bitcode",
  getName:function(){
    setTimeout(()=>{
      console.log("timeout"+this.name);
    });

    console.log("outside"+this.name);
  }
}
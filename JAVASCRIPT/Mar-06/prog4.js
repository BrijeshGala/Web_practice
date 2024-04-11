ul=document.getElementById("list");
      function Product(name,price){
        this.prodName=name;
        this.prodPrice=price;
      }
     
      if(localStorage.getItem("list")==null){
        var arr=[];
      }
      else{
        var arr=JSON.parse(localStorage.getItem("list"));
      }
      display();
      function funAdd(){
        var txtName=document.getElementById("txtName").value;
        var txtPrice=document.getElementById("txtPrice").value;
        var obj=new Product(txtName,txtPrice);
        arr.push(obj);
        var jObj=JSON.stringify(arr);
        localStorage.setItem("list",jObj);
       display();
      }
    function display(){
      var data=JSON.parse(localStorage.getItem("list"));
      var str="";
      for(i=0;i<data.length;i++){
        str+="<li>"+data[i].prodName+"*"+data[i].prodPrice+"</li>";
      }
      ul.innerHTML=str;
    }
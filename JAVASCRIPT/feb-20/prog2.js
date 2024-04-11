var ul=document.getElementById("ul1");
            ul.addEventListener("click",funClick,false);

            var btnAdd=document.getElementById("btnAdd");
            btnAdd.addEventListener("click",funAdd,false);

            var btnUpdate=document.getElementById("btnUpdate");
            btnUpdate.addEventListener("click",funUpdate,false);

            var btnDelete=document.getElementById("btnDelete");
            btnDelete.addEventListener("click",funDelete,false);



            var list=[];
            //constructor
            function Product(name,price){
                this.prodName=name;
                this.prodPrice=price;
            }
            function funAdd(){
                txtName=document.getElementById("txtName").value;
                txtPrice=document.getElementById("txtPrice").value;
                // var obj={prodName:txtName,
                //       prodPrice:txtPrice
                //      };

                    var obj=new Product(txtName,txtPrice);
                    list.push(obj);
                    display();
                    document.getElementById("txtName").value="";
                document.getElementById("txtPrice").value="";

            }
            function display(){
                var str="";
                for(i=0;i<list.length;i++){
                    str+="<li>"+list[i].prodName+"*"+list[i].prodPrice+"</li>";
                }
                ul.innerHTML=str;
            }
            function funClick(event){
                var x=event.target.textContent;
                var arr=x.split("*");
                document.getElementById("txtName").value=arr[0];
                document.getElementById("txtPrice").value=arr[1];

                document.getElementById("txtName").readOnly=true;
            }
            function funUpdate(){
                txtName=document.getElementById("txtName").value;
                newPrice=document.getElementById("txtPrice").value;
                for(i=0;i<list.length;i++){
                    if(list[i].prodName==txtName){
                        list[i].prodPrice=newPrice;
                    }
                }
                display();
                document.getElementById("txtName").value="";
                document.getElementById("txtPrice").value="";
                document.getElementById("txtName").readOnly=false;
            }
            function funDelete(){
                txtName=document.getElementById("txtName").value;
                for(i=0;i<list.length;i++){
                    if(list[i].prodName==txtName){
                        //delete code
                        list.splice(i,1);
                    }
                }
                display();
                document.getElementById("txtName").value="";
                document.getElementById("txtPrice").value="";
                document.getElementById("txtName").readOnly=false;
            }
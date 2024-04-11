
      var d1=document.getElementById("d1");

      function funForm(){
        bk=document.createElement("br");
        //Rollno
        var lblRollno=document.createElement("label");
        var txtRollno=document.createTextNode("Rollno:");
        lblRollno.appendChild(txtRollno);

        var inRollno=document.createElement("input");
        inRollno.setAttribute("type","text");
        //Name
        var lblName=document.createElement("label");
        var txtName=document.createTextNode("Name:");
        lblName.appendChild(txtName);

        var inName=document.createElement("input");
        inName.setAttribute("type","text");
        //Marks

        var lblMarks=document.createElement("label");
        var txtMarks=document.createTextNode("Marks:");
        lblMarks.appendChild(txtMarks);

        var inMarks=document.createElement("input");
        inMarks.setAttribute("type","text");
        //Year
        var lblYear=document.createElement("label");
        var txtYear=document.createTextNode("Year:");
        lblYear.appendChild(txtYear);

        var inYear=document.createElement("input");
        inYear.setAttribute("type","text");

        d1.appendChild(lblRollno);
        d1.appendChild(inRollno);
       

        d1.appendChild(lblName);
        d1.appendChild(inName);
       

        d1.appendChild(lblMarks);
        d1.appendChild(inMarks);
       

        d1.appendChild(lblYear);
        d1.appendChild(inYear);
       

        d1.insertBefore(bk,lblName);
        d1.insertBefore(bk,lblMarks);
        d1.insertBefore(bk,lblYear);



      }
      function funBtn(){
        var insertBtn=document.createElement("input");
        insertBtn.setAttribute("type","button");
        insertBtn.setAttribute("value","Insert");
        insertBtn.setAttribute("onclick","funInsert()");
        d1.appendChild(insertBtn);

        var plusBtn=document.createElement("input");
        plusBtn.setAttribute("type","button");
        plusBtn.setAttribute("value","+");
        plusBtn.setAttribute("onclick","fun()");
        d1.appendChild(plusBtn);

      }
      function funAdd(){
          funForm();
          funBtn();
      }
      function fun(){
        funForm();
      }
      //array
      var stud=[{rollno:1,name:"aaa",marks:10,yr:2022},
      {rollno:2,name:"bbb",marks:20,yr:2023},
      {rollno:3,name:"ccc",marks:30,yr:2021}];
      function funShow(){
        var str="<tr><td>Rollno</td><td>Name</td><td onclick=funSort(event)>Marks</td><td onclick=funSort(event)>Year</td></tr>";
        for(i=0;i<stud.length;i++){
          str+="<tr><td>"+stud[i].rollno+"</td><td>"+stud[i].name+"</td><td>"+stud[i].marks+"</td><td>"+stud[i].yr+"</td></tr>";
        }
        document.querySelector("table").innerHTML=str;
      }
      function funInsert(){
        var arr=d1.querySelectorAll("input[type=text]");
       
        for(i=0;i<4;i=i+4){
         
          var obj={"rollno":arr[i].value,
                   name:arr[i+1].value,
                  marks:arr[i+2].value,
                  yr:arr[i+3].value};

        }
       
        stud.push(obj);
       
      }
      function funSort(event){
        var col=event.currentTarget.textContent;
        if(col=='Marks'){
          stud.sort(function(a,b){
              return b.marks-a.marks;
          })
          funShow();
        }
        else if(col=='Year'){
          stud.sort(function(a,b){
              return b.yr-a.yr;
          })
        }
        funShow();
      }
      
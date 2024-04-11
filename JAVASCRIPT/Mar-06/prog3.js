window.Storage
      function funLocal(){
        count=localStorage.VCount;
      // count= localStorage.getItem("VCount")
        if(count==undefined){
            localStorage.VCount=1;
           // localStorage.setItem("VCount",1)
        }
      else{
        localStorage.VCount=parseInt(count)+1;
      }
      }
      function funSession(){
        count=sessionStorage.VCount;
        if(count==undefined){
            sessionStorage.VCount=1;
        }
      else{
        sessionStorage.VCount=parseInt(count)+1;
      }
      }
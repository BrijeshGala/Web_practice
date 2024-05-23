// 2 may
// import './App.css';
// import ProdArray from './components/ProdArray';

// function App(){
//   return (
//             <div>Hello
//             <p>This is React Application</p>
//             <ProdArray/>
//             </div>
//   );
// }
  

// export default App;

//3 may
import { useState } from 'react';
import './App.css';
import ProdArray from './components/ProdArray';
import NewProduct from './components/NewProduct';

function App() {
 
  let products=[
    {prodName:"marker",prodPrice:100},
    {prodName:"pens",prodPrice:200},
    {prodName:"colors",prodPrice:500}
 ];
 let [prodArr,setProdArr]=useState(products);

let count=0;
  let [btnCount,setBtnCount]=useState(count)

  let funClick=()=>{
    btnCount++;
    setBtnCount(btnCount);
    console.log("btn click="+btnCount);
  }

  //conditional rendering
  let [showBtn,setShowBtn]=useState(false);
  let funShow=()=>{
    setShowBtn(!showBtn);
  }
  let [addBtn,setAddBtn]=useState(false);
  function funAdd(){
    setAddBtn(!addBtn);
  }
  //inserting in an array
  function getObj(newValue){
    console.log(newValue);
   setProdArr([...prodArr,newValue]);

    console.log(prodArr);
  }
  function getProd(newX){
    for(let i=0;i<prodArr.length;i++){
      if(prodArr[i].prodName===newX.prodName){
        prodArr[i].prodPrice=newX.prodPrice;
      }
    }
    setProdArr(prodArr);
   
  }
  let delObj=(newObj)=>{
    for(let i=0;i<prodArr.length;i++){
      if(prodArr[i].prodName===newObj.prodName){
        prodArr.splice(i,1);
      }
    }
    setProdArr(prodArr);
  }
  return (
            <div>Hello
            <p>This is React Application</p>
            <p>Dt:{new Date().toLocaleDateString()}</p>
           
            <input type="button" value="Show Count" onClick={funClick}></input>
            <p>count={btnCount}</p>

            <input type="button" value="Show products" onClick={funShow}></input>
            {
             showBtn && <ProdArray data={prodArr} upProd={getProd} delProd={delObj}/>
            }
            <input type="button" value="AddProduct" onClick={funAdd}></input>
            {
              addBtn && <NewProduct insertObj={getObj}/>
            }
            </div>


  );
}

export default App;



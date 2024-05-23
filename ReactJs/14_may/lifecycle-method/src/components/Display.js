import { useEffect,useState } from "react";
import "../App.css";

function Display(){
 
  let [prodArr,setProdArr]=useState([]);
  let imgStyle={"width":"100px","height":"100px"};

  async function getAllRecords(){
    var result = await fetch("https://dummyjson.com/products");
    var out = await result.json();
    setProdArr(out.products);
    console.log(out.products);
    console.log(prodArr.length);
  }
  useEffect(()=>{
    getAllRecords();
  },[]);
  return(
    <>
    <table border="2">
      <tr>
        <td>Id</td>
        <td>Title</td>
        <td>Price</td>
        <td>Image</td>
      </tr>
      {
        
          prodArr.map((x)=>(
            <tr key={x.id}>
             <td>{x.id}</td>
             <td>{x.title}</td>
             <td>{x.price}</td>
             <td><img src={x.thumbnail} style={imgStyle}></img></td>
             </tr>

          ))
      }

    </table>
    </>
  )
}
export default Display;
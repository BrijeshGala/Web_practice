//2 may
// import "./ProdArray.css";

// function ProdArray(){
//   // var list="Hello";
//   // return (
//   //   // <ul>
//   //   //   <li>red</li>
//   //   //   <li>yellow</li>
//   //   // </ul>
//   //   <div>
//   //     <h2>{list}</h2>
//   //     <p>sum:{2+2}</p>
//   //   </div>
//   // );
//   //multiline
//   var list=(
//     <ul>
//       <li>red</li>
//       <li>green</li>
//       <li>orange</li>
//     </ul>
//   );
//   var myStyle={"color":"red",backgroundColor:"yellow"};
//   const colors=["Red", "Yellow", "Blue", "Green"];
//   var funClick=()=>{
//     alert("its Clicked");
//   }
  
//   return(
//     // <div>
//     //   <h2>{list}</h2>
//     //   <p>sum:{2+2}</p>
//     //   <div>style</div>
//     // </div>
//     <div>
//       <h2>{list}</h2>
//       <p>sum:{2+2}</p>
//       <div style={myStyle}><ul>
//         {
//           colors.map((x,index)=>(
//             <li>{x}{index}</li>
//           ))
//         }
//         </ul>
//     </div>
//     <input type="button" value="Click" onClick={funClick}></input>
//     </div>
//   )
// }
// export default ProdArray;

//3 may
import { useEffect, useState } from "react";
import "./ProdArray.css";
import styleCss from "./ProdArray.module.css";

function ProdArray(props){
    let products=props.data;
         //inline
         var myStyle={backgroundColor:"lightblue",width:"100%"}
         function funEdit(x){
            console.log(x.prodName,x.prodPrice);
            var pr=prompt("Enter new Price:");
            x.prodPrice=pr;
          props.upProd(x);
         }
         function funDelete(x){
            console.log(x.prodName,x.prodPrice);
            props.delProd(x);
         }
      useEffect(()=>{
       products=props.data;
       // setProducts(arr);
      },[]);
    return(
        <div >
           <table border="2" className="table">
            <tr>
                <td>Index</td>
                <td>Name</td>
                <td>Price</td>
                <td>Action</td>
            </tr>
            {
                products.map((x,index)=>(  
                <tr key={x.prodPrice} className={styleCss.table_style}>
                        <td>{index}</td>
                        <td>{x.prodName}</td>
                        <td>{x.prodPrice}</td>
                        <td><a href="" onClick={(event)=>{event.preventDefault();funEdit(x);}}>Edit</a>/<a href="" onClick={(event)=>{event.preventDefault();funDelete(x);}}>Delete</a></td>
                    </tr>
                ))
            }
           
           </table>
        </div>
    );
}

export default ProdArray;

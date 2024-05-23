import { useEffect,useState} from "react";
function Display(props){
  let prodArr=props.data;
  let imgStyle={"width":"100px","height":"100px"};
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
        prodArr.map((x)=>{
          <tr key={x.id}>
            <td>{x.id}</td>
            <td>{x.title}</td>
            <td>{x.price}</td>
            <td><img src={x.thumbnail}style={imgStyle}></img></td>
          </tr>
        })
      }
    </table>
    
    </>
  )
}
export default Display;
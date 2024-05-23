// import { useState } from "react";
// import Table from 'react-bootstrap/Table';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import UpdateProducts from "./UpdateProducts";
// import MyModal from "./MyModal";

// function Display(props) {
//     let prodArr = props.data;
//     let imgStyle = { width: "100px", height: "100px" };

//     let [rowFlag, setRow] = useState(false);
//     let [rowData, setRowData] = useState({});

//     function rowClick(x) {
//         setRow(true);
//         setRowData(x);
//         console.log(x);
//     }
//     function funSort(){
//         prodArr.sort(function(a,b){
//             return b.price-a.price;
//         });
//         console.log(prodArr);
//     }

//     return (
//         <div className="container">
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Title</th>
//                         <th>Price</th>
//                         <th>Image</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {prodArr.map((x) => (
//                         <tr key={x.id} onClick={() => rowClick(x)}>
//                             <td>{x.id}</td>
//                             <td>{x.title}</td>
//                             <td>{x.price}</td>
//                             <td><img src={x.thumbnail} style={imgStyle} alt={x.title} /></td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//             {rowFlag && <MyModal row={rowData} show={rowFlag} onHide={() => setRow(false)} />}
//         </div>
//     );
// }

// export default Display;

import { useState } from "react";
import UpdateProducts from "./UpdateProducts";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyModal from "./MyModal";

function Display(props) {
    let prodArr = props.data;
    let imgStyle = { width: "100px", height: "100px" };

    let [rowFlag, setRow] = useState(false);
    let [rowData, setRowData] = useState({});
    let [sortOrder, setSortOrder] = useState('asc'); // State to manage sorting order

    function rowClick(x) {
        setRow(true);
        setRowData(x);
        console.log(x);
    }

    function sortProducts() {
        const sortedArr = [...prodArr].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        return sortedArr;
    }

    function toggleSortOrder() {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    }

    const sortedProdArr = sortProducts();

    return (
        <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th onClick={toggleSortOrder} style={{ cursor: 'pointer' }}>
                            Price {sortOrder === 'asc' ? '↑' : '↓'}
                        </th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedProdArr.map((x) => (
                        <tr key={x.id} onClick={() => rowClick(x)}>
                            <td>{x.id}</td>
                            <td>{x.title}</td>
                            <td>{x.price}</td>
                            <td><img src={x.thumbnail} style={imgStyle} alt={x.title} /></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {rowFlag && <MyModal row={rowData} show={rowFlag} onHide={() => setRow(false)} />}
        </div>
    );
}

export default Display;


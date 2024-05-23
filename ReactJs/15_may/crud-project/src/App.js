import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Records from './components/Records';
import Home from './components/Home';
import AddProducts from './components/AddProducts';
import { Route, Routes } from 'react-router-dom';
import { useEffect,useState} from "react";



function App() {
  let [inFlag,setInFlag]=useState(false);
  function funInsert(){
    setInFlag(!inFlag);
  }
  return (
    <>
      <h3>React Product Application</h3>
      <input type="button" value="Insert" onClick={funInsert}></input>
      {
        inFlag && <AddProducts/>
      }
      { <Routes>
        <Route path="/allProducts" Component={Records}></Route>
        <Route path="/insertProduct"></Route>
        <Route path="/getProducts/:limit/:skip" Component={Records}></Route>
        <Route path="/" Component={Home}></Route>
      </Routes> }

    </>
  );
}

export default App;

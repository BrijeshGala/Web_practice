import React from 'react';
import { NavLink } from 'react-router-dom';

function RouteLink(){

  return (
    <nav>
      <ul>
        <li>
          <NavLink  to="/" exact >Home</NavLink>
        </li>
        <li>
          <NavLink to="/allProducts">AllProducts</NavLink>
        </li>
        <li>
          <NavLink to="/Search">Search</NavLink>
        </li>
      </ul>
    </nav>
  );
};export default RouteLink;
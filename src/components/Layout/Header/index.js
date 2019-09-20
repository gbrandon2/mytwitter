import React from 'react';



function Header() {
  return (
   <header className="header">
     <nav className="nav">
       <ul className="menu">
         <li className="menu-item">
         <a href="#"> Login</a>
         </li>
         <li className="menu-item">
         <a href="#">Sign up</a>
         </li>
         <li className="menu-item">
         <a href="#">Feed</a>
         </li>
         
       </ul>
     </nav>
   </header>
  );
}

export default Header;
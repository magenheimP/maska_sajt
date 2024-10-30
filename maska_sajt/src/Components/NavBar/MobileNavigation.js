 //MobileNavigation.js

 import NavLinks from "./NavLinks";
 import './NavBar.css';
 import {MdOutlineMenu} from 'react-icons/md'
 import {MdClose} from 'react-icons/md';
 import { useState } from "react";






 const MobileNavigation = () =>{

    const [click, setClick] = useState(false);

    const Hamburger = <MdOutlineMenu className="HamburgerMenu"
    size="30px" 
    color="black"
    onClick={() => setClick(!click) }
    />


    const Close = <MdClose className="HamburgerMenu"
    size="30px" color="black"
    onClick={() => setClick(!click)}
   
   />
   

   const closeMenu = () => setClick(false)
     return(
        <nav className="MobileNavigation">
            <h2 className="logo">Logo</h2>   {/* TODO zameniti sa <img> slika logo-a */}
            { click ? Close : Hamburger}
            {click && <NavLinks isClicked={true} closeMenu={closeMenu}/>}
        </nav>                  

     )
 } 

 export default MobileNavigation;
 //DesktopNavigation.js

 import NavLinks from "./NavLinks";
 import './NavBar.css';

 const DesktopNavigation = () =>{
     return(
        <nav className="DesktopNavigation">
            <h2 className="logo">Logo</h2>   {/* TODO zameniti sa <img> slika logo-a */}
            <NavLinks />
        </nav>                  

     )
 } 

 export default DesktopNavigation;


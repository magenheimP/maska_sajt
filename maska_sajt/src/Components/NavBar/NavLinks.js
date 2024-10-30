 //NavLinks.js

 import './NavBar.css';

 const NavLinks = ({isClicked, closeMenu}) =>{
     return(
         <nav className="NavLinks">
         <ul className='text-white'>
             <li onClick={()=> isClicked && closeMenu()}>
                 <a className='text-white' href="/">Home</a>
             </li>
             <li onClick={()=> isClicked && closeMenu()}>
                 <a href="/#services">Services</a>
             </li>
             <li onClick={()=> isClicked && closeMenu()} >
                 <a href="/#about">About Us</a>
             </li>
             <li onClick={()=> isClicked && closeMenu()}>
                 <a href="/#contact">Contact Us</a>
             </li>
         </ul>
     </nav>
     )
 }

 export default NavLinks;

 //NavLinks.js

 import './NavBar.css';
 import {Link} from 'react-router-dom';

 const NavLinks = ({isClicked, closeMenu}) =>{
     return(
         <nav className="NavLinks">
         <ul className='text-yellow-200'>
             <li onClick={()=> isClicked && closeMenu()}>
                 <Link  to="/"className='text-[#f4cf8c]'>Početna</Link>
             </li>

             <li onClick={()=> isClicked && closeMenu()}>
                 <Link to={'menu'} className='text-[#f4cf8c]' >Meni</Link>
             </li>

             <li onClick={()=> isClicked && closeMenu()} >
                 <Link to={'program'} className='text-[#f4cf8c]' >Program</Link>
             </li>

             <li onClick={()=> isClicked && closeMenu()} >
                 <Link to={'galery'} className='text-[#f4cf8c]' >Galerija</Link>
             </li>

             <li onClick={()=> isClicked && closeMenu()} >
                 <Link to={'organize'} className='text-[#f4cf8c]' >Organizujte Vašu proslavu</Link>
             </li>

             <li onClick={()=> isClicked && closeMenu()} >
                <Link to={'special'} className='text-[#f4cf8c]'>Specijalna ponuda</Link>
             </li>

             <li onClick={()=> isClicked && closeMenu()} >
                 <Link to={'contact'} className='text-[#f4cf8c]'>Kontakt</Link>
             </li>
             
             <li onClick={()=> isClicked && closeMenu()}>
                 <Link to={'about_us'} className='text-[#f4cf8c]'>O nama</Link>
             </li>
         </ul>
     </nav>
     )
 }

 export default NavLinks;

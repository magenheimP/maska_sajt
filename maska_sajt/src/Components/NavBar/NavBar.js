 //NavBar.js
 import DesktopNavigation from "./DesktopNavigation";
 import MobileNavigation from "./MobileNavigation";

 const NavBar = () => {
    return(
        <div className="z-50">
            
            <DesktopNavigation/>
        
            <MobileNavigation/>

        </div>
    )
}

export default NavBar;
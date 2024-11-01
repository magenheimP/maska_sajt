import { useState, useEffect } from "react";

const Scroller = ({ images, shouldShowLogo }) => {
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 1500);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const verticalLogo = <img src="./logo/beli.png" alt="logo" className={`block md:hidden w-[100%] z-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}/>
    const horizontalLogo = <img src="./logo/beli.png" alt="logo" className={`hidden md:block w-[33%] z-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}/>

    return ( 
        <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
            {shouldShowLogo && verticalLogo}
            {shouldShowLogo && horizontalLogo}
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slika ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                />
            ))}
        </div>
    );
}
 
export default Scroller;
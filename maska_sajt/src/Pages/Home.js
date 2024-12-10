import Scroller from '../Components/Scroller';

const Home = () => {
    const horizontalImages = [
        "./resources/horizontal/DSC_4127.jpg",
        "./resources/horizontal/2_horizontal_low_rez.jpg"
    ];

    const verticalImages = [
        "./resources/vertical/1_vertical_low_res.jpg",
        "./resources/vertical/2_vertical_low_res.jpg"
    ];

    return (
      <>
        <div className="block md:hidden absolute inset-0">
            <Scroller images={verticalImages} shouldShowLogo={true} />
        </div>
        <div className="hidden md:block absolute inset-0">
            <Scroller images={horizontalImages} shouldShowLogo={true} />
        </div> 
      </>   
    );
}
 
export default Home;
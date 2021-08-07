import img1 from "../Assets/Rome.jpg";
import img2 from "../Assets/UK.jpg";
import img3 from "../Assets/Paris.jpg";


const DestinationsData = [
    {
      img: img1,
      alt: "Rome",
      location: "Rome, Italy",
      price: "$5,42k",
      icon: <i className="fas fa-location-arrow"></i>,
      duration: "10 Days Trip"
    },
    {
      img: img2,
      alt: "London",
      location: "London, UK",
      price: "$4.2k",
      icon: <i className="fas fa-location-arrow"></i>,
      duration: "12 Days Trip"
    },
    {
      img: img3,
      alt: "Paris",
      location: "Paris, France",
      price: "$15k",
      icon: <i className="fas fa-location-arrow"></i>,
      duration: "28 Days Trip"
    }
  ]
  
  export default DestinationsData;

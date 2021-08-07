import DestinationsData from "../Data/DestinationsData";

function Destinations() {
    return (
        <section id="destinations">
            <div className="destination-container">
                <div className="destination-heading">
                    <h3>Top Selling</h3>
                    <h2>Top Destinations</h2>
                </div>
                <div className="destination-content-wrapper">
                    {DestinationsData.map((destination, index) => {
                        return (
                            <div className="destination-card" key={index}>
                                <div><img src={destination.img} /></div>
                                <div className="destination-sub-card">
                                    <div className="destination-sub-card1">
                                        <p>{destination.location}</p>
                                        <span>{destination.price}</span>
                                    </div>
                                    <div className="destination-sub-card2">
                                        <span>{destination.icon}</span>
                                        <p>{destination.duration}</p>
                                    </div>
                                </div>
                                    
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Destinations;

import Trip_Data from "../Data/Book_A_Trip_Data";
import Trip_Img from "../Assets/Book_a_Trip.png";

function Trip() {
    return (
        <section>
            <div className="trip-container" id="trips">
                <div className="trip-content-wrapper">
                    <div className="trip-main-content">
                        <h3>Easy and Fast</h3>
                        <h1>Book your next trip in 3 easy steps</h1>
                        {Trip_Data.map((trip, index) => {
                            return (
                                <div className="trip-sub-content" key={index}>
                                    <img src={trip.img} />
                                    <div>
                                        <h4>{trip.title}</h4>
                                        <p>{trip.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="trip_img">
                        <img src={Trip_Img} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trip;

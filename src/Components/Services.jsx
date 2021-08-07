import ServicesData from "../Data/ServicesData";

function Services() {
    return (
        <section id="services">
            <div className="services-container">
                <div className="services-heading">
                    <h3>Category</h3>
                    <h2>We Offer Best Services</h2>
                </div>
                <div className="service-content-wrapper">
                    {ServicesData.map((services, index) => {
                        return (
                            <div className="service-card" key={index}>
                                <img src={services.img} />
                                <h2>{services.title}</h2>
                                <p>{services.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services;

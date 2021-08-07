import client1 from "../Assets/client1.png";
import client2 from "../Assets/client2.jpg";
import client3 from "../Assets/client3.png";
import client4 from "../Assets/client4.jpg";
import client5 from "../Assets/client5.png";
import client6 from "../Assets/client6.jpg";

function Clients() {
    return (
        <section>
            <div className="clients-container">
                <div className="clients-heading">
                    <h1>Our Clients</h1>
                </div>
                <div className="clients-wrapper">
                    <img src={client1} alt="" />
                    <img src={client2} alt="" />
                    <img src={client3} alt="" />
                    <img src={client4} alt="" />
                    <img src={client5} alt="" />
                    <img src={client6} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Clients;

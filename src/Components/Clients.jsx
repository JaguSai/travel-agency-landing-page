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
                    <img src={client1} alt="Client Image1" />
                    <img src={client2} alt="Client Image2" />
                    <img src={client3} alt="Client Image3" />
                    <img src={client4} alt="Client Image4" />
                    <img src={client5} alt="Client Image5" />
                    <img src={client6} alt="Client Image6" />
                </div>
            </div>
        </section>
    )
}

export default Clients;

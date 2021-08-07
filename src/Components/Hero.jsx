import Traveller from "../Assets/Traveller1.png";

function Hero() {
    return (
        <section className="hero-section" id="home">
            <div className="hero-container">
                <div className="hero-headings">
                    <h4>Best Destinations around the world</h4>
                    <h1>Travel, enjoy and live a new and full life</h1>
                    <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                    <button className="btn1">Find out more</button>
                    {/* <button className="btn2">Play Demo</button> */}
                </div>
                <div className="hero-image">
                    <img src={Traveller} alt="Traveller" />
                </div>
            </div>
        </section>
    )
}

export default Hero;

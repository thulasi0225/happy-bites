import Navbar from "../utilities/Navbar";
import Footer from "../utilities/Footer";
import FeatureCard from "../utilities/FeatureCard";

import person1 from "../../img/person-1.jpg";
import person2 from "../../img/person-2.jpg";
import "../css/About.css";

const About = () => {
  return (
    <>
      <div>
        <header className="showcase-main">
          <Navbar />
          <div className="content">
            <h1 className="content-heading">
              <span id="content-text">About</span> Us
            </h1>
          </div>
        </header>
        <h1
          className="content-heading"
          style={{ fontWeight: "350", margin: "15px" }}
        >
          <span id="content-text"> Benefits</span> From Us
        </h1>

        {/* features - CARD */}
        <div className="list">
          <FeatureCard
            title="Delivery Time"
            description="Delivery times vary based on traffic,the restaurant's ability to prepare food and weather conditions."
            icon="fa-solid fa-truck-fast"
            benefits={true}
          />
          <FeatureCard
            title="Unbeliveable Offers"
            description="All prices listed on our website reflect a 3.5% cash discount. Paying with credit card will result in a 3.5% increase on all menu pricing."
            icon="fa-solid fa-tag"
            benefits={true}
          />
          <FeatureCard
            title="Office Hangouts"
            description="We specialize group lunch deliveries and drop off catering! Give our local catering manager a call for more details regarding keeping your office well fed!"
            icon="fa-solid fa-utensils"
            benefits={true}
          />
          <FeatureCard
            title="Phone Orders"
            description="All phone-in-orders will incur a $1.99 phone-in-fee. Orders placed online, or with our app, are not subject to this fee"
            icon="fa-solid fa-phone"
            benefits={true}
          />
        </div>
        <h1
          className="content-heading"
          style={{ fontWeight: "350", margin: "15px" }}
        >
          What Our<span id="content-text"> Guests</span> Say
        </h1>

        {/* Guests section */}
        <section id="testimonials">
          <div className="container">
            <div className="testimonials bg-primary">
              <img src={person1} alt="linda" />
              <p>
                "Food was fresh, the Chicken Pepperoni is amazing and homemade,
                even the toast was good! Oh, and the Hot Wings! Everything we
                ordered was fresh and delicious. Highly recommend! Definitely
                coming back.”
              </p>
            </div>

            <div className="testimonials bg-primary">
              <img src={person2} alt="golmes" />
              <p>
                “Normally wings are wings, but theirs are lean meaty and tender,
                and delicious homemade teriaki glaze. Gluten free pizza way
                better than most. Came here after finding the best gluten free
                muffins anywhere"
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default About;

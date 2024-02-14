import { Link } from "react-router-dom";

import Navbar from "../utilities/Navbar";
import MenuCard from "../utilities/MenuCard";
import FeatureCard from "../utilities/FeatureCard";
import Footer from "../utilities/Footer";

import "../css/utilities.css";
import "../css/Home.css";
import "../../img/chicken-pepperoni.jpg";
import "../css/mobile/mobile.css";

const Home = () => {
  return (
    <>
      {/* holds nav and bg-img */}
      <header className="showcase-main">
        <Navbar />
        <div className="content">
          <h1 className="content-heading">
            <span id="content-text">Order & Enjoy </span>
            <br /> our yummy food in your tummy
          </h1>
          <Link to="/menu" className="btn-link">
            Order Now &nbsp;
            <i className="fa-solid fa-circle-chevron-right"></i>
          </Link>
        </div>
      </header>
      {/* menu card starts */}
      <section className="list">
        <MenuCard title="MOMOS" img="../../img/chicken-steamed-momos.jpg" />
        <MenuCard title="PIZZAS" img="../../img/chicken-pepperoni.jpg" />
        <MenuCard title="BITES & BEVERAGES" img="../../img/mojito.jpg" />
      </section>

      <div className="heading">
        <span id="content-text">Hungry?</span> Grab one!
      </div>

      {/* features -> CARD */}
      <div className="list">
        <FeatureCard
          icon="fa-solid fa-magnifying-glass"
          title="Search"
          description="You search for whatever you want to eat and we'll find you the best delivery and takeout restaurants near you."
        />
        <FeatureCard
          icon="fa-solid fa-book-open"
          title="Browse"
          description="Browse our ratings and reviews. You can also make it easy for yourself and pick the place with the coolest name."
        />
        <FeatureCard
          icon="fa-solid fa-circle-check"
          title="Select"
          description="Take a good look at the menu, click whatever you want to eat and drink, and head to the checkout"
        />
        <FeatureCard
          icon="fa-solid fa-thumbs-up"
          title="Enjoy"
          description="Enjoy your food. This is the part where you get to eat your food while basking in the warm glow of time not spent cooking."
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;

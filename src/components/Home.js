import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <section className="section-container">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="btn-container">
          <button className="shop btn">Shop Now</button>
          <button className="category btn">Category</button>
        </div>
        <p>Also Available On</p>
        <div className="png">
          <img src="./images/amazon.png" alt="amazon" />
          <img src="./images/flipkart.png" alt="flipkart" />
        </div>{" "}
      </section>
      <div>
        <img src="./images/hero-image.png" alt="shoe" />
      </div>
    </div>
  );
};

export default Home;

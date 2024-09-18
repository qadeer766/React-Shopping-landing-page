import React from "react";
import facebook from "./flipkart.png";
import amazon from "./amazon.png";
import bag from "./pexels-sora-shimazaki-5926245-removebg-preview.png"

export default function Hero() {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>DISCOVER DEALS, TRANSFORM YOUR WORLD!</h1>
        <p>
          Unlock exclusive savings and incredible products that elevate your
          lifestyle. Shop smart, live better!
        </p>

        <div className="hero-btn">
           <button>Shop Now</button>
           <button className="secondary-btn">Category</button>
       </div>

       <div className="shopping"><p >Also Available On</p></div>


        <div className="brand-icons">
            <img src={facebook} alt="facebook" />
            <img src={amazon} alt="amazon" />
        </div>


      </div>
      <div className="hero-img">
        <img src={bag} alt="" />
      </div>
    </main>
  );
}

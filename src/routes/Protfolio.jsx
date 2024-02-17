import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Portfolio = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Portfolio</h2>
      <div className="row">
        {/* Stocks Section */}
        <div className="col-md-6">
          <h3>Stocks</h3>
          <p>
            As we grow older, it's crucial to diversify our income sources, and
            I am no exception among investors worldwide. My investment strategy
            is heavily focused on the stock market, particularly in companies
            related to electric vehicles (EV) and technology that are shaping
            our future and that of our descendants. According to data from
            Worldometer, as of 2024, the world has only 47 years of oil reserves
            left. This finite supply of oil underscores the importance of
            exploring renewable energy sources to sustain our future needs.
            While this isn't financial advice, it seems evident that investing
            in companies like Tesla, which are at the forefront of renewable
            energy, is a wise decision.
          </p>
          <p>
            <strong>Stocks:</strong>
          </p>
          <ul>
            <li>Tesla</li>
            <li>Lucid</li>
            <li>Fisker Inc</li>
            <li>EVGO Inc</li>
            <li>Rivian Automotives</li>
          </ul>
        </div>

        {/* Businesses Section */}
        <div className="col-md-6">
          <h3>Businesses</h3>
          {/* Ones I Own */}
          <div className="mb-3">
            <h4>Ones I Own</h4>
            <p>
              <strong>Trans Voyage Taxi</strong>
            </p>
            <p>
              I take pride in being a partner at Trans Voyage Taxi, a
              transportation service provider operating throughout the Denver
              Metro Area in Colorado, USA.{" "}
            </p>
            <p>
              <strong>Old Alex Hub, LLC</strong>
            </p>
            <p>
              Owning Old Alex Hub has provided me with extensive growth
              opportunities. This enterprise oversees the stock market, Trans
              Voyage Taxi, and all future ventures I personally engage in or
              plan to be involved with.
            </p>
          </div>
          {/* Ones I Helped Start */}
          <div className="mb-3">
            <h4>Ones I Helped Start</h4>
            <p>
              <strong>Denver Taxi & Alpine Taxi</strong>
            </p>
            <p>
              I've played a pivotal role as a counselor in establishing those
              twin companies, offering guidance to the owners of the respective
              businesses.
            </p>
            <p>
              <strong>Green Taxi Cooperative</strong>
            </p>
            <p>
              As the General Manager of Green Taxi, I was instrumental in its
              launch, guiding it towards operational success. My contributions
              included authoring its manuals, standard operating procedures
              (SOPs), developing its marketing strategies, and establishing a
              robust hiring department.{" "}
            </p>
          </div>
          {/* Ones I Reformed */}
          <div className="mb-3">
            <h4>Ones I Reformed</h4>
            <p>
              <strong>Mile High Cab, Inc</strong>
            </p>
            <p>
              As the General Manager, the board of directors tasked me with
              implementing comprehensive reforms. This included removing any
              underperforming members and recruiting skilled team players, as
              well as overhauling our financial and operational practices.
              Notably, I embraced this challenge at the young age of 22.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

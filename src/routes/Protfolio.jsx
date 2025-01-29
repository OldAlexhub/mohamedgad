import React from "react";


const Portfolio = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Portfolio</h2>
      <div className="row">
        {/* Stocks Section */}
        <div className="col-md-6">
          <h3>Stocks</h3>
          <p>
            As we navigate through life, it becomes essential to diversify income sources. 
            My investment strategy is strongly oriented towards the stock market, with a focus 
            on companies driving technological innovation and shaping the future of various 
            industries. Given the rapid advancements in technology and the shift towards 
            sustainable energy solutions, I have concentrated my investments in firms that 
            are leaders in technology and automotive sectors. This approach aligns with my 
            belief in the enduring potential of these industries.
          </p>
          <p>
            My investment philosophy is centered around long-term growth and sustainable business models. 
            I prioritize companies that not only exhibit strong financial performance but also are pioneers 
            in their industries, driving change and technological advancements.
          </p>
          <p>
            These investments have shown consistent growth in the past few years. For instance, Tesla's 
            continued innovation in electric vehicles and energy storage solutions has proven to be a key 
            driver of its success. Similarly, Amazon's dominance in e-commerce and cloud computing services 
            positions it as a leader in the global tech industry.
          </p>
          <p>
            Looking ahead, I am keeping an eye on emerging sectors such as artificial intelligence, 
            renewable energy, and healthcare innovation, which I believe will play a pivotal role in shaping 
            the global economy in the coming decades. My strategy involves staying informed on key trends 
            and adjusting my portfolio to capitalize on long-term opportunities.
          </p>
          <p>
            <strong>Current Investments:</strong>
          </p>
          <ul>
            <li>Amazon (AMZN)</li>
            <li>Moderna (MRNA)</li>
            <li>Salesforce (CRM)</li>
            <li>Microsoft (MSFT)</li>
            <li>Tesla (TSLA)</li>
            <li>Nvidia (NVDA)</li>
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

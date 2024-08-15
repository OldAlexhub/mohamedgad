import React from "react";

const Sentiment = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", margin: 0 }}>
      <iframe
        src="https://mohamedgad.shinyapps.io/AISentimentmachine/"
        style={{ width: "100vw", height: "100vh", border: "none" }}
        title="Dashboard"
      ></iframe>
    </div>
  );
};

export default Sentiment;

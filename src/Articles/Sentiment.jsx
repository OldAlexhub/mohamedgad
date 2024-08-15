import React from "react";

const Sentiment = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", margin: 0, padding: 0 }}>
      <iframe
        src="https://mohamedgad.shinyapps.io/AISentimentmachine/"
        style={{ width: "100%", height: "100%", border: "none", margin: 0, padding: 0 }}
        title="Dashboard"
      ></iframe>
    </div>
  );
};

export default Sentiment;

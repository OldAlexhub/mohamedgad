import React from "react";

const USElections = () => {
  return (
    <div style={{ width: "100%", height: "110vh", overflow: "hidden" }}>
      <iframe
        src="https://mohamedgad.shinyapps.io/sentimentelections/"
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Dashboard"
      ></iframe>
    </div>
  );
};

export default USElections;

import React from "react";

const Soccer = () => {
  return (
    <div style={{ width: "100%", height: "110vh", overflow: "hidden" }}>
      <iframe
        src="https://worldcupsimulator.onrender.com/"
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Dashboard"
      ></iframe>
    </div>
  );
};

export default Soccer;

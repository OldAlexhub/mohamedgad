import React from "react";

const videoData = [
  {
    src: "https://www.youtube-nocookie.com/embed/WKk8m1VTWB0?si=aDTWTUig5xVmOmLN",
    type: "youtube",
    description:
      "Step one is to create the server's foundation of which the whole project will be built on top",
  },
  {
    src: "https://www.youtube.com/embed/HBBgbXpk7Tc?si=fAU7Hg5Z-kPURjA3",
    type: "youtube",
    description:
      "Step two is to connect to a database in which it will store of the service data",
  },
  {
    src: "https://www.youtube.com/embed/Krup0yxHlx4?si=qDsC51N3N43FnarR",
    type: "youtube",
    description: "Creating the User Database Schema",
  },
  {
    src: "https://www.youtube.com/embed/SnzQ5WyxlmU?si=Q4ba7Aj2b5SwBiHY",
    type: "youtube",
    description: "Creating the logic to create a new user in the database",
  },
  {
    src: "https://www.youtube.com/embed/G9RhVbqejTQ?si=A1kbx1LZtQV7cSTa",
    type: "youtube",
    description: "Creating the logic to Login to the website",
  },
];

const Taxi = () => {
  return (
    <div className="container">
      <h3 className="text-center my-4">Taxi Management Software</h3>
      <div className="row">
        {videoData.map((video, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                }}
              >
                {video.type === "youtube" ? (
                  <iframe
                    className="card-img-top"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    src={video.src}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    className="card-img-top"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    controls
                    onError={(e) => {
                      e.target.parentNode.innerHTML =
                        "Video could not be loaded. Please check the URL.";
                    }}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="card-body">
                <p className="card-text">{video.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Taxi;

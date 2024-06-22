import React, { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Function to increment the visitor count
  const incrementVisitorCount = () => {
    //console.log("Incrementing visitor count"); // Log when attempting to increment
    axios
      .post(process.env.REACT_APP_INCREMENT_VISITORS)
      .then(() => {
        // console.log("Visitor count incremented successfully");
      })
      .catch((error) => {
        console.error("Failed to increment visitor count:", error);
      });
  };

  useEffect(() => {
    // console.log("Footer mounting"); // Log to see when the Footer component mounts

    // Check if we've already incremented the visitor count in this session
    if (!sessionStorage.getItem("visitorCountIncremented")) {
      incrementVisitorCount();
      sessionStorage.setItem("visitorCountIncremented", "true");
    }

    // Function to fetch the visitor count
    const fetchVisitorCount = () => {
      axios
        .get(process.env.REACT_APP_GET_VISITORS)
        .then((response) => {
          setVisitorCount(response.data.count || response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch visitor count:", error);
          setIsLoading(false);
        });
    };

    fetchVisitorCount();
    const interval = setInterval(fetchVisitorCount, 1000); // Poll every second

    return () => {
      //console.log("Footer unmounting"); // Log when unmounting the Footer
      clearInterval(interval);
    };
  }, []);
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <p>
          &copy; {new Date().getFullYear()} Mohamed's Website. All Rights
          Reserved.
        </p>
        <p>Designed by Mohamed Gad</p>
        <p>
          Contact me at:{" "}
          <a href="mailto:mohamed@mohamedgad.com" className="text-light">
            mohamed@mohamedgad.com
          </a>
        </p>
        <p>Visitor Count: {isLoading ? "Loading..." : visitorCount}</p>
      </div>
    </footer>
  );
};

export default Footer;

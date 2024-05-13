import React, { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
    const interval = setInterval(fetchVisitorCount, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <p>
          &copy; {new Date().getFullYear()} Mohamed's Website. All Rights
          Reserved.
        </p>
        <p>Designed ❤️ by Mohamed Gad</p>
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

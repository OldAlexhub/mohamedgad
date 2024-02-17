import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <p>
          &copy; {new Date().getFullYear()} Mohamed's Website. All Rights
          Reserved.
        </p>
        <p>
          Designed <span role="img" aria-label="Love"></span> by Mohamed Gad
        </p>
        <p>
          Contact me at:{" "}
          <a href="mailto:mohamed@mohamedgad.com" className="text-light">
            mohamed@mohamedgad.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

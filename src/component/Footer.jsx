import React from "react";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="quick-link">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Carrers</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">Partner with us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="Legal-link">
        <h2>Ligal</h2>
        <ul>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Cookie Policy</a>
          </li>
          <li>
            <a href="#">Disclaimers</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
        </ul>
      </div>
      <div className="social-media-logo">
        <ul>
          <li>
            <a href="#">
              <img src="https://www.svgrepo.com/show/503338/facebook.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://commons.wikimedia.org/wiki/Special:Redirect/file/X_logo_2023.svg
"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg
"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg
"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;

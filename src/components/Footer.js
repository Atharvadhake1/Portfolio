import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions | </p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/Atharvadhake1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex items-center justify-center"
          >
            <img
              src="../assets/img/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/atharva-dhake-155160258/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex items-center justify-center"
          >
            <img
              src="/assets/linkedin.svg"
              alt="linkedin"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://leetcode.com/u/atharva_dhake_/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex items-center justify-center"
          >
            <img
              src="../assets/leetcode.svg"
              alt="leetcode"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.instagram.com/atharva_dhake_/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex items-center justify-center"
          >
            <img
              src="/assets/img/instagram.svg"
              alt="instagram"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
      </div>

      <p className="text-white-500">
        © 2024 Atharva Dhake. All rights reserved.
      </p>
    </footer>
  );
};

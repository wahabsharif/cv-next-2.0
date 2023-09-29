import React from "react";
import Link from "next/dist/client/link";

const Footer = () => {
  return (
    <footer className="footer" data-overlay-dark="0">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="item-clumn our md-mb50">
              <a href="#0" className="logo-brand mb-50">
                <img src="/img/cv-color-logo.png" alt="Capital Valley Logo" />
              </a>
              <p>
                lorie ipsum dolor sit amet, consectetur adipiscing elit, sed
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-clumn links md-mb50">
              <h5 className="title">Resources</h5>
              <ul>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">Home</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">About</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">Gallery</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="item-clumn links sm-mb50">
              <h5 className="title">Useful Links</h5>
              <ul>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">Balloting Results</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">My Ledger</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">File Verification</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="0">Support</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-clumn links">
              <h5 className="title mb-30">Contact</h5>
              <div className="info">
                <span>Email Address</span>
                <h6>
                  <a href="#0">support@gmail.com</a>
                </h6>
              </div>
              <div className="social mt-30">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="text-center">
                <p>
                  &copy; {new Date().getFullYear()} - Capital Valley. All rights
                  reserved.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="text-center">
                <p>
                  Made With &#10084; By
                  <Link
                    href="http://beacontechh.com/"
                    className="font-weight-bold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    &ndash;Beacon Techh
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

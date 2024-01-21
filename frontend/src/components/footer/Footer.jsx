import React from "react";
import "./footer.css";

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="text-white">
        <div className="footer py-3">
          <div className="container ">
            <div className="py-4">
              <div className="row">
                <div className="col-12 col-lg-6 mb-lg-0 mb-4 mb-md-0">
                  <div className="d-flex gap-4 align-item-center justify-content-center mb-sm-4">
                    <img className="h-100" src="./src/assets/images/newsletter.png" alt="" />
                    <h2 className="handel-overflow">Sign Up for Newsleeter</h2>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="input-group">
                    <input type="text" className="form-control new-input py-2 border-0 shadow-none" placeholder="Your Email Address" />
                    <span className="input-group-text p-2 px-3">Subscribe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer pt-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 mb-lg-4 mb-5 ">
                <h4>Contact Us</h4>
                <p className="mb-1">Demo Store</p>
                <address className="fs-6">
                  Lorem ipsum dolor sit
                  <br /> amet, consectetur adipisicing
                </address>
                <a href="tel:01225092125">01225092125</a>
                <p className=" mb-1">Demo@Exampledemo.Com</p>
                <div className="links mt-4 d-flex gap-3 justify-content-start align-items-center">
                  <FaLinkedin className="link" size={27} />
                  <FaGithubSquare className="link" size={27} />
                  <BsInstagram className="link" size={27} />
                  <FaYoutube className="link" size={27} />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-lg-4 mb-5">
                <h4>Information</h4>
                <div className="d-flex flex-column ">
                  <p className="py-2 mb-1">Privacy Policy</p>
                  <p className="py-2 mb-1">Refund Policy</p>
                  <p className="py-2 mb-1">Shipping Policy</p>
                  <p className="py-2 mb-1">Terms Of Service</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-lg-4 mb-5">
                <h4>Account</h4>
                <div className="d-flex flex-column ">
                  <p className="py-2 mb-1">Search</p>
                  <p className="py-2 mb-1">About Us</p>
                  <p className="py-2 mb-1">F&Q</p>
                  <p className="py-2 mb-1">Size Chart</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <h4>Quick Links</h4>
                <div className="d-flex flex-column ">
                  <p className="py-2 mb-1">Laptops</p>
                  <p className="py-2 mb-1">Headphones</p>
                  <p className="py-2 mb-1">Tablets</p>
                  <p className="py-2 mb-1">Watch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer mb-0 py-3">
          <p className="container text-center mb-0">&copy; {new Date().getFullYear()} - Made by Group 4</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

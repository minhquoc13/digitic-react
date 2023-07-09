import React from "react";
import { Link } from "react-router-dom";
import {
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsInstagram,
  BsLink,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-content-end">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="text-white mb-0 ">Sign Up for NewsLetter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email..."
                  aria-label="Your Email..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subcribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hoa Hai - Ngu Hanh Son - Da Nang
                  <br />
                  PinCode: 50001
                </address>
                <a href="tel:+84 327991343" className="mt-3 d-block text-white">
                  (+84) 327991343
                </a>
                <a
                  href="mailto:mq19052002@gmail.com"
                  className="mt-2 d-block mb-2 text-white"
                >
                  mq19052002@gmail.com
                </a>
              </div>
              <div className="social-icons d-flex align-items-center gap-15 mt-3">
                <a
                  className="text-white fs-4"
                  href="https://www.instagram.com/_minhquoc"
                >
                  <BsLinkedin />
                </a>
                <a
                  className="text-white fs-4"
                  href="https://www.instagram.com/_minhquoc"
                >
                  <BsInstagram />
                </a>
                <a
                  className="text-white fs-4"
                  href="https://www.instagram.com/_minhquoc"
                >
                  <BsYoutube />
                </a>
                <a
                  className="text-white fs-4"
                  href="https://www.instagram.com/_minhquoc"
                >
                  <BsInstagram />
                </a>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white">Infomation</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                  Term & Conditions
                </Link>
                <Link to="/blog" className="text-white py-2 mb-1">
                  Blog
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headerphones</Link>
                <Link className="text-white py-2 mb-1">Tablet</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Digitic
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4075.669411974385!2d108.24931053589896!3d16.04669767521522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1688800569611!5m2!1svi!2s"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="our location"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title">Contact Us</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control py-1"
                        name="formId1"
                        id="formId1"
                        placeholder="Name"
                      />
                      <label for="formId1">Name</label>
                    </div>
                    <div class="form-floating">
                      <input
                        type="email"
                        class="form-control py-1"
                        name="formId1"
                        id="formId1"
                        placeholder="From"
                      />
                      <label for="formId1">Email</label>
                    </div>
                    <div class="form-floating">
                      <input
                        type="tel"
                        class="form-control py-1"
                        name="formId1"
                        id="formId1"
                        placeholder="From"
                      />
                      <label for="formId1">Mobile Number</label>
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="10"
                        rows="10"
                        placeholder="Messages"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0" type="Submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title">Get In Touch With Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-2 fs-5 d-flex align-items-center gap-15">
                        <AiOutlineHome className="fs-5"></AiOutlineHome>
                        <address className="mb-0">
                          Mỹ An,550000, Việt Nam
                        </address>
                      </li>
                      <li className="mb-2 fs-5  d-flex align-items-center gap-15">
                        <AiOutlineMail className="fs-5"></AiOutlineMail>
                        <a href="mailto:mq19052002@gmail.com">
                          mq19052002@gmail.com
                        </a>
                      </li>
                      <li className="mb-2 fs-5  d-flex align-items-center gap-15">
                        <BiPhoneCall className="fs-5"></BiPhoneCall>
                        <a href="tel+84 327991343">(+84)327991343</a>
                      </li>
                      <li className="mb-2 fs-5  d-flex align-items-center gap-15">
                        <BiInfoCircle className="fs-5"></BiInfoCircle>
                        <span>Monday - Friday | 8 AM to 20 PM</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

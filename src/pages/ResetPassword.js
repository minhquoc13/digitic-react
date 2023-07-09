import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Reset Password"}></Meta>
      <BreadCrumb title="Reset Password"></BreadCrumb>

      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-4">Reset Password</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="New password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="confirm-password"
                      placeholder="Confirm your password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                      <button className="button">Confirm</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;

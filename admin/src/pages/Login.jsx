import { useState } from "react";
import { login } from "../api/auth";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handelSumit = (e) => {
    e.preventDefault();
    login({ userName, password })
      .then(() => location.reload())
      .catch((e) => alert(e.message));
  };
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="row w-100 m-0">
          <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
            <div className="card col-lg-4 mx-auto">
              <div className="card-body px-5 py-5">
                <h3 className="card-title text-left mb-3">Login</h3>
                <form>
                  <div className="form-group">
                    <label>Username or email *</label>
                    <input
                      type="text"
                      className="form-control p_input"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password *</label>
                    <input
                      type="text"
                      className="form-control p_input"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group d-flex align-items-center justify-content-between">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" />{" "}
                        Remember me <i className="input-helper"></i>
                      </label>
                    </div>
                    <a href="#" className="forgot-pass">
                      Forgot password
                    </a>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      onClick={handelSumit}
                      className="btn btn-primary btn-block enter-btn"
                    >
                      Login
                    </button>
                  </div>

                  <p className="sign-up">
                    Do not have an Account?<a href="#"> Sign Up</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

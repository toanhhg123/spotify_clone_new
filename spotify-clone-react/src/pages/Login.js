import Cookies from "js-cookie";
import React, { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { login, register } from "../api";

const Login = () => {
  const [user, setUser] = useState({ userName: "", password: "" });
  const [type, setType] = useState("login");

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      toast.loading("loading..");
      let auth;
      if (type === "login") auth = await login(user);
      else auth = await register(user);
      toast.dismiss();
      toast.success("Login success");
      navigate("/login");
    } catch (error) {
      toast.dismiss();
      toast.error(error.message);
    }
  };
  console.log(user);

  const token = Cookies.get("accessToken");
  if (token) return <Navigate to={"/"} />;
  return (
    <LoginWrap onSubmit={handleLogin}>
      <div className="head__login">
        <i>
          <FaSpotify />
        </i>
        Login
      </div>
      <div className="form__links">
        <a
          href="#/"
          onClick={() => setType("login")}
          className={type === "login" ? "active" : ""}
        >
          Login
        </a>
        <a
          className={type === "register" ? "active" : ""}
          href="#/"
          onClick={() => setType("register")}
        >
          Register
        </a>
      </div>
      <div className="form__group">
        <label>User Name</label>
        <input
          placeholder="Username"
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
        />
      </div>
      <div className="form__group">
        <label>Password</label>
        <input
          placeholder="********"
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      {type === "register" && (
        <div className="form__group">
          <label>re-password</label>
          <input placeholder="********" type="password" />
        </div>
      )}
      <div className="form__group-remember">
        <input type="checkbox" />
        <label>Remember me</label>
      </div>
      <div className="form__group">
        <button className="form__login_btn__submit" type="submit">
          {type === "login" ? "Login" : "register"}
        </button>
      </div>
    </LoginWrap>
  );
};

const LoginWrap = styled.form`
  width: 400px;
  padding: 3rem 2rem;
  margin: 3rem auto;
  background: rgb(24, 24, 24);
  color: #fff;
  border-radius: 15px;
  .head__login {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 600;
    gap: 10px;
  }
  .form__links {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    a {
      color: #fff;
      font-weight: 500;
      text-decoration: none;
    }

    a.active {
      border-bottom: 2px solid #2cb557;
    }
  }
  .form__group {
    margin: auto;
    width: 80%;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
      padding: 10px 15px;
      border: none;
      outline: none;
      border-radius: 20px;
    }
    .form__login_btn__submit {
      background-color: #2cb557;
      display: block;
      width: 100%;
      border: none;
      border-radius: 20px;
      text-align: center;
      padding: 10px 0;
      font-weight: 600px;
      cursor: pointer;
      margin-top: 2rem;
    }
  }
  .form__group-remember {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    gap: 0.5rem;
    input {
      border: none;
      outline: none;
    }
  }
`;

export default Login;

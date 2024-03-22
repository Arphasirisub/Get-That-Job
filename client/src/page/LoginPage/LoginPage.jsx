import "../../App.css";
import { useState, useEffect } from "react";
import { imageLogin } from "../../data/image";
import axios from "axios";

function LoginPage() {
  const [changeLoginForm, setChangeLoginForm] = useState(false);
  const [email, setEmail] = useState("");
  const [validationEmail, setValidationEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationPassword, setValidationPassword] = useState("");

  function validationForm() {
    setValidationEmail(email === "" ? "Please input your email" : "");
    setValidationPassword(password === "" ? "Please input your password" : "");

    if (validationEmail === "" && validationPassword === "") {
      login(email, password);
    }
  }

  const login = async (data) => {
    if (changeLoginForm) {
      await axios.post();
    } else if (!changeLoginForm) {
      await axios.post();
    }
  };

  useEffect(() => {
    setValidationEmail("");
  }, [email]);

  useEffect(() => {
    setValidationPassword("");
  }, [password]);

  return (
    <>
      <div className="w-screen h-screen bg-gray-100">
        <div className="flex justify-center gap-8 font-montserrat">
          <div className="flex flex-col gap-6 w-96">
            <h1 className="text-5xl">Welcome back</h1>
            <p className="text-xl font-semibold">Login to your account as...</p>
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                validationForm();
              }}
            >
              <div className="flex gap-5">
                <a
                  className={`link link-hover font-semibold ${
                    !changeLoginForm
                      ? "underline underline-offset-8 decoration-pink-300 decoration-2"
                      : "underline underline-offset-8 decoration-gray-300 decoration-2"
                  }`}
                  onClick={() => setChangeLoginForm(false)}
                >
                  PROFESSIONAL
                </a>
                <a
                  className={`link link-hover font-semibold ${
                    changeLoginForm
                      ? "underline underline-offset-8 decoration-pink-300 decoration-2"
                      : "underline underline-offset-8 decoration-gray-300 decoration-2"
                  }`}
                  onClick={() => setChangeLoginForm(true)}
                >
                  RECRUITER
                </a>
              </div>
              <label htmlFor="email" className="form-control w-full">
                <span className="label-text">EMAIL</span>
                <input
                  type="text"
                  id="email"
                  placeholder="some.user@mail.com"
                  className="input input-bordered focus:input-secondary w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="text-red-500">{validationEmail}</span>
              </label>
              <label htmlFor="password" className="form-control w-full">
                <span className="label-text">PASSWORD</span>
                <input
                  type="password"
                  id="password"
                  placeholder="*******"
                  className="input input-bordered focus:input-secondary w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="text-red-500">{validationPassword}</span>
              </label>
              <div className="flex justify-end">
                <button className="btn btn-secondary rounded-2xl border-transparent w-24 bg-pink-300">
                  Login
                </button>
              </div>
            </form>
          </div>
          <img
            className="bg-gray-100"
            src={imageLogin.loginImage}
            alt="Login"
          />
        </div>
      </div>
    </>
  );
}

export default LoginPage;

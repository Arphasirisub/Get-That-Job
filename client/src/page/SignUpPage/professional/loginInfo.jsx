import next from "../../../images/next.png";
import { useAuth } from "../../../contexts/authTools";
import { useState, useEffect } from "react";

function ProLoginInfo() {
  const {
    setActiveSteps,
    proEmail,
    proPassword,
    setProPassword,
    setProEmail,
    input,
    setInput,
  } = useAuth();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationEmail, setValidationEmail] = useState("");
  const [validationPassword, setValidationPassword] = useState("");


  function validate() {
    setValidationEmail(proEmail === "" ? "Please input your email" : "");
    if (!proEmail.includes("@")) {
      setValidationEmail("Please enter a valid email address");
      return;
    }
    setValidationPassword(
      proPassword === "" ? "Please input your password" : ""
    );
    setValidationConfirmPassword(
      confirmPassword === "" ? "Please confirm your password" : ""
    );
  }

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
  };

 //handle input
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setInput((prevInput) => [
      {
        ...prevInput[0],
        proEmail: newEmail,
      },
    ]);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setInput((prevInput) => [
      {
        ...prevInput[0],
        proPassword: newPassword,
      },
    ]);
  };

  function validateAndSubmit(event) {
    event.preventDefault();
    validate();

    // if (input.proPassword !== confirmPassword) {
    //   alert("Please check your password and try again");
    //   return;
    // }

    setInput([
      {
        ...input,
        proEmail,
        proPassword,
      },
    ]);

    console.log(input);

    setActiveSteps("proPersonal");
  }

  useEffect(() => {
    setValidationEmail("");
  }, [proEmail]);

  useEffect(() => {
    setValidationPassword("");
  }, [proPassword]);

  return (
    <form
      onSubmit={validateAndSubmit}
      className="flex flex-col font-inter text-sm"
    >
      <label>
        <p htmlFor="email" className="text-gray-800 mt-2 font-light">
          EMAIL
        </p>
        <input
          type="email"
          id="email"
          onChange={handleEmailChange}
          value={input.proEmail}
          placeholder="some.user@mail.com"
          className="bg-white border border-[#f48fb1] outline-none rounded-md w-8/12 h-9 mt-1 pl-2.5"
        />
      </label>
      <span className="text-red-500 mt-2">{validationEmail}</span>
      <label>
        <p htmlFor="password" className=" text-gray-800 mt-2 font-light">
          PASSWORD
        </p>
        <input
          type="password"
          id="password"
          onChange={handlePasswordChange}
          value={input.proPassword}
          placeholder="******"
          className="bg-white border border-[#f48fb1] outline-none rounded-md w-8/12 h-9 mt-1 pl-2.5"
        />
      </label>
      <span className="text-red-500 mt-2">{validationPassword}</span>
      <label>
        <p htmlFor="confirmPassword" className="text-gray-800 mt-2 font-light">
          PASSWORD CONFIRM
        </p>
        <input
          type="password"
          id="confirmPassword"
          onChange={handleConfirmPasswordChange}
          value={confirmPassword}
          placeholder="******"
          className="bg-white border border-[#f48fb1] outline-none rounded-md w-8/12 h-9 mt-1 pl-2.5"
        />
      </label>
      {/* <span className="text-red-500 mt-2">{validationConfirmPassword}</span> */}
      {/* {confirmPassword !== input.proPassword && (
        <p className="text-red-500 mt-2">Passwords do not match</p>
      )} */}
      <div className="flex justify-center mr-40 mt-5">
        <button
          type="submit"
          // onClick={() => {
          //   setActiveSteps("proPersonal");
          // }}
          className="flex flex-row btn btn-secondary rounded-2xl border-transparent font-light bg-[#f48fb1] text-white"
        >
          <p>NEXT</p>
          <img src={next} alt="Next" />
        </button>
      </div>
    </form>
  );
}

export default ProLoginInfo;

import { imageNavbar } from "../data/image.js";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// const button = [
//   { name: "SIGN UP", picture: imageNavbar.signupLogo, link: "/signUp" },
//   { name: "LOGIN", picture: imageNavbar.loginLogo, link: loginWithRedirect },
// ];

function Navbar() {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <div className=" w-screen h-14 bg-white flex flex-row justify-between items-center px-40 drop-shadow-md">
        <img
          onClick={() => {
            navigate("/");
          }}
          className=" w-24 h-8 cursor-pointer"
          src={imageNavbar.gtjlogo}
        />
        <div className="flex flex-row items-center gap-3">
          <button
            onClick={() => {
              navigate("/signUp");
            }}
            className="border border-[#f48fb1] flex flex-row gap-3 rounded-xl text-[#616161] p-2 text-xs"
          >
            <img className=" w-4 h-4" src={imageNavbar.signupLogo} />
            SIGN UP
          </button>
          <button
            onClick={() => loginWithRedirect()}
            className="border border-[#f48fb1] flex flex-row gap-3 rounded-xl text-[#616161] p-2 text-xs"
          >
            <img className=" w-4 h-4" src={imageNavbar.loginLogo} />
            LOGIN
          </button>
        </div>
      </div>
    )
  );
}

export default Navbar;

import { imageNavbar } from "../data/image.js";
import { useNavigate } from "react-router-dom";

const button = [
  { name: "SIGN UP", picture: imageNavbar.signupLogo },
  { name: "LOGIN", picture: imageNavbar.loginLogo, link: "/login" },
];

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className=" w-screen h-14 bg-white flex flex-row justify-between items-center px-40">
      <img className=" w-24 h-8" src={imageNavbar.gtjlogo} />
      <div className="flex flex-row items-center gap-3">
        {button.map((items) => {
          return (
            <button
              onClick={() => {
                navigate(items.link);
              }}
              className="border border-[#f48fb1] flex flex-row gap-3 rounded-xl text-[#616161] p-2 text-xs"
            >
              <img className=" w-4 h-4" src={items.picture} />
              {items.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;

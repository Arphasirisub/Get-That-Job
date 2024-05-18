import Navbar from "../../PublicComponant/NavBar";
import discussing from "../../images/discussing.png";
import DynamicContents from "./DynamicContents";
import ProfessionalSteper from "./SteperComponant/ProfessionalSteper";
import { useState } from "react";

function SignupPage() {
  const [changeForm, setChangeForm] = useState(false);
  return (
    <div className="w-screen bg-gray-100">
      <Navbar />
      <div className=" h-screen flex flex-row justify-center font-montserrat gap-56">
        <div className="flex flex-col">
          <div className="flex flex-col text-gray-800 mt-11 gap-5">
            <p className="text-5xl">Good choice!</p>
            <p className="text-xl">Create a new account as...</p>
          </div>
          <div className="flex flex-row gap-5 mt-6 font-inter">
            <a
              className={`link link-hover ${
                !changeForm
                  ? "underline underline-offset-8 decoration-pink-300 decoration-2 text-gray-800"
                  : "underline underline-offset-8 decoration-gray-300 decoration-2"
              }`}
              onClick={() => setChangeForm(false)}
            >
              PROFESSIONAL
            </a>
            <a
              className={`link link-hover ${
                changeForm
                  ? "underline underline-offset-8 decoration-pink-300 decoration-2 text-gray-800"
                  : "underline underline-offset-8 decoration-gray-300 decoration-2"
              }`}
              onClick={() => setChangeForm(true)}
            >
              RECRUITER
            </a>
          </div>
          <ProfessionalSteper />

          <DynamicContents />
        </div>

        <div className="flex flex-col justify-end">
          <img className="mt-auto" src={discussing} alt="woman discussing" />
        </div>
      </div>
    </div>
  );
}

export default SignupPage;

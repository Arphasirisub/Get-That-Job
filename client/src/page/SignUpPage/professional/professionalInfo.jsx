import { imageProfessionalInfo } from "../../../data/image";
import { useAuth } from "../../../contexts/authTools";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfessionalInfo() {
  const {
    setActiveSteps,
    proTitle,
    setProTitle,
    proExperience,
    setProExperience,
    proEducation,
    setProEducation,
    input,
    setInput,
    proHandleSubmit
  } = useAuth();
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setInput((prevInput) => [
      {
        ...prevInput[0],
        proTitle: newTitle,
      },
    ]);
  };

  const handleExperienceChange = (e) => {
    const newExperience = e.target.value;
    setInput((prevInput) => [
      {
        ...prevInput[0],
        proExperience: newExperience,
      },
    ]);
  };

  const handleEducationChange = (e) => {
    const newEducation = e.target.value;
    setInput((prevInput) => [
      {
        ...prevInput[0],
        proEducation: newEducation,
      },
    ]);
  };

  function submitProfessionalInfo(event) {
    event.preventDefault();

    console.log(input);
    proHandleSubmit()
    navigate("/login");
  }

  return (
    <form onSubmit={submitProfessionalInfo} className=" mb-10 font-inter text-sm mt-7 flex flex-col">
      <div>
        <p className="text-[#616161] font-light">
          YOU CAN COMPLETE THIS INFORMATION LATER BUT WE
        </p>
        <p className="text-[#616161] font-light">RECOMENDED YOU TO DO IT NOW</p>
      </div>
      <label>
        <p htmlFor="title" className="text-gray-800 mt-2 font-light">
          TITLE
        </p>
        <input
          type="text"
          id="title"
          onChange={handleTitleChange}
          defaultValue={input.proTitle}
          placeholder="Mechanical administrator..."
          className="bg-white border border-[#f48fb1] outline-none rounded-md w-8/12 h-9 mt-1 pl-2.5"
        />
      </label>
      <label>
        <p htmlFor="experience" className="text-gray-800 mt-2 font-light">
          PROFESSIONAL EXPERIENCE
        </p>
        <textarea
          type="text"
          id="experience"
          onChange={handleExperienceChange}
          defaultValue={input.proExperience}
          placeholder="Worked 6 years in a bitcoin farm until I decided to change my life...."
          className="bg-white border border-[#f48fb1] outline-none rounded-md w-full h-20 mt-1 pl-2.5 pt-2"
        />
      </label>
      <p className=" font-light">Between 300 and 2000 characters</p>
      <label>
        <p htmlFor="education" className="text-gray-800 mt-2 font-light">
          EDUCATION
        </p>
        <textarea
          type="text"
          id="education"
          onChange={handleEducationChange}
          defaultValue={input.proEducation}
          placeholder="Major in life experiences with a PHD in procrastination..."
          className="bg-white border border-[#f48fb1] outline-none rounded-md w-full h-20 mt-1 pl-2.5 pt-2"
        />
      </label>
      <p className=" font-light">Between 100 and 2000 characters</p>
      <p className="text-gray-800 mt-3 font-light">UPLOAD/UPDATE YOUR CV</p>
      <div className="flex flex-row gap-5 mt-1">
        <button className="flex flex-row btn btn-secondary rounded-2xl border-transparent font-light bg-[#f48fb1] text-white">
          <img src={imageProfessionalInfo.upload} />
          <p>Choose a file</p>
        </button>
      </div>
      <p className="font-light">Only PDF. Max size 5MB</p>
      <div className="flex flex-row justify-center mr-40 mt-5 gap-5">
        <button
          onClick={() => {
            setActiveSteps("proPersonal");
          }}
          className="flex flex-row btn btn-secondary rounded-2xl border-transparent font-light bg-[#f48fb1] text-white"
        >
          <img src={imageProfessionalInfo.back} />
          <p>PREVIUS</p>
        </button>

        {/* navigate to login page */}
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="btn btn-ghost rounded-2xl font-light bg-[#f5f5f6] text-gray-800 border border-[#f48fb1]"
        >
          SKIP THIS!
        </button>

        {/* navigate to login page and post to database */}
        <button
          type="submit"
          className="flex flex-row btn btn-secondary rounded-2xl border-transparent font-light bg-[#f48fb1] text-white"
        >
          <p>FINISH</p>
          <img src={imageProfessionalInfo.next} />
        </button>
      </div>
    </form>
  );
}

export default ProfessionalInfo;

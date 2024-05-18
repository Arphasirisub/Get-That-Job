import { imageRecruiterSideBar } from "../../data/image";
import { useNavigate } from "react-router-dom";
import { useRecruiter } from "../../contexts/recruiterTools";

function SideBar() {
  const navigate = useNavigate();
  const { setRecruiterActiveTap } = useRecruiter();
  return (
    <div className=" font-inner bg-[#e1e2e1] h-screen w-56 flex flex-col gap-10 text-[#373737]">
      <img
        src={imageRecruiterSideBar.gtjLogo}
        className="w-32 mt-7 ml-4 cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="flex flex-col text-sm cursor-pointer">
        <div
          onClick={() => {
            setRecruiterActiveTap("jobPosting");
          }}
          className="flex flex-row gap-3 hover:bg-[#f5f5f6] p-4"
        >
          <img className="ml-1" src={imageRecruiterSideBar.jobPosting} />
          <p>Job Postings</p>
        </div>
        <div
          onClick={() => {
            setRecruiterActiveTap("createNewJob");
          }}
          className=" flex flex-row gap-3 hover:bg-[#f5f5f6] p-4"
        >
          <img src={imageRecruiterSideBar.createJob} />
          <p>Create New Job</p>
        </div>
        <div
          onClick={() => {
            setRecruiterActiveTap("recruiterProfile");
          }}
          className="flex flex-row gap-3 hover:bg-[#f5f5f6] p-4"
        >
          <img src={imageRecruiterSideBar.profileIcon} />
          <p>Profile</p>
        </div>
        <div className="flex flex-row gap-3 hover:bg-[#f5f5f6] p-4">
          <img src={imageRecruiterSideBar.logout} />
          <p>Log out</p>
        </div>
      </div>
      <div className="ml-4 mt-auto text-xs mb-4">© 2021 - Get That Job</div>
    </div>
  );
}

export default SideBar;

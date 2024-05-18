import { imageSideBar } from "../../data/image";
import { useNavigate } from "react-router-dom";
import { usePro } from "../../contexts/ProTools";

function SideBar() {
  const navigate = useNavigate();
  const { setProActiveTap } = usePro();
  return (
    <div className=" font-inner bg-[#e1e2e1] h-screen w-56 flex flex-col gap-10 text-[#373737]">
      <img
        src={imageSideBar.gtjLogo}
        className="w-32 mt-7 ml-4 cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="flex flex-col text-sm cursor-pointer">
        <div
          onClick={() => {
            setProActiveTap("findThatJob");
          }}
          className="flex flex-row gap-3 hover:bg-[#f5f5f6] p-5"
        >
          <img src={imageSideBar.searchicon} />
          <p>Find that job</p>
        </div>
        <div
          onClick={() => {
            setProActiveTap("yourApplication");
          }}
          className=" flex flex-row gap-3 hover:bg-[#f5f5f6] p-5"
        >
          <img className="ml-1" src={imageSideBar.information} />
          <p>Your applications</p>
        </div>
        <div
          onClick={() => {
            setProActiveTap("following");
          }}
          className="flex flex-row gap-3 hover:bg-[#f5f5f6] p-5"
        >
          <img src={imageSideBar.following} />
          <p>Following</p>
        </div>
        <div
          onClick={() => {
            setProActiveTap("profile");
          }}
          className="flex flex-row gap-3 hover:bg-[#f5f5f6] p-5"
        >
          <img src={imageSideBar.profileIcon} />
          <p>Profile</p>
        </div>
        <div className="flex flex-row gap-3 hover:bg-[#f5f5f6] p-5">
          <img src={imageSideBar.logout} />
          <p>Log out</p>
        </div>
      </div>
      <div className="ml-4 mt-auto text-xs mb-4">© 2021 - Get That Job</div>
    </div>
  );
}

export default SideBar;

import { useAuth } from "../../../contexts/authTools";

function ProfessionalSteper() {
  const { activeSteps } = useAuth();
  return (
    <div className="flex flex-row mt-6 gap-9">
      <div className="flex flex-row gap-3">
        <div
          className={`flex justify-center items-center w-7 h-7 rounded-full  text-white ${
            activeSteps === "proLoginInfo" ? "bg-[#f48fb1]" : "bg-[#616161]"
          }`}
        >
          <p>1</p>
        </div>
        <div className="flex flex-col text-gray-800">
          <p>Login</p>
          <p>information</p>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <div
          className={`flex justify-center items-center  text-white w-7 h-7 rounded-full ${
            activeSteps === "proPersonal" ? "bg-[#f48fb1]" : "bg-[#616161]"
          }`}
        >
          <p>2</p>
        </div>
        <div className="flex flex-col text-gray-800">
          <p>Persanal</p>
          <p>information</p>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <div
          className={`flex justify-center items-center  text-white w-7 h-7 rounded-full ${
            activeSteps === "professionalInfo" ? "bg-[#f48fb1]" : "bg-[#616161]"
          }`}
        >
          <p>3</p>
        </div>
        <div className="flex flex-col text-gray-800">
          <p>Professional</p>
          <p>information</p>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalSteper;

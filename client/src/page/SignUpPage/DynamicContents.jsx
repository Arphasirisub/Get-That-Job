import { useAuth } from "../../contexts/authTools";
import ProLoginInfo from "./professional/loginInfo";
import ProPersonal from "./professional/personalInfo";
import ProfessionalInfo from "./professional/professionalInfo";

function DynamicContents() {
  const { activeSteps } = useAuth();
  return (
    <>
      {activeSteps === "proLoginInfo" && <ProLoginInfo />}
      {activeSteps === "proPersonal" && <ProPersonal />}
      {activeSteps === "professionalInfo" && <ProfessionalInfo />}
    </>
  );
}

export default DynamicContents;

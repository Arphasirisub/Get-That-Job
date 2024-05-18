import SideBar from "./RecuirterSidebar";
import RecruiterDynamicContents from "./DynamicContents";
function RecruiterPage() {
  return (
    <div className="flex flex-row">
      <SideBar />
      <RecruiterDynamicContents />
    </div>
  );
}

export default RecruiterPage;

import FindingBar from "./component/findingBar";
import Job from "./component/jobs";

function JobsPage() {
  return (
    <div className="bg-gray-100 w-screen h-screen pl-5">
      <FindingBar />
      <Job />
    </div>
  );
}

export default JobsPage;

import JobPostingPage from "./component/jobPosting";
import CreateNewJobPage from "./component/createNewJob";
import RecruiterProfilePage from "./component/recruiterProfile";
import { useRecruiter } from "../../contexts/recruiterTools";

function RecruiterDynamicContents() {
  const { recruiterActiveTap } = useRecruiter();
  return (
    <>
      {recruiterActiveTap === "jobPosting" && <JobPostingPage />}
      {recruiterActiveTap === "createNewJob" && <CreateNewJobPage />}
      {recruiterActiveTap === "recruiterProfile" && <RecruiterProfilePage />}
    </>
  );
}

export default RecruiterDynamicContents;

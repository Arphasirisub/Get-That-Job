import CreateAccount from "./componant/createAccount.jsx";
import FindNextJob from "./componant/findNextJob.jsx";
import MeetTheTeam from "./componant/meetTheTeam.jsx";
import Navbar from "../../PublicComponant/NavBar.jsx";

function LandingPage() {
  return (
    <>
      <Navbar />
      <CreateAccount />
      <FindNextJob />
      <MeetTheTeam />
    </>
  );
}

export default LandingPage;

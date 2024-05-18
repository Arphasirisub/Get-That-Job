import FindThatJobPage from "./component/findThatJob";
import YourApplicationPage from "./component/yourApplication";
import FollowingPage from "./component/following";
import ProfilePage from "./component/profile";
import { usePro } from "../../contexts/ProTools";

function ProDynamicContents(params) {
  const { proActiveTap } = usePro();
  return (
    <>
      {proActiveTap === "findThatJob" && <FindThatJobPage />}
      {proActiveTap === "yourApplication" && <YourApplicationPage />}
      {proActiveTap === "following" && <FollowingPage />}
      {proActiveTap === "profile" && <ProfilePage />}
    </>
  );
}

export default ProDynamicContents;

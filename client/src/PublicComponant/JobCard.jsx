import { imageJobs } from "../data/image";
import { useState } from "react";

function JobCard({ job }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClickFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="card w-80 shadow-xl items-center justify-center py-5 bg-white gap-3">
      <div className="flex gap-5">
        <figure>
          <img src={job.image} alt="Job" />
        </figure>
        <div>
          <div className="flex items-center text-xs text-gray-400 gap-1">
            <img src={imageJobs.manufactoringIcon} alt="manufactoringIcon" />
            <p>{job.category}</p>
          </div>
          <p className="text-base font-semibold">{job.jobTitle}</p>
          <p className="text-sm font-medium text-gray-500">{job.companyName}</p>
          <div className="flex items-center text-xs text-gray-400 gap-3">
            <div className="flex items-center gap-1">
              <img src={imageJobs.fulltimeIcon} alt="fulltimeIcon" />
              <p>{job.type}</p>
            </div>
            <div className="flex items-center gap-1">
              <img src={imageJobs.salaryJob} alt="fulltimeIcon" />
              <p>{job.salary}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 relative">
          <div
            className={
              isFollowing === false
                ? "hidden"
                : `bg-pink-300 w-8 h-8 rounded-full absolute z-0 start-[-5px]`
            }
          ></div>
          <button className="z-10" onClick={handleClickFollow}>
            <img
              src={
                isFollowing === false
                  ? imageJobs.followIcon
                  : imageJobs.followingIcon
              }
              alt="followingIcon"
            />
          </button>
          <p className="text-sm font-semibold text-gray-500">
            {isFollowing === true ? "FOLLOWING" : "FOLLOW"}
          </p>
        </div>
        <button class="w-24 rounded-xl py-2 outline outline-2 outline-pink-200 hover:bg-pink-200">
          <p className="text-sm font-semibold text-gray-500">SEE MORE</p>
        </button>
      </div>
    </div>
  );
}

export default JobCard;

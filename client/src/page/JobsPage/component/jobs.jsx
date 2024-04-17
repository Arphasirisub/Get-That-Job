import JobCard from "../../../PublicComponant/JobCard";
import jobs from "../../../data/data";

function Job() {
  return (
    <div className="pt-5">
      <p className="font-semibold">{jobs.length} jobs for you</p>
      <div className="flex flex-wrap gap-8">
        {jobs.map((items) => {
          return <JobCard job={items} key={items.id} />;
        })}
      </div>
    </div>
  );
}

export default Job;

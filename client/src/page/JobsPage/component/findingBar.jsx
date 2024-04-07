import { useState, useEffect } from "react";
import { imageJobs } from "../../../data/image";

function FindingBar() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");

  const handleChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleChangeMinSalary = (e) => {
    e.preventDefault();
    setMinSalary(e.target.value);
  };

  const handleChangeMaxSalary = (e) => {
    e.preventDefault();
    setMaxSalary(e.target.value);
  };

  useEffect(() => {
    handleChangeSearch();
  }, [search, minSalary, maxSalary]);

  return (
    <>
      <p className="text-3xl">Find that job</p>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-gray-500">
            SEARCH BY JOB TITLE OR COMPANY NAME
          </span>
        </div>
        <label className="input input-bordered input-sm input-secondary flex items-center gap-2">
          <img alt="search-line" src={imageJobs.searchLine} />
          <input
            type="text"
            placeholder="manufacturing, sales, swim"
            className="grow"
            onChange={(e) => handleChangeSearch(e)}
          />
        </label>
      </label>
      <div className="flex gap-5">
        <label className="form-control w-72 max-w-xs">
          <div className="label">
            <span className="label-text text-gray-500">CATEGORY</span>
          </div>
          <select
            className="select select-bordered select-sm select-secondary"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option disabled value="">
              Select a category
            </option>
            <option value="Star Wars">Star Wars</option>
            <option value="Harry Potter">Harry Potter</option>
            <option value="Lord of the Rings">Lord of the Rings</option>
            <option value="Planet of the Apes">Planet of the Apes</option>
            <option value="Star Trek">Star Trek</option>
          </select>
        </label>
        <label className="form-control w-72 max-w-xs">
          <div className="label">
            <span className="label-text text-gray-500">TYPE</span>
          </div>
          <select
            className="select select-bordered select-sm select-secondary"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option disabled selected className="text-gray-500">
              Select a type
            </option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        </label>
        <div className="flex items-end">
          <label className="form-control max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500">SALARY RANGE</span>
            </div>
            <div className="flex items-center gap-2">
              <label className="input input-bordered input-sm input-secondary w-24 flex items-center gap-2">
                <img alt="search-line" src={imageJobs.salary} />
                <input
                  type="text"
                  placeholder="min"
                  className="grow"
                  onChange={(e) => {
                    e.preventDefault();
                    setMinSalary(e.target.value);
                  }}
                />
              </label>
              <p className="text-2xl">-</p>
              <label className="input input-bordered input-sm input-secondary w-24 flex items-center gap-2">
                <img alt="search-line" src={imageJobs.salary} />
                <input
                  type="text"
                  placeholder="max"
                  className="grow"
                  onChange={(e) => {
                    e.preventDefault();
                    setMaxSalary(e.target.value);
                  }}
                />
              </label>
            </div>
          </label>
        </div>
      </div>
    </>
  );
}

export default FindingBar;

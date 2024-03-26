import next from "../../../images/next.png";
import { useAuth } from "../../../contexts/authTools";
function ProLoginInfo() {
  const { setActiveSteps, setCompleteSteps } = useAuth();
  return (
    <form className="flex flex-col font-inter text-sm">
      <label>
        <p htmlFor="email" className="text-gray-800 mt-2 font-light">
          EMAIL
        </p>
        <input
          type="email"
          id="email"
          placeholder="some.user@mail.com"
          className="bg-white border border-[#f48fb1] outline-none rounded-md w-8/12 h-9 mt-1 pl-2.5"
        />
      </label>
      <label>
        <p htmlFor="password" className=" text-gray-800 mt-2 font-light">
          PASSWORD
        </p>
        <input
          type="password"
          id="password"
          placeholder="******"
          className="bg-white border border-[#f48fb1] outline-none rounded-md w-8/12 h-9 mt-1 pl-2.5"
        />
      </label>
      <label>
        <p htmlFor="password" className="text-gray-800 mt-2 font-light">
          PASSWORD CONFIRM
        </p>
        <input
          type="password"
          id="password"
          placeholder="******"
          className="bg-white border border-[#f48fb1] outline-none rounded-md w-8/12 h-9 mt-1 pl-2.5"
        />
      </label>
      <div className="flex justify-center mr-40 mt-5">
        <button
          onClick={() => {
            setActiveSteps("proPersonal");
            setCompleteSteps((prev) => ({
              ...prev,
              proLoginInfo: true,
            }));
          }}
          className="flex flex-row btn btn-secondary rounded-2xl border-transparent font-light bg-[#f48fb1] text-white"
        >
          <p>NEXT</p>
          <img src={next} />
        </button>
      </div>
    </form>
  );
}

export default ProLoginInfo;

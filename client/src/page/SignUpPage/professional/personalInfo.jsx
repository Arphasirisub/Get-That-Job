import next from "../../../images/next.png";
import { useAuth } from "../../../contexts/authTools";

function ProPersonal() {
  const { setActiveSteps } = useAuth();
  return (
    <form className="font-inter text-sm mt-7 flex flex-col">
      <div>
        <p className="text-[#616161] font-light">
          YOU CAN COMPLETE THIS INFORMATION LATER BUT WE
        </p>
        <p className="text-[#616161] font-light">RECOMENDED YOU TO DO IT NOW</p>
      </div>
      <label>
        <p htmlFor="name" className="text-gray-800 mt-2 font-light">
          NAME
        </p>
        <input
          type="name"
          id="name"
          placeholder="John Doe"
          className="bg-white border border-[#f48fb1] outline-none rounded-md w-8/12 h-9 mt-1 pl-2.5"
        />
      </label>
      <label>
        <p htmlFor="phone" className="text-gray-800 mt-2 font-light">
          PHONE
        </p>
        <input
          type="tel"
          id="phone"
          placeholder="+XXXXXXXXX"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          className="bg-white border border-[#f48fb1] outline-none rounded-md w-8/12 h-9 mt-1 pl-2.5"
        />
      </label>
      <p className="mt-1 font-light">+[country code][number]</p>
      <label>
        <p htmlFor="birthday" className="text-gray-800 mt-2 font-light">
          BIRTHDAY
        </p>
        <input
          type="birthday"
          id="birthday"
          placeholder="Pick a date"
          className="bg-white border border-[#f48fb1] outline-none rounded-md w-8/12 h-9 mt-1 pl-2.5"
        />
      </label>
      <label>
        <p htmlFor="birthday" className="text-gray-800 mt-2 font-light">
          LINKEDIN URL
        </p>
        <input
          type="birthday"
          id="birthday"
          placeholder="https://www.linkedin.com/in/username"
          className="bg-white border border-[#f48fb1] outline-none rounded-md w-8/12 h-9 mt-1 pl-2.5"
        />
      </label>
      <div className="flex flex-row justify-center mr-40 mt-5 gap-5">
        <button
          onClick={() => {
            setActiveSteps("professionalInfo");
          }}
          className="btn btn-ghost rounded-2xl font-light bg-[#f5f5f6] text-gray-800 border border-[#f48fb1]"
        >
          SKIP THIS!
        </button>
        <button
          onClick={() => {
            setActiveSteps("professionalInfo");
            setCompleteSteps((prev) => ({
              ...prev,
              proPersonal: true,
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

export default ProPersonal;

import people from "../../../images/people.png";

function CreateAccount() {
  return (
    <div className="w-screen bg-gray-100">
      <div className="flex flex-col items-center gap-6 font-montserrat">
        <div className="text-5xl text-gray-800 mt-28">
          <p>The place where</p>
          <p>
            you get <span className="text-pink-300">that</span> job
          </p>
        </div>
        <div className="flex flex-col items-center text-gray-800">
          <p>With our Machine Learning algorithm you will get that job</p>
          <p>in no time. We promise you! Just give us the money and we</p>
          <p>will take care of it.</p>
        </div>
        <div className="flex justify-center">
          <button className="btn btn-secondary rounded-2xl border-transparent w-60 font-light bg-pink-300 text-white ">
            create an account now
          </button>
        </div>

        <img className="w-3/4 h-3/5" src={people} alt="Our Team" />
      </div>
    </div>
  );
}

export default CreateAccount;

import people from "../../../images/people.png";

function CreateAccount() {
  return (
    <div className="w-screen h-screen bg-gray-100">
      <div className="flex flex-col justify-center gap-6 font-montserrat">
        <div className="flex flex-col justify-center text-5xl text-gray-800 border border-pink-500">
          <p>The place where</p>
          <p>
            you get <span className="text-pink-300">that</span> job
          </p>
        </div>
        <div>
          <p className="text-gray-800 flex justify-center">
            With our Machine Learning algorithm you will get that job
          </p>
          <p className="text-gray-800 flex justify-center">
            in no time. We promise you! Just give us the money and we
          </p>
          <p className="text-gray-800 flex justify-center">
            will take care of it.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="btn btn-secondary rounded-2xl border-transparent w-40 bg-pink-300 text-white">
            create an account now
          </button>
        </div>

        <img className="w-32 m-32" src={people} alt="Our Team" />
      </div>
    </div>
  );
}

export default CreateAccount;

/** ห้ามดู
  * <div className="flex flex-col justify-center text-5xl text-gray-800">
  *   <p>The place where</p>
  *   <p>you get <span className="text-pink-300">that</span> job</p>
  * </div>
  * 
  * <div className="flex flex-col justify-center text-gray-800">
  *   <div>
  *     <p>With our Machine Learning algorithm you will get that job</p>
  *     <p>in no time. We promise you! Just give us the money and we</p>
  *     <p>will take care of it.</p>
  *   </div>
  *   <button className="btn btn-secondary rounded-2xl border-transparent w-40 bg-pink-300 text-white">
        create an account now
      </button>
  * </div>
 */

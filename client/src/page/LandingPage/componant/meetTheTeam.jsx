import ruby from "../../../images/ruby.png";
import javier from "../../../images/javier.png";
import francisca from "../../../images/francisca.png";
import raul from "../../../images/raul.png";
import contact from "../../../images/contact.png";

function MeetTheTeam() {
  return (
    <div className="w-screen h-fit bg-gray-100">
      <div className="flex flex-col gap-6 font-montserrat justify-center items-center">
        <p className="flex justify-center text-5xl text-pink-400">
          Meet the team
        </p>
        <div className="flex gap-16 justify-between items-center max-w-52">
          <div className="flex flex-col items-center justify-center">
            <img className="w-24 h-24" src={ruby} alt="ruby" />
            <p className="mt-2 text-center">Ruby Ramirez</p>
            <img className="w-24 h-24" src={contact} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-24 h-24" src={javier} alt="javier" />
            <p className="mt-2 text-center">Javier Escribano</p>
            <img className="w-24 h-24" src={contact} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-24 h-24" src={francisca} alt="francisca" />
            <p className="mt-2 text-center">Francisca Reategui</p>
            <img className="w-24 h-24" src={contact} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-24 h-24" src={raul} alt="raul" />
            <p className="mt-2 text-center">Raul Rubina</p>
            <img className="w-24 h-24" src={contact} />
          </div>
        </div>
        <hr className=" w-4/5 underline text-pink-500" />
        <p className="flex justify-center">© 2021 - Get That Job</p>
      </div>
    </div>
  );
}

export default MeetTheTeam;

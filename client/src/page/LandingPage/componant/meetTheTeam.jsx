import { imageLandingPage } from "../../../data/image";

const team = [
  { name: "Ruby Ramirez", picture: imageLandingPage.ruby },
  { name: "Javier Escribano", picture: imageLandingPage.javier },
  { name: "Francisca Reategui", picture: imageLandingPage.francisca },
  { name: "Raul Rubina", picture: imageLandingPage.raul },
];

function MeetTheTeam() {
  return (
    <div className="w-screen h-fit bg-gray-100">
      <div className="flex flex-col gap-6 font-montserrat justify-center items-center">
        <p className="flex justify-center text-5xl text-pink-300 mt-8">
          Meet the team
        </p>
        <div className="flex gap-16 justify-between items-center">
          {team.map((items) => {
            return (
              <div className="flex flex-col items-center justify-center">
                <img className="w-24 h-24" src={items.picture} alt="ruby" />
                <p className="mt-2 text-center">{items.name}</p>
                <img className=" w-24 h-10" src={imageLandingPage.contact} />
              </div>
            );
          })}
        </div>
        <div className=" w-4/5 border border-pink-500" />
        <p className="flex justify-center mb-8">© 2021 - Get That Job</p>
      </div>
    </div>
  );
}

export default MeetTheTeam;

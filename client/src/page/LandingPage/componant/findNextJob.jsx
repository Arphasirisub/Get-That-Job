import magnifyingGlass from "../../../images/magnifyingGlass.png";
function FindNextJob() {
  return (
    <>
      <div className="w-screen bg-pink-500">
      <div className="flex flex-row gap-6 font-montserrat justify-center">
        <div className="flex flex-col basis-3/4 w-full">
          <p className="text-5xl">Find your next job</p>
          <br />
          <p className="flex basis-3/4 flex-col ">
            Our Machine learning algorithm is so good that it’s
            <p>even illegal in some countries. Join us to use our </p>
            <p>barelly legal algorithm that is actually a group of</p>
            <p>interns that work on our basement.</p>
            <br />
            <p>We have a job for you, no matter your background or</p>
            <p>previous experience. Is sending random memes </p>
            <p>through chat your only skill? That’s ok, we got you,</p>
            <p>our Rock Star Meme Curator role is here for you.</p>
          </p>
        </div>
        <div className="flex basis-1/2">
          <img src={magnifyingGlass} alt="magnifying glass" />
        </div>
      </div>
    </div>
    </>
  );
}

export default FindNextJob;

import next from "../../../images/next.png";
import { useAuth } from "../../../contexts/authTools";
import { useState } from "react";
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function ProPersonal() {
  const {
    setActiveSteps,
    proName,
    setProName,
    proPhone,
    setProPhone,
    // proBirthday,
    setProBirthday,
    linkedIn,
    setLinkedIn,
    input,
    setInput,
  } = useAuth();

  //handle input
  const handleNameChange = (e) => {
    const newName = e.target.value;
    setInput((prevInput) => [
      {
        ...prevInput[0],
        proName: newName,
      },
    ]);
  };

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;
    setInput((prevInput) => [
      {
        ...prevInput[0],
        proPhone: newPhone,
      },
    ]);
  };
  const handleLinkedInChange = (e) => {
    const newLinked = e.target.value;
    setInput((prevInput) => [
      {
        ...prevInput[0],
        linkedIn: newLinked,
      },
    ]);
  };

  function submitPersonalInfo(event) {
    event.preventDefault();

    setInput([
      {
        ...input,
        proName,
        proPhone,
        linkedIn,
      },
    ]);

    console.log(input);

    setActiveSteps("professionalInfo");
  }

  return (
    <form
      onSubmit={submitPersonalInfo}
      className="font-inter text-sm mt-7 flex flex-col"
    >
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
          onChange={handleNameChange}
          defaultValue={input.proName}
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
          onChange={handlePhoneChange}
          defaultValue={input.proPhone}
          placeholder="+XXXXXXXXX"
          pattern="[0]{1}[0-9]{9}"
          className="bg-white border border-[#f48fb1] outline-none rounded-md w-8/12 h-9 mt-1 pl-2.5"
        />
      </label>
      <p className="mt-1 font-light">+[country code][number]</p>
      <label>
        <p htmlFor="birthday" className="text-gray-800 mt-2 font-light">
          BIRTHDAY
        </p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="choose your birthday"
              id="birthday"
              className="bg-white outline-none rounded-md w-8/12 mt-1 pl-2.5"
              // onChange={handleDateChange}
              // value={proBirthday}
            />
          </DemoContainer>
        </LocalizationProvider>
      </label>
      <label>
        <p htmlFor="linkedIn" className="text-gray-800 mt-2 font-light">
          LINKEDIN URL
        </p>
        <input
          type="text"
          id="linkedIn"
          onChange={handleLinkedInChange}
          defaultValue={input.linkedIn}
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
          type="submit"
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

import React, { useState } from "react";

const Form = () => {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formNumber, setFormNumber] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const formNameHandle = (e) => {
    setFormName(e.target.value)
  }
  const formEmailHandle = (e) => {
    setFormEmail(e.target.value)
  }
  const formNumberHandle = (e) => {
    setFormNumber(e.target.value)
  }
  const formMessageHandle = (e) => {
    setFormMessage(e.target.value)
  }

  return (
    <div className="w-full h-full px-6 py-16">
      <div className="container mx-auto">
        <div className="flex flex-col gap-5 items-center">
          <h1>BİZƏ YAZIN</h1>
          <div className="">
            <form
              action="https://getform.io/f/lbjnklzb"
              method="POST"
              className="flex flex-col items-center gap-5"
            >
              <div className="flex items-center justify-center gap-5 flex-wrap">
                <input
                  className="border-none outline-none h-[70px] sm:w-[360px] w-[280px] pl-2 pt-2 shadow-lg"
                  type="text"
                  placeholder="Adınız"
                  required
                  name="Ad"
                  onChange={formNameHandle}
                  value={formName}
                />
                <input
                  className="border-none outline-none h-[70px] sm:w-[360px] w-[280px] pl-2 pt-2 shadow-lg"
                  type="email"
                  placeholder="E-mail"
                  required
                  name="Email"
                  value={formEmail}
                  onChange={formEmailHandle}
                />
                <input
                  className="border-none outline-none h-[70px] sm:w-[360px] w-[280px] pl-2 pt-2 shadow-lg"
                  type="number"
                  placeholder="Phone number"
                  required
                  name="Number"
                  value={formNumber}
                  onChange={formNumberHandle}
                />
              </div>
              <div>
                <textarea
                  className="resize-none pl-3 pt-3 border-none outline-none cr:w-[1120px] lg:w-[900px] md:w-[800px] cg:w-[600px] sm:w-[500px] rd:w-[360px] w-[280px] h-[219.93px] shadow-lg"
                  placeholder="Mətninizi daxil edin..."
                  required
                  name="message"
                  value={formMessage}
                  onChange={formMessageHandle}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full h-[40px] bg-red-500 rounded-lg tracking-[1.5px] md:text-[24px] sm:text-[22.2px] text-[20.4px] text-white font-Montserrat font-bold transition duration-200 opacity-80 hover:opacity-100"
              >
                Göndər
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

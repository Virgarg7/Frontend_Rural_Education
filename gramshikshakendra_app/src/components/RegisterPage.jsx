import React from "react";
import img1 from "../assets/img1.png";

const RegisterPage = () => {
  return (
    <div>
      <div className="w-full h-screen bg-[#0D77EC] relative overflow-x-hidden">
        <button className="flex items-center">
          <img src={img1} alt="" height={150} width={150} />
          <h2 className="text-white font-bold text-2xl m-[-20px]">
            GramShikshaKendra
          </h2>
        </button>
        <div className="absolute w-[70%] h-screen -z-0 bg-[#F5F5F5] top-0 -right-5 rounded-3xl flex flex-col items-center">
          <h2 className="font-bold text-3xl">Register Yourself</h2>
          <form className="border-2"></form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

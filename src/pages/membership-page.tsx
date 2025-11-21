import { useState } from "react";
import { memberShip } from "../constants/MembershipData";
import { useNavigate } from "react-router-dom";

function Membership() {
  const [pricingPeriod, setPricingPeriod] = useState("monthly");
  const navigateToSignInPage = useNavigate();
  const handleClick = () => {
    navigateToSignInPage('/signin-page');
  } 
  return (
    <>
      <div className="flex flex-col gap-[50px] px-5 items-center mt-6">
        <div className="w-full max-w-[450px] flex justify-around items-center  py-3 rounded-full  shadow-sm">
          <button
            onClick={() => setPricingPeriod("monthly")}
            className={`px-10 py-3 rounded-full text-[20px] ${
              pricingPeriod === "monthly"
                ? "bg-red-500 text-white font-semibold"
                : "bg-transparent text-[#454630]"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setPricingPeriod("yearly")}
            className={`px-10 py-3 rounded-3xl text-[20px] ${
              pricingPeriod === "yearly"
                ? "bg-red-500 text-white font-semibold"
                : "bg-transparent text-[#454630]"
            }`}
          >
            Yearly
          </button>
        </div>

        <div className="flex flex-col gap-[35px] md:grid md:grid-cols-3 grid-rows-1">
          {memberShip.map((membership, index) => (
            <div
              key={index}
              className="flex flex-col items-center shadow-2xl p-[50px] "
            >
              <div className="text-[22px] font-sans text-[#454630] font-bold mb-2.5 md:text-[28px] lg:text-[38px]">
                {membership.title}
              </div>
              <div className="text-[55px] font-sans text-red-500 font-bold mb-[15px]">
                {pricingPeriod === "monthly"
                  ? membership.price
                  : membership.yearlyPrice}
                <span className="text-[15px] text-[#454630]  lg:text-[17px]">
                  {pricingPeriod === "monthly"
                    ? membership.priceSubtext
                    : membership.yearlySubtext}
                </span>
              </div>
              <div className="text-center text-[13px] font-sans text-[#454630] mb-[25px] md:text-[14px] md:font-semibold lg:text-[14px]">
                {membership.description}
              </div>
              <ul className="text-left list-disc list-inside text-[#555555] marker:text-sky-500 flex flex-col gap-[15px] mb-[25px] ">
                {membership.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button
                className={`py-2.5 px-[25px] text-[12px] font-semibold  ${
                  index === 0 ? "bg-red-500" : "bg-[#4B4870] hover:bg-[#3d3a5c]"
                } text-white`}
              >
                {membership.button}
              </button>
            </div>
          ))}
        </div>
        <div className="text-[13px]  text-[#596172] md:text-[14px] lg:text-[17px]">
          Already have an account?
          <span className="text-[13px] lg:text-[17px] text-[#596172] font-bold md:text-[14px]" onClick={handleClick}>
            Sign In
          </span>
        </div>
      </div>
    </>
  );
}

export default Membership;

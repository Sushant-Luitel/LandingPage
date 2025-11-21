import { useNavigate } from "react-router-dom";

function Subscriber() {
  const navigate = useNavigate();
  const navigateToSignInPage = () => {
    navigate("/signin-page");
  };
  return (
    <>
      <div className="w-full max-w-[488px]  border-2 border-gray-200 p-5 md:p-12 flex flex-col gap-6 justify-center items-center rounded-lg shadow-lg ">
        <div className="text-center text-[18px] md:text-[20px] text-[#434560] font-bold font-josefin">
          This article is for subscribers only
        </div>
        <div className="text-[13px] md:text-[14px] text-[#434560] font-sans text-center">
          To continue reading this article, just register your email and we will
          send you access.
        </div>
        <button className="px-6 py-2 text-[14px] bg-red-500 text-white">Subscribe Now</button>
        <div className="text-[13px]  text-[#596172] md:text-[14px] lg:text-[17px]">
          Already have an account?
          <span
            className="text-[13px] lg:text-[17px] text-[#596172] font-bold md:text-[14px] "
            onClick={navigateToSignInPage}
          >
            Sign In
          </span>
        </div>
      </div>
    </>
  );
}

export default Subscriber;

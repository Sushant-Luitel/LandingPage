import LoginComponent from "./LoginForm";

function LoginHeader() {
  return (
    <>
      <div className="w-full max-w-[600px] flex flex-col gap-[30px] justify-center items-center md:gap-[50px] ">
        <div className="flex flex-col justify-center items-center">
          <div className="text-[22px]  text-[#4B4870] font-josefin font-bold text-center leading-tight md:text-[50px] transition-transform duration-300  hover:scale-112">
            Welcome Back to <br />
            <span className="text-red-700">M</span>aktub for Ghost
          </div>
          <div className="text-[16px] text-center text-[#7D7987] font-sans mt-4 md:text-[18px]">
            A super modern theme following the latest trends with premium
            Membership and fully compatible with Ghost.
          </div>
        </div>
        <LoginComponent />
      </div>
    </>
  );
}

export default LoginHeader;

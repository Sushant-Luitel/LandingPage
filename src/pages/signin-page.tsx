import LoginHeader from "../components/Authentication/LoginHeader";

function SignInPage() {
    const handleClick = () => {
        window.location.href = "/";
    }
    return(
        <>
        <div className="md:w-[600px] flex flex-col gap-[30px] justify-center  md:gap-[50px] py-7 px-5 mr-auto ml-auto ">
            <div onClick={handleClick} className="w-[120px] text-[12px]  font-sans text-[#454360] md:text-[15px] font-semibold text-start border-b-2 border-transparent hover:border-[#1DA1F2] cursor-pointer transition-colors">Go back to home</div>
            <div className=" xl:w[600px] p-5 shadow-2xl flex rounded-lg mr-auto ml-auto">
                <LoginHeader />
            </div>
        </div>
        </>
    );
};
export default SignInPage;
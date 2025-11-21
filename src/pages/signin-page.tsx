import { useNavigate } from "react-router-dom";
import LoginHeader from "../components/Authentication/LoginHeader";

function SignInPage() {
    const navigate = useNavigate();
    const navigateToSignInPage = () => {
        navigate('/');
    }
    return(
        <>
        <div className="md:w-[600px] flex flex-col gap-[30px] justify-center  md:gap-[50px] py-7 px-5 mr-auto ml-auto ">
            <div onClick={navigateToSignInPage} className="w-[120px] text-[12px]  font-sans text-[#454360] md:text-[15px] font-semibold text-start hover:underline underline-offset-2 decoration-blue-400 decoration-2">Go back to home</div>
            <div className=" xl:w[600px] p-5 shadow-2xl flex rounded-lg mr-auto ml-auto">
                <LoginHeader />
            </div>
        </div>
        </>
    );
};
export default SignInPage;
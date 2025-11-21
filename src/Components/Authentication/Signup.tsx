import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SignupSchema } from "./Signup.zod";
import { useNavigate } from "react-router-dom";
type FormValues = z.infer<typeof SignupSchema>;

export const Signup = () => {
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/");
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(SignupSchema) });

  const onSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert(
      "Hello, " +
        JSON.stringify(data.name) +
        "! You have successfully signed up."
    );
  };

  return (
    <div className="w-full p-5">
      <div className="max-w-md mx-auto flex flex-col gap-5">
        <div
          onClick={navigateToHomePage}
          className="w-fit text-[12px] font-sans text-[#454360] md:text-[15px] font-semibold hover:underline underline-offset-2 decoration-blue-400 decoration-2 cursor-pointer"
        >
          Go back to home
        </div>

        <div className="shadow-lg p-7 rounded-lg bg-white">
          <div className="text-center font-josefin text-2xl text-[#454360] font-bold mb-2">
            Subscribe to <span className="text-red-700">M</span>aktub
          </div>
          <div className="text-center font-source-serif text-sm text-gray-500 mb-6">
            A super modern theme following the latest trends with premium
            Membership and fully compatible with Ghost.
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col justify-center w-full rounded">
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                {...register("name")}
                className="w-full border border-gray-300 rounded-lg p-2 outline-none"
              />
              <p className="text-red-500 text-sm mb-3 h-4">
                {errors.name?.message}
              </p>

              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className="w-full border border-gray-300 rounded-lg p-2 outline-none"
              />
              <p className="text-red-500 text-sm mb-3 h-4">
                {errors.email?.message}
              </p>

              <label className="block text-gray-700 font-medium mb-1">
                Phone No
              </label>
              <input
                type="number"
                placeholder="Enter phone number"
                {...register("phone")}
                className="w-full border border-gray-300 rounded-lg p-2 outline-none"
              />
              <p className="text-red-500 text-sm mb-3 h-4">
                {errors.phone?.message}
              </p>

              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Create password"
                {...register("password")}
                className="w-full border border-gray-300 rounded-lg p-2 outline-none"
              />
              <p className="text-red-500 text-sm mb-3 h-4">
                {errors.password?.message}
              </p>

              <label className="block text-gray-700 font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                {...register("confirmpassword")}
                className="w-full border border-gray-300 rounded-lg p-2 outline-none"
              />
              <p className="text-red-500 text-sm mb-5 h-4">
                {errors.confirmpassword?.message}
              </p>

              <div className="relative inline-block group mt-2">
                <span className="absolute w-full h-full top-0 left-0 px-[25px] py-2 border-2 border-[#47446a]"></span>
                <button
                  disabled={isSubmitting}
                  className={`relative w-full h-full bg-[#47446a] text-white px-8 py-3 text-lg transition-all duration-300 hover:-top-1.5 hover:-left-1.5 ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Sign Up"}
                </button>
              </div>

              <div className="text-[13px] text-[#454360] text-center mt-5">
                Already have an account?{" "}
                <a href="/signin-page" className="font-bold cursor-pointer">
                  Sign In
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

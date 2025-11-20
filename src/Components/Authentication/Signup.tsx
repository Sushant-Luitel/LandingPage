import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SignupSchema } from "./Signup.zod";
type FormValues = z.infer<typeof SignupSchema>;

export const Signup = () => {
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
    <div className="md:w-[600px] flex flex-col gap-[30px] justify-center  md:gap-[50px] py-7 px-5 mr-auto ml-auto ">
      <div className="w-[120px] text-[12px]  font-sans text-[#454360] md:text-[15px] font-semibold text-start hover:underline underline-offset-2 decoration-blue-400 decoration-2">
        Go back to home
      </div>
      <div className=" xl:w[600px] p-5 shadow-2xl flex rounded-lg mr-auto ml-auto">
        <div className="shadow-md max-w-4xl p-3 flex flex-col justify-center items-center md:p-8 gap-4">
          <div className="text-center font-josefin text-2xl md:text-4xl text-[#454360] font-bold lg:text-5xl">
            Subscribe to
            <br />
            <span className="text-red-700">M</span>aktub for Ghost
          </div>
          <div className="text-center font-source-serif text-sm text-gray-500 mt-4 md:text-xl">
            A super modern theme following the latest trends with premium
            Membership and fully compatible with Ghost.
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-center items-center flex-col"
          >
            <div className="gap-5 flex flex-col mt-6 md:mt-10 lg:w-full justify-center items-center font-source-serif md:flex-col">
              <input
                {...register("name")}
                className="shadow-lg px-5 py-2 md:w-xs lg:w-full lg:max-w-xl focus:outline-none"
                placeholder="Enter your name"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}

              <input
                {...register("email")}
                className="shadow-lg px-5 py-2 w-full lg:max-w-xl focus:outline-none"
                placeholder="Enter your email"
              />

              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}

              <input
                type="number"
                className="shadow-lg px-5 py-2 md:w-xs lg:w-full lg:max-w-xl focus:outline-none"
                placeholder="Phone No:"
                {...register("phone")}
              />
              {errors.phone && (
                <span className="text-red-500">{errors.phone.message}</span>
              )}

              <input
                type="password"
                placeholder="Password:"
                className="shadow-lg px-5 py-2 md:w-xs lg:w-full lg:max-w-xl focus:outline-none"
                {...register("password")}
              />
              {errors.password && (
                <span className="text-red-500">
                  {errors.password.message || "Please fill out this field"}
                </span>
              )}

              <input
                type="password"
                placeholder="Confirm Password:"
                className="shadow-lg px-5 py-2 md:w-xs lg:w-full lg:max-w-xl focus:outline-none"
                {...register("confirmpassword")}
              />
              {errors.confirmpassword && (
                <span className="text-red-500">
                  {errors.confirmpassword.message ||
                    "Please fill out this field"}
                </span>
              )}
            </div>

            <div className="mt-7">
              <button
                disabled={isSubmitting}
                className={`shadow-lg px-3 py-2 w-auto bg-blue-900 text-white mt-4 ${
                  isSubmitting ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>

          <div className="mt-5 font-source-serif text-sm md:text-xl">
            Already have an account?{" "}
            <a
              href="/signin-page"
              className="font-semibold font-source-serif text-sm md:text-lg"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

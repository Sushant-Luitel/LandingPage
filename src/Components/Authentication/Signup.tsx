import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmpassword: string;
};

export const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Hello, "+JSON.stringify(data.name)+"! You have successfully signed up.");
  };
    const password = watch("password", "");

  return (
    <div className="pt-3 p-1 md:pt-[50px] md:p-10 max-w-7xl w-full flex justify-center items-center">
      <div className="shadow-md max-w-4xl p-3 flex flex-col justify-center items-center md:p-8 gap-4">
        <div className="text-center font-josefin text-2xl md:text-4xl font-bold lg:text-5xl">
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
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters long",
                },
                maxLength: {
                  value: 30,
                  message: "Name cannot exceed 30 characters",
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/i,
                  message: "Name can only contain letters and spaces",
                },
              })}
              className="shadow-lg px-5 py-2 md:w-xs lg:w-full lg:max-w-xl focus:outline-none"
              placeholder="Enter your name"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}

            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s]+@[^\s]+\.[^\s]+$/,
                  message: "Invalid email address",
                },
              })}
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
              {...register("phone", {
                required: "Phone number is required",

                pattern: {
                  value: /^[0-9]+$/,
                  message: "Phone number can only contain digits",
                },
                minLength: {
                  value: 10,
                  message: "Phone number must be at least 10 digits",
                },
                maxLength: {
                  value: 15,
                  message: "Phone number cannot exceed 15 digits",
                },
              })}
            />
            {errors.phone && (
              <span className="text-red-500">{errors.phone.message}</span>
            )}

            <input
              type="password"
              placeholder="Password:"
              className="shadow-lg px-5 py-2 md:w-xs lg:w-full lg:max-w-xl focus:outline-none"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
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
              {...register("confirmpassword", {
                required: "Password confirmation is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmpassword && (
              <span className="text-red-500">
                {errors.confirmpassword.message || "Please fill out this field"}
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
            href="/login"
            className="font-semibold font-source-serif text-sm md:text-lg"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
type FormValues = {
  name: string;
  password: string;
};
function LoginComponent() {
  const form = useForm<FormValues>();
  const navigate=useNavigate()
  const { register, formState, handleSubmit, reset } = form;

  const onsubmit = (data: FormValues) => {
    console.log(data);
    reset();
  };
  const { errors } = formState;
  const handleClick = () => {
    navigate('/signup');
  };
  return (
    <>
      <div className="w-full p-5 ">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="flex flex-col justify-center  w-full  rounded">
            <label className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter name"
              {...register("name", {
                required: "Name is required",
                validate: {
                  name: (value) => value == "Pranawa" || "Incorrect Name",
                },
              })}
              className="w-full border border-gray-300 rounded-lg p-2 mb-5 outline-none "
            />
            <p className="text-red-500">{errors.name?.message}</p>

            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter name"
              {...register("password", {
                required: "Password is required",
                validate: {
                  password: (value) =>
                    value == "pranawa123" || "Incorrect Password",
                },
              })}
              className="w-full border border-gray-300 rounded-lg p-2 mb-5 outline-none "
            />
            <p className="text-red-500">{errors.password?.message}</p>

            <div className="relative inline-block group">
              <span className="absolute w-full h-full top-0 left-0 px-[25px] py-2 border-2 border-[#47446a]"></span>
              <button className="relative w-full h-full  bg-[#47446a] text-white px-8 py-3 text-lg transition-all duration-300 hover:-top-1.5 hover:-left-1.5">
                Send Login Link
              </button>
            </div>

            <div className="text-[13px] text-[#454360] text-center mt-5">
              Don't have an account?{" "}
              <span className="font-bold" onClick={handleClick}>
                Sign Up
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginComponent;

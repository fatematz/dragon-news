'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {

     const {
    register,
    handleSubmit, 
    formState : {errors},
     } = useForm()

     console.log(errors, "errors")

    const handleLoginFun = (data) => {

        console.log(data, "data")
        // e.preventDefault();

        // const email =e.target.email.value;
        // const password =e.target.password.value;
        // console.log(email, password)
    }
    return (
        <div className=" min-h-[80vh] bg-slate-100 pt-16 pb-5 ">
            <div className="rounded-xl p-4 bg-white max-w-[752px] mx-auto">
            <h1 className="text-center font-bold text-3xl border-b py-8 mx-15">Register your account</h1>

            <form className="ml-52 my-6" onSubmit={handleSubmit (handleLoginFun)}>



 <fieldset className="fieldset">
  <legend className="font-semibold text-[20px] fieldset-legend">Your Name</legend>
  <input type="name" {...register("name" , {required: "Name field is required" })} className="input" placeholder="Enter your Name" />
{errors.name && <p className="text-red-500"> {errors.name.message} </p>}
</fieldset>

 <fieldset className="fieldset">
  <legend className="font-semibold text-[20px] fieldset-legend">Photo URL</legend>
  <input type="photoUrl" {...register("photoUrl" , {required: "Photo Url field is required" })} className="input" placeholder="Enter your Photo Url" />
{errors.photoUrl && <p className="text-red-500"> {errors.photoUrl.message} </p>}
</fieldset>

                 <fieldset className="fieldset">
  <legend className=" font-semibold text-[20px] fieldset-legend">Email </legend>
  <input type="email" {...register("email", {required: "email field is required"} ) } className="input" placeholder="Enter your email address" />

{errors.email && <p className="text-red-500"> {errors.email.message} </p>}
</fieldset>


 <fieldset className="fieldset">
  <legend className="font-semibold text-[20px] fieldset-legend">Password</legend>
  <input type="password" {...register("password" , {required: "password field is required" })} className="input" placeholder="Enter your password" />
{errors.password && <p className="text-red-500"> {errors.password.message} </p>}
</fieldset>

<button className="btn bg-[#403F3F] text-white w-[320px] mt-[20px]">Register</button>
   
            </form>

        </div>
        </div>
    );
};

export default LoginPage;
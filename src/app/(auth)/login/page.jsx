'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {

     const {
    register,
    handleSubmit
     } = useForm()


    const handleLoginFun = (data) => {

        console.log(data, "data")
        // e.preventDefault();

        // const email =e.target.email.value;
        // const password =e.target.password.value;
        // console.log(email, password)
    }
    return (
        <div className=" min-h-[80vh] bg-slate-100 pt-16 ">
            <div className="rounded-xl p-4 bg-white max-w-[752px] mx-auto">
            <h1 className="text-center font-bold text-3xl border-b py-8 mx-15">Login Your Account</h1>

            <form className="ml-52 my-6" onSubmit={handleSubmit (handleLoginFun)}>
                 <fieldset className="fieldset">
  <legend className=" font-semibold text-[20px] fieldset-legend">Email address</legend>
  <input type="email" {...register("email", {required: true} ) } className="input" placeholder="Enter your email address" />

</fieldset>

 <fieldset className="fieldset">
  <legend className="font-semibold text-[20px] fieldset-legend">Password</legend>
  <input type="password" {...register("password" , {required: true})} className="input" placeholder="Enter your password" />

</fieldset>

<button className="btn bg-[#403F3F] text-white w-[320px] mt-[20px]">Login</button>
   
   <h4 className="text-[#706F6F] mt-4 ">Dont’t Have An Account ? <Link href="/register" className="text-red-500">Register</Link> </h4>
            </form>

        </div>
        </div>
    );
};

export default LoginPage;
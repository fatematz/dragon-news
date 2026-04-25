import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const RightSideBar = () => {
  return (
    <div>
        <h1>Login With</h1>
        <div className="">
         <button className="flex justify-center item-center"> <FaGoogle />  Login With Google</button>
         <button> <FaGithub /> Login With Github</button>
         </div>
    </div>
  )
}

export default RightSideBar
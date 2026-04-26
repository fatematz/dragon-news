import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import swimmingImg from "@/assets/swimming.png"
import classImg from "@/assets/class.png"
import playgroundImg from "@/assets/playground.png"
import bgImg from "@/assets/bg.png"
import Image from "next/image";

const RightSideBar = () => {
  return (
    <>
    {/* first  */}
    <div>
        <h1 className="mb-4 text-20px font-bold">Login With</h1>
        <div className="space-y-4">
         <button className="text-center border w-full p-2 rounded border-blue-500  flex justify-center items-center gap-1 text-blue-500"> <FaGoogle />  Login With Google</button>
         <button className="gap-1 text-center border w-full p-2 rounded flex justify-center items-center g "> <FaGithub /> Login With Github</button>
         </div>
    </div>

    {/* second  */}

    <div className="mt-6">
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="">
    <ul className="border rounded ">
      <li className="flex p-2  items-center gap-1 pl-3 border-b text-gray-500"> <FaFacebook /> Facebook</li>
      <li className="flex p-2  items-center gap-1 pl-3 border-b text-gray-500"> <FaTwitter /> Twitter</li>
      <li className="flex p-2  items-center gap-1 pl-3 text-gray-500"> <FaInstagram /> Instagram</li>
    </ul>
      </div>
    </div>

    {/* three */}

    <div className="bg-gray-200 rounded ">
        <div className="px-4 pb-4">
            <h3 className="font-semibold mt-16 mb-3 py-4">Q-Zone</h3>

             <div className="">
                <Image src={swimmingImg} alt="swimmingImg"/>
            </div>  


            <div className="">
                <Image src={classImg} alt="classImg"/>
            </div>
            
           
            
            <div className="">
                <Image src={playgroundImg} alt="playgroundImg"/>
            </div>
        </div>
    </div>

    <div className="mt-8">
        <Image src={bgImg} alt="bgImg"/>
    </div>
    </>
  )
}

export default RightSideBar
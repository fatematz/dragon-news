import logo from '@/assets/logo.png'
import {format} from "date-fns";
import Image from "next/image";

const Header = () => {
    return (
        <div className="container py-[50px] space-y-[20px]">
            <div className="flex justify-center items-center">
            <Image className="" src={logo} alt="" />
            </div>
            <div className="">
                <p className="text-center text-[#706F6F] text-[18px]">Journalism Without Fear or Favour</p>
            </div>
            <div className="">
                <h3 className="text-center  text-[20px] font-medium text-[#403F3F]">{format(new Date(), "EEEE, MMM dd, yyyy")}</h3>
            </div>
        </div>
    );
};

export default Header;
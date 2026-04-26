'use client'
import Link from "next/link";
import userAvatar from '@/assets/user.png'
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar=() => {
    
        const pathname = usePathname();

    return (
        <div className="mt-[30px] mt-[30px]">
        <div className="flex justify-between items-center container ">
            <div className="">
                
            </div>
            <div className="">
                <ul className="flex justify-center gap-5 ">
                    <li> <Link href='/' className={pathname === '/' ? 'text-red-500 font-bold border-b-2 border-red-500' : ''}  >Home</Link> </li>
                    <li> <Link href='/about' className={pathname === '/about' ? 'text-red-500 font-bold border-b-2 border-red-500' : ''} >About</Link> </li>
                    <li> <Link href='/career' className={pathname === '/career' ? 'text-red-500 font-bold border-b-2 border-red-500' : ''} >Career</Link> </li>
                </ul>
            </div>
            <div className="flex justify-center gap-4">
                <Image src={userAvatar} alt="avatar img" />
                <Link  className="btn bg-gray-600 text-white" href="/login">Login</Link>
                <Link className="btn bg-gray-600 text-white" href="/register">register</Link>
            </div>
        </div>
        </div>
    );
};

export default Navbar;
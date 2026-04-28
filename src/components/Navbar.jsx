'use client'
import Link from "next/link";
import userAvatar from '@/assets/user.png'
import Image from "next/image";
import { usePathname, useRouter  } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Navbar=() => {

    const { data: session } = authClient.useSession()

    console.log(session, "session");
    
    
        const pathname = usePathname();
            const router = useRouter();

              const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login");
                }
            }
        });
    };

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

            <div className="flex justify-center items-center gap-4">
  <Image src={session?.user?.image || userAvatar} alt="avatar img" width={40} height={40} className="rounded-full " />
  
  {session ? (

    <>
      <span> Hello {session.user.name}</span>
      <button className="btn bg-gray-600 text-white" onClick={handleSignOut}>Logout</button>
    </>
  ) : (



    <>
      <Link className="btn bg-gray-600 text-white" href="/login">Login</Link>
      <Link className="btn bg-gray-600 text-white" href="/register">Register</Link>
    </>
      )}
</div>
        </div>
        </div>
    );
};

export default Navbar;
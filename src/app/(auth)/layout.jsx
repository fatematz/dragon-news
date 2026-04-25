import Navbar from "@/components/Navbar";
// import {Children} from "react";

const authLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default authLayout;
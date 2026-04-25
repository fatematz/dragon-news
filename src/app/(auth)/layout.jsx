import Navbar from "@/components/Navbar";
import {montserrat} from "../layout";
// import {Children} from "react";

const authLayout = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
            <Navbar />
            {children}
        </div>
    );
};

export default authLayout;
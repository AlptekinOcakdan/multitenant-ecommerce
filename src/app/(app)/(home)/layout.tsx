import {ReactNode} from "react";
import {Navbar} from "@/app/(app)/(home)/navbar";
import {Footer} from "@/app/(app)/(home)/footer";

interface props {
    children: ReactNode;
}

const Layout = ({children}: props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <div className="flex-1 bg-[#F4F4F4]">
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;
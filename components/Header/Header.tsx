import {FunctionComponent, useState} from "react";
import HeaderItem from "../HeaderItem/HeaderItem";
import MobileMenu from "../Menu/MobileMenu";

const Header: FunctionComponent = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
            {/*Desktop Nav*/}
            <nav className="hidden md:flex justify-between items-center">
                <HeaderItem href="/">
                    <img src="/crown.png" className="w-auto h-12" alt="logo"/>
                </HeaderItem>

                <div className="space-x-6">
                    <HeaderItem href="/">Dashboard</HeaderItem>
                    <HeaderItem href="/blog">Blog</HeaderItem>
                    <HeaderItem href="/">About</HeaderItem>
                    <HeaderItem href="/">Projects</HeaderItem>
                </div>

            </nav>

            {/*Mobile Nav*/}
            <nav className="block md:hidden flex justify-between items-center">
                <HeaderItem href="/">
                    <img src="/crown.png" className="w-auto h-8" alt="logo"/>
                </HeaderItem>
                <div className="block md:hidden">
                    <button className="block" onClick={() => setShowMobileMenu(true)}>
                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                             className="block text-black h-6 w-6 block">
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                             className="text-black h-6 w-6 hidden">
                            <path
    d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
                        </svg>
                    </button>
                </div>
            </nav>

            <MobileMenu close={() => setShowMobileMenu(false)} display={showMobileMenu}/>
        </>
    );
};

export default Header;

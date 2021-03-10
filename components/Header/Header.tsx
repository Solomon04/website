import {FunctionComponent} from "react";
import HeaderItem from "../HeaderItem/HeaderItem";

const Header: FunctionComponent = () => {
    return (
        <nav className="flex justify-between items-center">
            <HeaderItem href="/">
                <img src="/crown.png" className="w-auto h-12" alt="logo"/>
            </HeaderItem>

            <div className="space-x-6">
                <HeaderItem href="/">Dashboard</HeaderItem>
                <HeaderItem href="/">Blog</HeaderItem>
                <HeaderItem href="/">About</HeaderItem>
                <HeaderItem href="/">Projects</HeaderItem>
            </div>

        </nav>
    );
};

export default Header;

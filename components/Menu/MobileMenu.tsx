import {FunctionComponent} from "react";
import HeaderItem from "../HeaderItem/HeaderItem";

type MenuProps = {
    close: () => void
    display: boolean
}

const MobileMenu: FunctionComponent<MenuProps> = (props) => {
    return (
        <div className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50 ${props.display ? 'block' : 'hidden'}`}>
            <div
                className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white h-screen">
                <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <img src="/crown.png" className="w-auto h-8" alt="logo"/>
                        </div>
                        <div className="-mr-2">
                            <button type="button"
                                    onClick={props.close}
                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Close menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                        <HeaderItem href="/">Dashboard</HeaderItem>
                        <HeaderItem href="/blog">Blog</HeaderItem>
                        <HeaderItem href="/">About</HeaderItem>
                        <HeaderItem href="/">Projects</HeaderItem>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;

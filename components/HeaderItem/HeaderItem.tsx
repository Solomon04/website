import React, {FunctionComponent} from "react";
import Link from "next/link";

type HeaderItemProps = {
    href: string
}

const HeaderItem: FunctionComponent<HeaderItemProps> = (props) => {
    return (
        <Link href={props.href}>
            <a className="text-gray-600 text-base hover:bg-gray-200 hover:text-gray-800 px-3 py-2 rounded-md">
                {props.children}
            </a>
        </Link>
    );
};

export default HeaderItem;

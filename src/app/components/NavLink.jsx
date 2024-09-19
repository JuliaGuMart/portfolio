import Link from "next/link";
const NavLink = ({href,title}) => {
    return(
        <Link href={href} className="py-2 pl-1 pr-2 text-white sm:text-xl rounded hover:text-purple-400">{title}</Link>
    );
};
export default NavLink;
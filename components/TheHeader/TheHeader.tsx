import Link from "next/link";
import './TheHeader.css';

export const TheHeader = () =>{
    return (
        <header className="header-container">
            <Link className="header-container__link" href={"/"}>Home</Link>
            <Link className="header-container__link" href={"/about"}>About</Link>
            <Link className="header-container__link" href={"/my-page"}>My Page</Link>
            <Link className="header-container__link" href={"/blog"}>Blog</Link>
            <Link className="header-container__link" href={"/settings"}>Settings</Link>
        </header>
    );
}
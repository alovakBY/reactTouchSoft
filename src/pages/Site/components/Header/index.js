import { Link } from "./Link";
import { Button } from "../../../../commonComponents/ButtonSite";

import logo from "../../../../static/icons/logo.svg";

import s from "../../../../styles/Header.module.css";

export function Header({ LINKS }) {
    const linksArray = LINKS.map((link, index) => {
        return <Link key={index} link={link} />;
    });
    return (
        <header className={s.header}>
            <nav>
                <ul className={s.navigation}>{linksArray}</ul>
            </nav>
            <img src={logo} alt="logo" className={s.logo} />
            <div className={s.item}>
                <div>
                    <a href="#">Veterinarian login</a>
                </div>
                <Button text="Try Mixlab" />
            </div>
        </header>
    );
}

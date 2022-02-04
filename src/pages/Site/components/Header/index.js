import { useState } from "react";

import { Link } from "./Link";
import { Button } from "../../../../commonComponents/ButtonSite";

import logo from "../../../../static/icons/logo.svg";

import s from "../../../../styles/HeaderSite.module.css";

export function Header({ LINKS }) {
  const [activState, setActivState] = useState(false);

  const handlerBurgerButton = () => {
    setActivState(!activState);
  };

  const linksArray = LINKS.map((link, index) => {
    return <Link key={index} link={link} />;
  });

  const toggleBurgerButton = `${s.burgerButton} ${activState ? s.activ : ""}`;
  const toggleBurgerMenu = `${s.burgerMenu} ${activState ? s.activ : ""}`;

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={toggleBurgerButton} onClick={handlerBurgerButton}>
          <span></span>
        </div>
        <nav className={toggleBurgerMenu}>
          <ul className={s.burgerMenuNavigation}>{linksArray}</ul>
        </nav>
        <nav className={s.menuNavigation}>
          <ul className={s.navigation}>{linksArray}</ul>
        </nav>
        <div className={s.logo}>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className={s.headerRight}>
          <div className={s.headerLogin}>
            <a href="#">Veterinarian login</a>
          </div>
          <div className={s.buttonHeader}>
            <Button text="Try Mixlab" />
          </div>
        </div>
      </div>
    </header>
  );
}

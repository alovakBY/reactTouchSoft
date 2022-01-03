import { Header } from "../components/Header";
import { Main } from "../components/Main";

import { LINKS } from "../../../store/Header";

import s from "../../../styles/Style0.module.css";

export function SiteContainer() {
    return (
        <div className={s.container}>
            <Header LINKS={LINKS} />
            <Main />
        </div>
    );
}

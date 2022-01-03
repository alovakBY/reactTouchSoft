import s from "../../styles/ButtonSite.module.css";

export function Button({ text }) {
    return <button className={s.button}>{text}</button>;
}

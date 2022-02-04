import s from "../../../../styles/Veterinarians.module.css";

export function VeterinarianPrinciplesComponent({ title, text, PS }) {
    return (
        <div className={s.infoItem}>
            <h4 className={s.infoItemTitle}>{title}</h4>
            <div className={s.infoItemText}>{text}</div>
            {{ PS } && <div className={s.infoItemPS}>{PS}</div>}
        </div>
    );
}

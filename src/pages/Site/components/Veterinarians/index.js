import { VeterinarianPrinciplesComponent } from "./veterinarianPrinciplesComponent";

import { veterinarianPrinciples } from "../../../../store/Veterinarians";

import VeterinariansImg from "../../../../static/images/veterinarians.png";

import s from "../../../../styles/Veterinarians.module.css";

export function Veterinarians() {
    return (
        <div className={s.veterinarians}>
            <div className={s.veterinariansItem}>
                <h3 className={s.title}>
                    We couldn’t find a pharmacy experience worthy of our best
                    buds— so we created one.
                </h3>
                <div className={s.img}>
                    <img src={VeterinariansImg} alt="dog" />
                </div>
            </div>
            <div className={s.veterinariansItem}>
                {veterinarianPrinciples.map(({ title, text, PS }, index) => {
                    return (
                        <VeterinarianPrinciplesComponent
                            key={index}
                            title={title}
                            text={text}
                            PS={PS}
                        />
                    );
                })}
            </div>
        </div>
    );
}

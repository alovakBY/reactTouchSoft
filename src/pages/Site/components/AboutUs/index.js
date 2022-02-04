import { Button } from "../../../../commonComponents/ButtonSite";

import AboutUsImage from "../../../../static/images/AboutUs.png";

import s from "../../../../styles/AboutUs.module.css";

export function AboutUs() {
  return (
    <div className={s.aboutUs}>
      <div className={s.image}>
        <img src={AboutUsImage} />
      </div>
      <div className={s.info}>
        <div className={s.infoHeader}>For Veterinarians</div>
        <h3 className={s.infoTitle}>
          We're here to support you and your practice
        </h3>
        <div className={s.infoText}>
          Mixlab offers a simple, fast, reliable (and fun) home delivery
          pharmacy service for your clients. No more delays, no more
          miscommunications, no more grumpy pets. It’s time to partner with a
          pharmacy that cares about customer experience as much as you do.
        </div>
        <div className={s.button}>
          <Button text="Learn More" />
        </div>
      </div>
    </div>
  );
}

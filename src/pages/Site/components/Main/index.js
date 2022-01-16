import { Button } from "../../../../commonComponents/ButtonSite";

import s from "../../../../styles/Main.module.css";

export function Main() {
  return (
    <section className={s.main}>
      <h3 className={s.title}>The pet pharmacy humans are jealous of.</h3>
      <div className={s.text}>
        5 stars on{" "}
        <a href="https://www.yelp.com/" target="_blank">
          Yelp
        </a>
        ,{" "}
        <a href="https://www.google.com/" target="_blank">
          Google
        </a>{" "}
        and{" "}
        <a href="https://www.facebook.com/" target="_blank">
          Facebook
        </a>{" "}
        because your best friend deserves only the best in pet care.
      </div>
      <Button text="Try Mixlab" />
    </section>
  );
}

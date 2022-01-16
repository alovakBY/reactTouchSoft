import s from "../../../../styles/Footer.module.css";

export function QuickLinks({ name }) {
  return (
    <div className={s.quickLinksItem}>
      <a href="#">{name}</a>
    </div>
  );
}

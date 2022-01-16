import s from "../../../../styles/InTheWild.module.css";

export function InTheWildCard({ imgSrc, date, title, text, more }) {
  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <div className={s.cardImg}>
          <img src={imgSrc} />
        </div>
      </div>
      <div className={s.cardFooter}>
        <div className={s.cardDate}>{date}</div>
        <div className={s.cardTitle}>{title}</div>
        <div className={s.cardText}>{text}</div>
        <div className={s.cardMore}>
          <a href={more}>Read the article</a>
        </div>
      </div>
    </div>
  );
}

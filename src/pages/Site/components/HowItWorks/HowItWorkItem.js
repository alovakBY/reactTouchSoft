import s from "../../../../styles/HowItWork.module.css";

export function HowItWorkItem({ imgSrc, title, text }) {
  return (
    <div className={s.howItWorksItem}>
      <div className={s.itemImage}>
        <img src={window.location.origin + imgSrc} />
      </div>
      <div className={s.itemTitle}>{title}</div>
      <div className={s.itemText}>{text}</div>
    </div>
  );
}

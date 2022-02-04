import s from "../../../../styles/Footer.module.css";

export function City({ name, adress, room, city, weekday, weekend }) {
  return (
    <div className={(s.footerItem, s.cityContainer)}>
      <h2 className={s.footerItemTitle}>{name}</h2>
      <div>{adress}</div>
      {room && <div>{room}</div>}
      <div className={s.cityDiv}>{city}</div>
      <div>{weekday}</div>
      <div>{weekend}</div>
    </div>
  );
}

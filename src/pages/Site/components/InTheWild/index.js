import { Button } from "../../../../commonComponents/ButtonSite";
import { InTheWildCard } from "./InTheWildCard";

import { cards } from "../../../../static/data/InTheWild";

import s from "../../../../styles/InTheWild.module.css";

export function InTheWild() {
  const cardItems = cards.map(({ imgSrc, date, title, text, more }, index) => {
    return (
      <InTheWildCard
        key={index}
        imgSrc={imgSrc}
        date={date}
        title={title}
        text={text}
        more={more}
      />
    );
  });
  return (
    <div className={s.inTheWild}>
      <h3 className={s.title}>In the Wild</h3>
      <div className={s.text}>
        In The Wild is a collection of pieces to help close the communication
        gap, while growing the love (and understanding) between you and your
        best pal.
      </div>
      <div className={s.cardsWrapper}>{cardItems}</div>
      <Button text="ViewMore" />
    </div>
  );
}

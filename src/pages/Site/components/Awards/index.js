import { awardsSrcItems } from "../../../../static/data/Awards";

import s from "../../../../styles/Awards.module.css";

export function Awards() {
  const awards = awardsSrcItems.map((awardSrc, index) => {
    return (
      <div key={index} className={s.award}>
        <img src={awardSrc} />
      </div>
    );
  });
  return (
    <div className={s.awards}>
      <div>{awards}</div>
    </div>
  );
}

import React from "react";

import { Button } from "../../../../commonComponents/ButtonSite";
import { HowItWorkItem } from "./HowItWorkItem";

import { howItWorksItems } from "../../../../static/data/HowItWork";

import s from "../../../../styles/HowItWork.module.css";

export function HowItWorks() {
  const HowItWorkBlock = howItWorksItems.map(
    ({ imgSrc, title, text }, index) => {
      return (
        <HowItWorkItem
          className={s.howItWorkItem}
          key={index}
          imgSrc={imgSrc}
          title={title}
          text={text}
        />
      );
    }
  );
  return (
    <div className={s.howItWork} id="How it works">
      <h3 className={s.title}>How it works</h3>
      <div className={s.howItWorksItems}>{HowItWorkBlock}</div>
      <Button text="Learn More" />
    </div>
  );
}

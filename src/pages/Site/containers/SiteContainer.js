import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Veterinarians } from "../components/Veterinarians";
import { HowItWorks } from "../components/HowItWorks";
import { AboutUs } from "../components/AboutUs";
import { Blog } from "../components/Blog";
import { InTheWild } from "../components/InTheWild";
import { Awards } from "../components/Awards";
import { Footer } from "../components/Footer";

import { LINKS } from "../../../static/data/Header";

import s from "../../../styles/Style0.module.css";

export function SiteContainer() {
  return (
    <div className={s.container}>
      <Header LINKS={LINKS} />
      <Main />
      <Veterinarians />
      <HowItWorks />
      <AboutUs />
      <Blog />
      <InTheWild />
      <Awards />
      <Footer />
    </div>
  );
}

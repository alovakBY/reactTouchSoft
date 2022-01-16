import { QuickLinks } from "./QuickLinks";
import { City } from "./City";

import { QUICK_LINKS, NYC, LA, SOCIAL } from "../../../../static/data/Footer";

import s from "../../../../styles/Footer.module.css";

export function Footer() {
  const quickLinksItems = QUICK_LINKS.map((item, index) => {
    return <QuickLinks key={index} name={item} />;
  });
  const socialItems = SOCIAL.map((socialItem, index) => {
    return (
      <div key={index} className={s.socialItem}>
        <a href="#">
          <img src={socialItem} />
        </a>
      </div>
    );
  });
  return (
    <div className={s.footer}>
      <div className={s.footerTop}>
        <div className={s.footerItem}>
          <h2 className={s.footerItemTitle}>quick links</h2>
          <div className={s.footerItemInfo}>{quickLinksItems}</div>
        </div>
        <div>
          <div className={s.footerItem}>
            <h2 className={s.footerItemTitle}>Call or Text</h2>
            <a href="tel: (888) 901-4480">(888) 901-4480</a>
          </div>
          <div className={s.footerItem}>
            <h2 className={s.footerItemTitle}>email</h2>
            <a href="mailto: hello@mixlabrx.com">hello@mixlabrx.com</a>
          </div>
          <div className={s.footerItem}>
            <h2 className={s.footerItemTitle}>fax</h2>
            <a href="tel: (212) 967-0892">(212) 967-0892</a>
          </div>
        </div>
        <City
          name={NYC.name}
          adress={NYC.adress}
          room={NYC.room}
          city={NYC.city}
          weekday={NYC.weekday}
          weekend={NYC.weekend}
        />
        <City
          name={LA.name}
          adress={LA.adress}
          room={LA.room}
          city={LA.city}
          weekday={LA.weekday}
          weekend={LA.weekend}
        />
        <div>
          <h2 className={s.footerItemTitle}>social</h2>
          <div className={s.social}>{socialItems}</div>
        </div>
      </div>
      <div className={s.footerBottom}>
        ©2021 Mixlab, Inc. <a href="#">Privacy Policy</a>{" "}
        <a href="#">Terms of Service</a>
      </div>
    </div>
  );
}

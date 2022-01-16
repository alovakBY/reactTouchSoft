import { Header } from "../Header";

import s from "../../styles/Header.module.css";

export function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={s.children}>{children}</div>
    </div>
  );
}

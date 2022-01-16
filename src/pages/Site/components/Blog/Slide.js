import s from "../../../../styles/Blog.module.css";

export function Slide({ imgSrc, text, source, author }) {
  return (
    <div className={s.slide}>
      <div className={s.slideImage}>
        <img src={imgSrc} alt="image slide" />
      </div>
      <div className={s.slideInfo}>
        <div className={s.slideText}>{text}</div>
        <div className={s.slideFooter}>
          <img src={source} alt="source" />
          {author}
        </div>
      </div>
    </div>
  );
}

import { Slider } from "./Slider";

import blog from "../../../../static/images/blog.png";

import s from "../../../../styles/Blog.module.css";

export function Blog() {
  return (
    <div className={s.blog}>
      <img src={blog} className={s.image} />
      <h3 className={s.title}>Pets love Mixlab!</h3>
      <div className={s.text}>
        See why we're 5 stars on <a href="https://www.yelp.com">Yelp</a>,{" "}
        <a href="https://www.google.com">Google</a> and
        <a href="https://www.facebook.com"> Facebook</a>:)
      </div>
      <div className={s.sliderContainer}>
        <Slider />
      </div>
    </div>
  );
}

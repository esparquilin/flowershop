import classes from "./Hero.module.css";

import image1 from "../../../assets/Images/Hero/hero3.jpg";

function Hero() {
  return (
    <section
      className={classes.hero}
      style={{ backgroundImage: `url(${image1})` }}
    ></section>
  );
}

export default Hero;

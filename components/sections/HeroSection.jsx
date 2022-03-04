import * as React from "react";
import { toFieldPath, pickDataAttrs } from "@stackbit/annotations";

import styles from "../../styles/components/HeroSection.module.css";

export const HeroSection = (props) => {
  return (
    <div {...pickDataAttrs(props)} className={styles.hero}>
      <h1 {...toFieldPath(".title")} className={styles.heroHeading}>
        {props.title}
      </h1>
    </div>
  );
};

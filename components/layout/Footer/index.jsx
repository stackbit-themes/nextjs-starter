import * as React from "react";

import styles from "../../../styles/layout/Footer.module.css";

export const Footer = ({ body }) => {
  return (
    <div
      data-sb-field-path="content/data/config.json:footer.body"
      className={styles.footer}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
};

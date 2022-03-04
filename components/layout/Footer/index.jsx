import * as React from "react";

import styles from "../../../styles/layout/Footer.module.css";

export const Footer = ({ body }) => {
  return (
    <div
      className={styles.footer}
      data-sb-field-path="content/data/config.json:footer">
      <div
        data-sb-field-path=".body"
        className={styles.footerContent}
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
};

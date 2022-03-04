import * as React from "react";
import Markdown from "markdown-to-jsx";

import styles from "../../styles/layout/Footer.module.css";

export const Footer = ({ body }) => {
  return (
    <div
      className={styles.footer}
      data-sb-field-path="content/data/config.json:footer">
      <div data-sb-field-path=".body" className={styles.footerContent}>
        <Markdown>{body}</Markdown>
      </div>
    </div>
  );
};

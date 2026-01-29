"use client";

import { useState } from "react";
import styles from "./index.module.css";

interface NewsletterCTAProps {
  userHasAccess: boolean;
}

export const NewsletterCTA = ({ userHasAccess }: NewsletterCTAProps) => {
  const [isBusy, setIsBusy] = useState(false);

  const handleClick = () => {
    // prevent multiple clicks while busy (debounce)
    if (isBusy) return;

    setIsBusy(true);
    // TODO: call subscribe/login action here
    setTimeout(() => setIsBusy(false), 300);
  };

  return (
    <button
      className={[
        styles.cta,
        styles[userHasAccess ? "cta--subscribe" : "cta--login"],
        isBusy ? styles["cta--busy"] : "",
      ].join(" ")}
      onClick={handleClick}
    >
      {userHasAccess ? "S'inscrire" : "S'abonner"}
    </button>
  );
};

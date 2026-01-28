import { Newsletter, SubscriptionRight } from "@/types";

import styles from "./index.module.css"

interface NewsletterCardProps {
  newsletter: Newsletter;
  userSubscriptions: SubscriptionRight[];
}

export const NewsletterCard = ({ newsletter, userSubscriptions }: NewsletterCardProps) => {
  const userHasAccess =
    newsletter.subscriptions.length === 0 ||
    newsletter.subscriptions.some((sub) => userSubscriptions.includes(sub));

  return (
    <li className={styles.box}>
      <h4 className={styles.title}>{newsletter.title}</h4>
      <p>{newsletter.description}</p>
      <button>{userHasAccess ? "S'inscrire" : "S'abonner"}</button>
    </li>
  );
};

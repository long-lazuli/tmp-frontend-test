import { Newsletter, SubscriptionRight } from "@/types";
import { NewsletterCTA } from "@/components/NewsletterCTA";

import styles from "./index.module.css"
import { Merriweather } from "next/font/google";

const merry = Merriweather({ weight: '700', subsets: ['latin']});

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
      <h4 className={[styles.title, merry.className].join(' ')}>{newsletter.title}</h4>
      <p>{newsletter.description}</p>
      <NewsletterCTA userHasAccess={userHasAccess} />
    </li>
  );
};

import { Newsletter, SubscriptionRight } from "@/types";
import { NewsletterCard } from "./NewsletterCard";

interface NewsletterListProps {
  newsletters: Newsletter[];
  userSubscriptions: SubscriptionRight[];
}

export const NewsletterList = ({ newsletters, userSubscriptions }: NewsletterListProps) => {
  const newslettersByGroup = newsletters.reduce<Record<string, Newsletter[]>>(
    (acc, nl) => {
      if (!(nl.site in acc)) acc[nl.site] = [];
      acc[nl.site].push(nl);
      return acc;
    },
    {}
  );

  const groups = Object.entries(newslettersByGroup);

  // here would be a good place, if we want to sort the sites.

  return (
    <>
      {groups.map(([site, siteNewsletters]) => (
        <section key={site}>
          <h3>{site}</h3>
          <ul>
            {siteNewsletters.map((newsletter) => (
              <NewsletterCard
                key={newsletter.id}
                newsletter={newsletter}
                userSubscriptions={userSubscriptions}
              />
            ))}
          </ul>
        </section>
      ))}
    </>
  );
};

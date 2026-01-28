import { Newsletter, SubscriptionRight } from "@/types";

interface NewsletterCardProps {
  newsletter: Newsletter;
  userSubscriptions: SubscriptionRight[];
}

export const NewsletterCard = ({ newsletter, userSubscriptions }: NewsletterCardProps) => {
  const userHasAccess =
    newsletter.subscriptions.length === 0 ||
    newsletter.subscriptions.some((sub) => userSubscriptions.includes(sub));

  return (
    <li>
      <strong>{newsletter.title}</strong> - {newsletter.description}
      <button>{userHasAccess ? "S'inscrire" : "S'abonner"}</button>
    </li>
  );
};

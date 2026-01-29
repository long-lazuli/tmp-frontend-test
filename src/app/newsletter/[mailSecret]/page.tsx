import { NewsletterList } from "@/components/NewsletterList";
import { getUserFromMailSecret } from "@/services/mail";
import { getNewsletters } from "@/services/newsletter";

import styles from './page.module.css'

interface NewsletterPageProps {
  params: Promise<{ mailSecret: string }>;
}

const NewsletterPage = async ({ params }: NewsletterPageProps) => {
  const { mailSecret } = await params;

  const user = await getUserFromMailSecret(mailSecret);
  if (!user) return <div>Invalid or expired link</div>;

  const newsletters = await getNewsletters();

  // normally we would check if there is newsletters, or else return an empty state.

  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.title}>Newsletters</h2>
        <p className={styles.description}>
          Dans cette page, vous trouverez l'ensemble des newsletters des Echos
          et des marques satellites. Ainsi, vous pouvez découvrir toutes nos
          newsletters selon vos centres d'intérêt et gérer plus facilement
          l'inscription à vos newsletters.
        </p>
      </header>

      <NewsletterList
        newsletters={newsletters}
        userSubscriptions={user.subscriptions}
      />
    </div>
  );
};

export default NewsletterPage;

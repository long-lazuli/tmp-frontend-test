import { getUserFromMailSecret } from "@/services/mail";
import { getNewsletters } from "@/services/newsletter";
import { Newsletter } from "@/types";
import { useMemo } from "react";

interface NewsletterPageProps {
  params: Promise<{ mailSecret: string }>;
}

const NewsletterPage = async ({ params }: NewsletterPageProps) => {
  const { mailSecret } = await params;
  const user = await getUserFromMailSecret(mailSecret)

  if (!user) return <div>Invalid or expired link</div>

  const allNewsletters = await getNewsletters();
  const newslettersGroupedByBrand = allNewsletters
    .reduce<Record<string, Newsletter[]>>((acc, nl) => {
      if(!(nl.site in acc)) acc[nl.site] = []
      acc[nl.site].push(nl)

      return acc
    }, {})

  return (
    <div>
      <header>
      <h2>Newsletters</h2>
      <p>Dans cette page, vous trouverez l'ensemble des newsletters des Echos et des marques satellites. Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres d'intérêt et gérer plus facilement l'inscription à vos newsletters.</p>
      </header>

      {Object.entries(newslettersGroupedByBrand).map(([site, newsletters]) => {
        return <section>
          <h3>{site}</h3>
          <ul>
            {newsletters.map((newsletter) => {
              const userHasAccess = newsletter.subscriptions.length === 0 ||
                newsletter.subscriptions.some((sub) => user.subscriptions.includes(sub));

              return (
                <li key={newsletter.id}>
                  <strong>{newsletter.title}</strong> - {newsletter.description}
                  <button>{userHasAccess ? "S'inscrire" : "S'abonner"}</button>
                </li>
              );
            })}
          </ul>
        </section>
      })}
    </div>
  );
};

export default NewsletterPage;

import { getUserFromMailSecret } from "@/services/mail";

interface NewsletterPageProps {
  params: Promise<{ mailSecret: string }>;
}

const NewsletterPage = async ({ params }: NewsletterPageProps) => {
  const { mailSecret } = await params;
  const user = await getUserFromMailSecret(mailSecret);

  if (!user) {
    return <div>Invalid or expired link</div>;
  }

  return (
    <div>
      <h1>Newsletters</h1>
      <p>User subscriptions: {user.subscriptions.join(', ') || 'none'}</p>
    </div>
  );
};

export default NewsletterPage;

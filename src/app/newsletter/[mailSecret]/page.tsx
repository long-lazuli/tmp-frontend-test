import { MAIL_SECRETS } from "@/mocks/mail";

interface NewsletterPageProps {
  params: Promise<{ mailSecret: string }>;
}

const NewsletterPage = async ({ params }: NewsletterPageProps) => {
  const { mailSecret } = await params;
  const profileType = MAIL_SECRETS[mailSecret];

  if (!profileType) {
    return <div>Invalid or expired link</div>;
  }

  return (
    <div>
      <h1>Newsletters</h1>
      <p>Profile type: {profileType}</p>
    </div>
  );
};

export default NewsletterPage;

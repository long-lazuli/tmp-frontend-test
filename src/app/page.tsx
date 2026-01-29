import Link from "next/link";

// dummy page, just to access the newsletters page, like we would, from a link in an email, for exemple.
const HomePage = () => {
  return (
    <div>
      <h1>Les Echos - Newsletters demo</h1>
      <p>See newsletter page as:</p>
      <ul>
        <li><Link href="/newsletter/abc123">User without subscription</Link></li>
        <li><Link href="/newsletter/def456">User with one subscription</Link></li>
        <li><Link href="/newsletter/ghi789">User with multiple subscriptions</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;

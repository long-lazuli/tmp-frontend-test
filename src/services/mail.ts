import { USER_WITH_MULTIPLE_SUBSCRIPTION, USER_WITH_ONE_SUBSCRIPTION, USER_WITHOUT_SUBSCRIPTION } from "@/mocks/user";
import { User } from "@/types";

/**
 * Retrieves the user from a mail secret.
 *
 * In a real-life scenario, this would decode the mail secret
 * to retrieve the actual user ID from a database or JWT token.
 */
export async function getUserFromMailSecret(
  mailSecret: string
): Promise<User | null> {
  const user = MAIL_SECRETS[mailSecret];
  return user ?? null;
}

const MAIL_SECRETS: Record<string, User> = {
  "abc123": USER_WITHOUT_SUBSCRIPTION,
  "def456": USER_WITH_ONE_SUBSCRIPTION,
  "ghi789": USER_WITH_MULTIPLE_SUBSCRIPTION,
};
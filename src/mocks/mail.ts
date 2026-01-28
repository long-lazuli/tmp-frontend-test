/**
 * Mail secret to profile type mapping.
 *
 * In a real-life scenario, we would decode the mail secret
 * to retrieve the actual user ID from a database or JWT token.
 */

export type ProfileType = "none" | "one" | "multiple";

export const MAIL_SECRETS: Record<string, ProfileType> = {
  "abc123": "none",
  "def456": "one",
  "ghi789": "multiple",
};

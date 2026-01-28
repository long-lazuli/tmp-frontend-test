import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import { Newsletter } from "@/types";

/**
 * Retrieves all newsletters.
 *
 * In a real-life scenario, this would fetch newsletters from an API or database.
 */
export async function getNewsletters(): Promise<Newsletter[]> {
  return NEWSLETTER_ITEMS;
}

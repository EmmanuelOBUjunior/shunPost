import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { SubredditSubscriptionValidator } from "@/lib/validator/subreddit";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    if (!session?.user) return new Response("Unauthorized", {status: 401});

    const body = await req.json()
    const {subredditId} = SubredditSubscriptionValidator.parse(body)
    
    const subscriptionExists = await db.subscription.findFirst({
        
    })
    
  } catch (error) {}
}

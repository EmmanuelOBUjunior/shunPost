import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { SubredditSubscriptionValidator } from "@/lib/validator/subreddit";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    if (!session?.user) return new Response("Unauthorized", {status: 401});

    const body = await req.json()
    const {subredditId} = SubredditSubscriptionValidator.parse(body)
    
    const subscriptionExists = await db.subscription.findFirst({
        where:{
            subredditId,
            userId: session.id
        }
    })

    if(subscriptionExists) return new Response('You are already subscribed to this subreddit', {status: 400})

    await db.subscription.create({
        data:{
            subredditId,
            userId: session.id
        }
    })
    return new Response(subredditId)
  } catch (error) {
    if(error instanceof z.ZodError) {
        return new Response("Invalid request data passed", {status:422})
    }

    return new Response('Could not subscribe to', {status:500})
}
}

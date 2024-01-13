import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { SubredditValidator } from "@/lib/validator/subreddit";

export async function POST(req:Request){
    try {
        const session = await getAuthSession()

        if(!session?.user){
            return new Response('Unauthorized', {status:401})
        }
        const body = await req.json()
        const {name} = SubredditValidator.parse(body)
        const subredditExists = await db.subreddit.findFirst({
            where:{
                name,
            },
        })

        if(subredditExists){
            return new Response('Subreddit already exists', {status:409})
        }

        const subreddit = await db.subreddit.create({
            data:{
                name,
                creatorId: session.id,
            }
        })

        await db.subscription.create({
            data:{
                userId: session.id,
                subredditId: subreddit.id
            }
        })
    } catch (error) {
        
    }
}
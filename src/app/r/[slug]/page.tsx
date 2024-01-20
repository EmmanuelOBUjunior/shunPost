import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";

interface PageProps{
  params:{
  slug: string
}
}

const page = async({params}:PageProps) => {
  const {slug} = params;
  const session = await getAuthSession()

  const subreddit  = await db.subreddit.findFirst({
    where:{name:slug},
    include:{
      post:{
        include:{
          author: true,
          vote: true,
          comment: true,
          subreddit: true,
        }
      }
    }
  })

  return (
    <div>page</div>
  )
}

export default page
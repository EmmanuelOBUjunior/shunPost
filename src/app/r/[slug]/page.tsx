import { INFINTE_SCROLLING_PAGINATION_RESULTS } from "@/config";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";

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
        },

        take: INFINTE_SCROLLING_PAGINATION_RESULTS
      }
    }
  })
  if(!subreddit) return notFound()

  return (
    <div>page</div>
  )
}

export default page
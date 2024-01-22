import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";

const Layout = async({
  children,
  params: { slug },
}: {
  children: React.ReactNode
  params: { slug:string}
}) => {

    const session = await getAuthSession()
    const subreddit = await db.subreddit.findFirst({
        where:{name:slug},
        include:{
            post:{
                include:{
                    author:true,
                    vote:true
                }
            }
        }
    })

    const subscription = !session?.id ? undefined : await db.subscription.findFirst({
        where:{
            subreddit:{
                name: slug,
            },
            user:{
                id: session.id
            }
        }
    })

    const isSubscribed = !!subscription

    if(!subreddit) return notFound()

    const memberCount = await db.subscription.count({
        where:{
            subreddit:{
                name:slug
            }
        }
    })

  return (
    <div className="sm:container max-w-7xl mx-auto h-full pt-12">
      <div>
        {/* TODO: Button to take us back */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-yy-4 md:gap-x-4 py-6">
          <div className="flex flex-col col-span-2 space-y-6">{children}</div>
          {/* Info Sidebar */}
          <div className="hidden md:block overflow-hidden h-fit rounded-lg border border-gray-200 order-first md:order-last">
            <div className="px-6 py-4">
              <p className="font-semibold py-3">About r/</p>
            </div>


            <dl className="divide-y divide-gray-200 text-sm px-6 py-4 leading-6 bg-white">
                
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;

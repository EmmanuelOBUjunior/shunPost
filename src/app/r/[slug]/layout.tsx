import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import SubscribeLeaveToggle from "@/components/SubscribeLeaveToggle";

const Layout = async ({
  children,
  params: { slug },
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  const session = await getAuthSession();
  const subreddit = await db.subreddit.findFirst({
    where: { name: slug },
    include: {
      post: {
        include: {
          author: true,
          vote: true,
        },
      },
    },
  });

  const subscription = !session?.id
    ? undefined
    : await db.subscription.findFirst({
        where: {
          subreddit: {
            name: slug,
          },
          user: {
            id: session.id,
          },
        },
      });

  const isSubscribed = !!subscription;

  if (!subreddit) return notFound();

  const memberCount = await db.subscription.count({
    where: {
      subreddit: {
        name: slug,
      },
    },
  });

  return (
    <div className="sm:container max-w-7xl mx-auto h-full pt-12">
      <div>
        {/* TODO: Button to take us back */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-yy-4 md:gap-x-4 py-6">
          <div className="flex flex-col col-span-2 space-y-6">{children}</div>
          {/* Info Sidebar */}
          <div className="hidden md:block overflow-hidden h-fit rounded-lg border border-gray-200 order-first md:order-last">
            <div className="px-6 py-4">
              <p className="font-semibold py-3">About r/{subreddit.name}</p>
            </div>

            <dl className="divide-y divide-gray-200 text-sm px-6 py-4 leading-6 bg-white">
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Created</dt>
                <dd className="text-gray-700">
                  <time dateTime={subreddit.createdAt.toDateString()}>
                    {format(subreddit.createdAt, "MMMM d, yyyy")}
                  </time>
                </dd>
              </div>

              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Members</dt>
                <dd className="text-gray-700">
                  <div className="text-gray-900">{memberCount}</div>
                </dd>
              </div>

              {subreddit.creatorId === session?.id ? (
                <div className="flex justify-between gap-x-4 py-3">
                  <p>You created this community</p>
                </div>
              ) : null}

              {subreddit.creatorId !== session?.id ? (
                <SubscribeLeaveToggle
                isSubscribed = {isSubscribed}
                  subredditId={subreddit.id}
                  subredditName={subreddit.name}
                />
              ) : null}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;

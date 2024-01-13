

export default function Home() {
  return (
    <>
    <h1 className="font-bold text-3xl md:text-4xl">Your Feed</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6">
      {/* Feed */}

      {/* Subreddit Info */}
      <div className="overflow-hidden h-fit rounded-lg border border-gray-200 order-first md:order-last"></div>
    </div>
    </>
  )
}

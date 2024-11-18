import { BLOG_INDEX_QUERYResult } from "@/types/sanity.types";

export function Posts({ data }: { data: BLOG_INDEX_QUERYResult }) {
  return (
    <div className="grid w-full gap-4 py-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-9 place-items-stretch">
      {data?.entries?.map((post) => (
        <div className="group/card rounded-card" key={post._id}>
          <div className="flex w-full flex-col gap-[10px] rounded-card bg-gray-200 p-6 h-full">
            <time className="text-s text-gray-700" dateTime={post.publishedAt}>
              {post.publishedAt || ""}
            </time>
            <div className="flex min-h-[82px] flex-col items-start gap-1">
              <h3 className="text-2xl">{post.title}</h3>
              <p className="line-clamp-2">{post.excerpt}</p>
            </div>
            <div className="flex w-full items-center gap-3 mt-auto">
              <h4 className="text-m-medium">{post.author?.name}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import { Author } from "@/app/blog/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import { teko } from "@/app/ui/fonts";
import {getPostBySlug, getAllPosts} from '@/app/blog/lib/actions'

type Props = {
  title: string;
  coverImage: string;
  date: Date;
  excerpt: string;
  author: Author;
  slug: string;
};

export async function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {

  const dateFmt = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div key={slug} className="relative text-center bg-gray-100 rounded-lg hover:shadow-lg overflow-hidden">
      <div className="relative object-contain h-96">
      <Link href={"/blog/posts/" + slug} key={slug}>
          <Image
            className="hover:scale-110 ease-in duration-300"
            src={coverImage}
            alt={title}
            fill
          />
      </Link>
      </div>
      <div className="w-full absolute bottom-0 left-0 text-center
        bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-600 dark:to-gray-900 opacity-70
        hover:from-gray-200 hover:to-gray-400
        dark:hover:from-gray-400 dark:hover:to-gray-600
        ">
        <h3 className={`${teko.className} text-gray-700 dark:text-gray-100 text-lg uppercase`}>{author.name}</h3>
        <Link href={"/blog/posts/" + slug} key={slug}>
        <h1 className={`${teko.className} text-gray-900 dark:text-gray-100 text-xl md:text-2xl font-semibold uppercase hover:underline`}>{title}</h1>
        </Link>
        <p className={`${teko.className} text-gray-700 dark:text-gray-100`} >{dateFmt}</p>
        { /* <p><MarkdownToReact markdown={excerpt} /></p> */ }
      </div>
    </div>
  );
}

export async function PostsGrid()
{
  const allPosts = await getAllPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4 items-center m-2 md:m-8">
      {
        allPosts.map((post) => 
          <PostPreview 
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={new Date(post.date)}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt} />
        )
      }
    </div>
  )
}


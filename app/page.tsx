import Image from "next/image";
import { getAllPosts } from "@/app/lib/actions";
import Link from "next/link";
import { Author } from "@/app/lib/definitions";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {

return (
    <main>
    <div className="grid grid-cols-4 gap-4">
    {
        <div key={slug}>
          <h1 className="font-bold">{title}</h1>
          <p>{date} by {author.name}</p>
          <Link href={"/posts/" + slug} key={slug}>
          <Image
            src={coverImage}
            alt={title}
            width={720}
            height={410}
          />
          </Link>
          <p>{excerpt}</p>
        </div>
    }
    </div>
    </main>
    );
}

export async function PostsGrid()
{
  const allPosts = await getAllPosts();

  return allPosts.map((post) => 
    <PostPreview 
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt} />
  );
}

export default async function Home() {
  return (<PostsGrid />);
}

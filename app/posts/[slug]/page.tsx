import { getPostBySlug } from "@/app/lib/actions";
import Image from "next/image";

export default async function Post( { params } : { params: { slug: string } } )
{
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  return (
    <main>
      <h1>{post.title}</h1>
      { post.coverImage && <Image src={post.coverImage} alt={post.title} width={720} height={410} /> }
      {post.content}
    </main>
  );
}

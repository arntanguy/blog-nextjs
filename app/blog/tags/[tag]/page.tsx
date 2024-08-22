import { PostsGrid } from "@/app/blog/posts/post-components";
import { getPostsByTag } from '@/app/blog/lib/actions';
import TagHero from "@/app/components/TagHero";
import Footer from "@/app/components/Footer";

export async function generateMetadata( { params } : { params: { tag: string } } ) {
  const tag = decodeURI(params.tag).toUpperCase();
  return {
    title: `Posts tagged ${tag} | Arnaud TANGUY`,
  }
}

export default async function PostsByTag( { params } : { params: { tag: string } } )
{
  const tag = decodeURI(params.tag);
  const posts = await getPostsByTag(tag);
  return (
    <main>
      <TagHero tag={tag} posts={posts} />
      <PostsGrid posts={posts} />
      <Footer />
    </main>);
}

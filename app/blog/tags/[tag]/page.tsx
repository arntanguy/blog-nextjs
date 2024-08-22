import { PostsGrid } from "@/app/blog/posts/post-components";
import { Metadata } from 'next';
import { getPostsByTag } from '@/app/blog/lib/actions';
import TagHero from "@/app/components/TagHero";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: 'Blog - Mountaineering, Climbing, Photography | Arnaud TANGUY',
};

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

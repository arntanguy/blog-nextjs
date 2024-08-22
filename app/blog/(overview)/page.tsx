import { PostsGrid } from "@/app/blog/posts/post-components";
import { Metadata } from 'next';
import { getAllPosts }  from '@/app/blog/lib/actions';

export const metadata: Metadata = {
  title: 'Blog - Mountaineering, Climbing, Photography | Arnaud TANGUY',
};


export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main>
      <PostsGrid posts={posts} />
    </main>);
}

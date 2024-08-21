import { PostsGrid } from "@/app/blog/posts/post-components";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Mountaineering, Climbing, Photography | Arnaud TANGUY',
};


export default async function Home() {
  return (
    <main>
      <PostsGrid />
    </main>);
}

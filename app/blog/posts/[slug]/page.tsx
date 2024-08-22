import { getPostBySlug } from "@/app/blog/lib/actions";
import { MarkdownToReact } from "@/app/blog/lib/markdownToReact";
// import Breadcrumbs from '@/app/components/breadcrumbs';
import Footer from "@/app/components/Footer";
import PostHero from "@/app/components/PostHero";

// dynamic metadata
// XXX: Duplicates reading the post data with the page
// How to avoid this duplication?
export async function generateMetadata( { params } : { params: { slug: string } } ) {
  const post = await getPostBySlug(params.slug);

  return {
    title: post.title
  }
}

export default async function PostPage( { params } : { params: { slug: string } } )
{
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  return (
    <>
      <PostHero post={post} />
        <div className="w-full px-2 md:px-8 xl:px-12 py-4 my-4 mx-auto shadow-md max-w-[900px] md:bg-gray-200 dark:md:bg-gray-800 rounded-lg">
          {/* By default tailwindcss removes all default html styles */}
          {/* We use prose to mimic the default html behaviour  */}
          {/* See https://github.com/tailwindlabs/tailwindcss-typography */}
          <article className={`prose dark:prose-invert md:prose-base lg:prose-lg xl:prose-xl text-justify max-w-none`}>
            <MarkdownToReact post={post} />
          </article>
        </div>
      <Footer />
      </>
  );
}

import { getPostBySlug } from "@/app/blog/lib/actions";
import { MarkdownToReact } from "@/app/blog/lib/markdownToReact";
import Image from "next/image";
import Link from 'next/link';
import { teko, prozaLibre } from '@/app/ui/fonts';
import { Post } from '@/app/blog/lib/definitions';
// import Breadcrumbs from '@/app/components/breadcrumbs';
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import Footer from "@/app/components/Footer";

// dynamic metadata
// XXX: Duplicates reading the post data with the page
// How to avoid this duplication?
export async function generateMetadata( { params } : { params: { slug: string } } ) {
  const post = await getPostBySlug(params.slug);

  return {
    title: post.title
  }
}

function Hero({post} : { post: Post })
{
  const dateFmt = new Date(post.date).toLocaleDateString(); 

  return (
    <>
      <div className="relative">
        <div className="w-full h-[50vh] lg:h-[60vh]">
          <Link href="/blog">
            <Image className="object-cover" src={post.coverImage} alt={post.title} fill />
          </Link>
        </div>
        <div className="w-full absolute bottom-0 left-0 text-center bg-gradient-to-b hover:from-gray-50/50 hover:to-gray-200/70 from-gray-50/30 to-gray-200/40 backdrop-blur-sm p-2 md:p-4 lg:p-8">
          <h1 className={`${teko.className} text-2xl md:text-4xl uppercase font-bold tracking-wide text-gray-900`}>{post.title}</h1>
          <div className="flex items-center justify-center mt-1 md:mt-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image className="absolute top-0 left-0 object-cover shadow-lg" src={post.author.picture} alt={post.author.name} fill />
            </div>
            <h2 className={`${prozaLibre.className} text-lg lg:text-xl uppercase font-semibold text-gray-800 ml-4`}>{post.author.name}</h2>
          </div>
          <h3 className={`${prozaLibre.className} text-base lg:text-lg uppercase text-gray-800 mt-1 md:mt-2`}>{dateFmt}</h3>
        </div>
      </div>
        <div>
          <Link href="/blog">
            <ArrowUturnLeftIcon className="hidden lg:block fixed w-6 h-6 my-8 mx-12 text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200" />
          </Link>
        </div>
      </>
  );
}

export default async function PostPage( { params } : { params: { slug: string } } )
{
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  return (
    <>
      <Hero post={post} />
        <div className="px-2 md:px-8 xl:px-12 py-4 my-4 mx-auto shadow-md max-w-[900px] md:bg-gray-200 dark:md:bg-gray-800 rounded-lg">
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

import { getPostBySlug } from "@/app/lib/actions";
import { MarkdownToReact } from "@/app/lib/markdownToReact";
import Image from "next/image";
import Link from 'next/link';
import { teko, prozaLibre } from '@/app/ui/fonts';
import { Post } from '@/app/lib/definitions';
import Breadcrumbs from '@/app/components/breadcrumbs';
import Navigation from '@/app/components/naviagation';

export function Hero({post} : { post: Post })
{
  const dateFmt = new Date(post.date).toLocaleDateString(); 

  return (
    <main>
      <div className="relative">
        <div className="w-full h-[500px]">
          <Link href="/">
            <Image className="object-cover" src={post.coverImage} alt={post.title} fill />
          </Link>
        </div>
        <div className="w-full absolute bottom-0 left-0 text-center bg-gradient-to-b hover:from-gray-50/50 hover:to-gray-200/70 from-gray-50/30 to-gray-200/40 backdrop-blur-sm p-8">
          <h1 className={`${teko.className} text-6xl font-bold tracking-wide text-gray-900`}>{post.title}</h1>
          <div className="flex items-center justify-center mt-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image className="absolute top-0 left-0 object-cover shadow-lg" src={post.author.picture} alt={post.author.name} fill />
            </div>
            <h2 className={`${prozaLibre.className} text-xl uppercase font-semibold text-gray-800 ml-4`}>{post.author.name}</h2>
          </div>
          <h3 className={`${prozaLibre.className} text-lg uppercase font-semibold text-gray-800 mt-2`}>{dateFmt}</h3>
        </div>
      </div>
        <Navigation />
        {/* <div className="flex px-4 sm:px-12 md:px-24 lg:px-36 mt-4 mb-4"> */}
        {/*   <Breadcrumbs */}
        {/*   breadcrumbs={[ */}
        {/*     { label: 'Home', href: '/' }, */}
        {/*     { */}
        {/*       label: 'Posts', */}
        {/*       href: '/', */}
        {/*       active: true, */}
        {/*     }, */}
        {/*     { */}
        {/*       label: post.title, */}
        {/*       href: '/posts/' + post.slug, */}
        {/*       active: true, */}
        {/*     } */}
        {/*   ]} */}
        {/* /> */}
        {/* </div> */}
      </main>
  );
}

export default async function PostPage( { params } : { params: { slug: string } } )
{
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  return (
    <>
      <Hero post={post} />
        <div className="grid place-items-center h-screen m-4 md:m-8"> 
          <div className="w-full lg:w-4/5 max-w-[1024px] bg-gray-200 dark:bg-gray-800 rounded-lg">
            {/* By default tailwindcss removes all default html styles */}
            {/* We use prose to mimic the default html behaviour  */}
            {/* See https://github.com/tailwindlabs/tailwindcss-typography */}
            <article className={`prose dark:prose-invert lg:prose-lg xl:prose-xl max-w-none mt-8 mb-8 px-8`}>
              <MarkdownToReact post={post} />
            </article>
          </div>
        </div>
      </>
  );
}

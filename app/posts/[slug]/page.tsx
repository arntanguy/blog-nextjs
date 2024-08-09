import { getPostBySlug } from "@/app/lib/actions";
import { MarkdownToReact } from "@/app/lib/markdownToReact";
import Image from "next/image";
import { teko } from "@/app/ui/fonts";

export default async function Post( { params } : { params: { slug: string } } )
{
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  return (
  <div className="grid place-items-center h-screen m-4 md:m-8"> 
   <div className="w-full lg:w-4/5 max-w-[1024px]">
      <h2 className={`${teko.className} text-lg font-semibold text-center uppercase`}>{post.author.name}</h2>
      <h1 className={`${teko.className} text-3xl font-bold text-center`}>{post.title}</h1>
      { post.coverImage && 
          <div className="relative w-full h-[500px]">
          <Image className="object-cover" src={post.coverImage} alt={post.title} fill/>
          </div>
      }
      {/* By default tailwindcss removes all default html styles
          We use prose to mimic the default html behaviour 
          See https://github.com/tailwindlabs/tailwindcss-typography
          */}
      <article className={`prose lg:prose-lg xl:prose-xl max-w-none mt-8 mb-8`}>
        <MarkdownToReact post={post} />
      </article>
    </div>
    </div>
  );
}

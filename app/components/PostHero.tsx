import { Post } from "@/app/blog/lib/definitions";
import Image from "next/image";
import Link from 'next/link';
import { teko, prozaLibre } from '@/app/ui/fonts';

export default function PostHero({post} : { post: Post })
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
      </>
  );
}


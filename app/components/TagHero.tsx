import { Post } from "@/app/blog/lib/definitions";
import Image from "next/image";
import Link from 'next/link';
import { teko, prozaLibre } from '@/app/ui/fonts';

export default function TagHero({tag, posts} : { tag: string, posts: Post[] })
{
  // select a random post to display its image as hero image
  const post = posts[Math.floor(Math.random() * posts.length)];

  return (
    <>
      <div className="relative">
        <div className="w-full h-[50vh] lg:h-[60vh]">
          <Link href="/blog">
            { post && 
              <div className="grid grid-cols-4">
                <Image className="object-cover" src={post.coverImage} alt={post.title} fill />
                </div>
          }
          </Link>
        </div>
        <div className="w-full absolute bottom-0 left-0 text-center bg-gradient-to-b hover:from-gray-50/50 hover:to-gray-200/70 from-gray-50/30 to-gray-200/40 backdrop-blur-sm p-2 md:p-4 lg:p-8">
          <h3 className={`${prozaLibre.className} text-sm lg:text-base uppercase text-gray-800 mt-1 md:mt-2`}>{posts.length} post{posts.length > 1 ? 's' : ''} tagged</h3>
          <h1 className={`${teko.className} text-2xl md:text-4xl uppercase font-bold tracking-wide text-gray-900`}>{tag}</h1>
        </div>
      </div>
      </>
  );
}


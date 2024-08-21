"use client";

import Markdown from 'markdown-to-jsx'
import Link from 'next/link'
import Carousel from '@/app/components/Carousel'
import Video from '@/app/components/video'
import Image from 'next/image'
import { Post } from '@/app/blog/lib/definitions';
import React from 'react';
import Strava from '@/app/components/Strava'
import FullWidth from '@/app/components/FullWidth';
import clsx from 'clsx';

export function MarkdownImage({ src, caption, credits, fullWidth = false } : { src: string, caption: string, credits?: string, fullWidth?: boolean }) {
  console.log("Image src: " + src + " fullwidth: " + fullWidth);
  return <>
          <FullWidth fullWidth={fullWidth} padding={false} >
          <div className={ clsx(
            "relative overflow-hidden not-prose my-2 md:my-2",
            fullWidth ?
            "w-full my-2 md:my-2"
            : "h-[300px] w-full" 
      ) }>
            {/* <Image src={src} alt={alt} className="w-full h-full object-contain object-center transition duration-200 group-hover:scale-110" fill /> */}
            {/* XXX: Using next/image does not work without specifying height */}
            <img src={src} alt={caption} className="w-full h-full object-contain object-center transition duration-200 group-hover:scale-110" />
            { (caption || credits) &&
              <figcaption className="italic ml-4 sm:ml-10 md:ml-20 lg:ml-30 p-2 md:p-4 bg-gray-200 dark:bg-gray-700 rounded-lg">
              { caption && <p className="text-gray-600 dark:text-gray-300">{caption}</p> }
              { credits && <p className="text-gray-400 dark:text-gray-400">Credits: {credits}</p> }
              </figcaption>
            }
          </div>
          </FullWidth>
        </>;
} 

/*
 * Converts from markdown to JSX with curtom react components support
 *
 * NOTE: in order for custom components to render as expected,
 * they should be wrapped in <div className="not-prose"></div>
 */

export function MarkdownToReact({ post } : { post: Post }) {
  const markdown = post.content;

  // Carousel image data is stored in the markdown frontmatter
  // Create a new component that forwards this data to the Carousel component
  const CarouselWithData = ({ name, fullWidth = true } : { name: string, fullWidth?: boolean } ) => 
  {
    if(post.carousels && post.carousels[name])
    {
      const carousel = post.carousels[name];
      // Wrap in not-prose to prevent the prose style from messing up the carousel layout
      return <div className="not-prose"><Carousel carousel={carousel} fullWidth={fullWidth} /></div>;
    }
    else
    {
      throw Error("Carousel " + name + " not found in post " + post.slug);
    }
  };

  return <Markdown
    options={{
      // These components should be wrapped in className="not-pose" when appropriate
      overrides: {
        Link: {
          component: Link
        },
        Video: {
          component: Video
        },
        Carousel: {
          component: CarouselWithData
        },
        Image: {
          component: MarkdownImage
        },
        Strava: {
          component: Strava
        }
      },
    }}>{markdown}</Markdown>;
}

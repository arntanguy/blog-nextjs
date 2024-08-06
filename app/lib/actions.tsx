'use server';

import { Post } from '@/app/lib/definitions';
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

export async function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  try
  {
    const { data, content } = matter(fileContents);
    if(!data.author)
    {
      console.log("Warning: " + fullPath + " has no author, using default");
      data.author = {
        name: "Arnaud TANGUY (default)",
        picture: "/assets/blog/authors/arnaud-tanguy.jpg"
      }
    }
    if(!data.date)
    {
      console.log("Warning: " + fullPath + " has no date, using default");
      data.date = new Date().toISOString();
    }
    if(!data.coverImage)
    {
      if(data.image)
      {
        // XXX check if image exists
        data.coverImage = "/assets/blog/covers/" + data.image + "-cover.jpg";
        console.log("Cover image is " + data.coverImage);
      }
    }
    if(!data.ogImage)
    {
      data.ogImage = {
        url: "/assets/blog/" + realSlug + "/cover.jpg"
      }
    }
    return { ...data, slug: realSlug, content } as Post;
  }
  catch(error)
  {
    throw new Error(fullPath + " " + error); 
  }

}

export async function getAllPosts() {
  const slugs = await getPostSlugs();
  const postsData = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug))
  )
  return postsData
  // sort posts by date in descending order
  .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

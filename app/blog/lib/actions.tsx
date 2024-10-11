'use server';

import { Post, TagWithCount } from '@/app/blog/lib/definitions';
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");
const defaultAuthor = { name: "Arnaud TANGUY", picture: "/assets/blog/authors/arnaud-tanguy.jpg" };

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
     data.author = defaultAuthor;
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

export async function getAllPosts({ showUnpublished } : { showUnpublished?: boolean } = {}) {
  const slugs = await getPostSlugs();
  const postsData = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug))
  )
  return postsData
  // sort posts by date in descending order
  .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  // get only published posts unless showUnpublished is true
  .filter((post) => 
    { 
        if(post.published == undefined)
          return showUnpublished == undefined || !showUnpublished;
        return post.published;
    });
}

export async function getPostsByTag( tag: string) {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.tags ? post.tags.includes(tag) : false);
  // XXX: would be more efficient to get posts unsorted and then sort them here
}

export async function getAllTags() {
  const allPosts = await getAllPosts();
  // Count how many times each tag appears
  // Return an array of {name, count} objects sorted by descending count
  return allPosts
    .map((post) => post.tags)
    .flat()
    .reduce((acc : TagWithCount[], tag) => {
      if(!tag) return acc;
      const existing = acc.find((item : TagWithCount) => item.name === tag);
      if (existing) {
        existing.count++;
      } else {
        acc.push({ name: tag, count: 1 });
      }
      return acc;
    }, [])
    .sort((a, b) => b.count - a.count);
}

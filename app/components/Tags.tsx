import { getAllTags } from '@/app/blog/lib/actions';
import Link from 'next/link';
import { teko } from '@/app/ui/fonts';

// TODO: Match tag with URI to display currently selected tag
export default async function Tags() {
  const tags = await getAllTags();
  if(tags.length == 0) return (<></>)
  const max = tags[0].count;
  const min = tags[tags.length - 1].count;

  return (
    <>
      <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400">
        {tags.map((tag) => {
          const ratio = ((tag.count - min) / (max - min)); // 1 is max, 0 is min
          const colorId = Math.floor(ratio * 3);
          const colorDark = 700 - colorId * 100;  
          const hoverColorDark = colorDark - 100; //colorDark + 100; 
          const className = ``;
          return (
            // TODO: Display color according to count
            <Link href={`/blog/tags/${tag.name}`} key={tag.name} className={`${teko.className} text-lg tracking-wider m-1 lg:m-2 border-2 border-solid hover:border-2 border-gray-400 hover:border-orange-500 hover:text-orange-800 dark:border-gray-500 dark:hover:border-orange-400 dark:hover:text-orange-400 p-1 sm:p-2 md:p-3 rounded-lg uppercase transition-colors duration-300`}>
              {tag.name}
              </Link>
          )
        })
      }
      </div>
      </>)
}

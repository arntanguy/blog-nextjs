import { CarouselImage, CarouselType } from '@/app/lib/definitions';
import Image from 'next/image';
import clsx from 'clsx';
import ReactPlayer from 'react-player'

export default function Carousel( { carousel }: { carousel : CarouselType } )
{
  const images = carousel.images;

  return (
    <div className="bg-gray-300 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg h-full w-full py-6 sm:py-8 lg:py-12 mt-6 sm:mt-8 lg:mt-12 mb-6 sm:mb-8 lg:mb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {
          images.map(
            (image : CarouselImage) => {
              return (
                <div key={image.url}
                  className={clsx("group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg",
                    {"col-span-2" : image.large},
                    {"col-span-2 sm:col-span-3" : image.fullWidth},
                    "md:h-96")} >
                    <a href="#">
                      { (!image.type || image.type === "image") &&
                        <>
                          <Image src={image.url} alt={image.title || ""} className="absolute h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" fill />
                            <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            { image.title &&
                              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">{image.title}</span>
                          }
                          </>
                    }
                      { (image.type && image.type === "video") &&
                        <ReactPlayer url={image.url} width="100%" height="100%" controls />
                    }
                    </a>
                  </div>)
            }
          )
        }
        </div>
      </div>
        { (carousel.title || carousel.description) &&
          <div className="pt-6 sm:pt-8 lg:pt-12">
            {carousel.title && <h1 className="text-center text-lg font-bold text-gray-900 dark:text-gray-100">{carousel.title}</h1>}
              {carousel.description && <p className="text-center text-md font-medium text-gray-600 dark:text-gray-400">{carousel.description}</p>}
            </div>
      }
      </div>
  )
}

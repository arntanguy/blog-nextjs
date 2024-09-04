'use client';

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { nanoid } from "nanoid";
import { shimmer } from "@/app/ui/animations";
import { Suspense } from "react";

export type Card = {
  url: string;
  title: string;
};

const sampleCards : Card[] = [
  {
    url: "/portfolio/robots/hrp2.jpg",
    title: "HRP-2Kai",
  },
  {
    url: "/portfolio/robots/hrp4.jpg",
    title: "HRP-4",
  },
  {
    url: "/portfolio/robots/hrp4cr.jpg",
    title: "HRP-4CR",
  },
  {
    url: "/portfolio/robots/hrp5p.jpg",
    title: "HRP-5P",
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
  },
];

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel cards={sampleCards} />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

export const HorizontalScrollCarousel = ( { cards } : { cards: Card[] } ) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={nanoid()} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const CardSkeleton = () => {
  return (
  <div
    className={`${shimmer} relative h-[300px] w-[300px] md:h-[450px] md:w-[450px] bg-gray-300 dark:bg-gray-600 overflow-hidden rounded-xl`}
  ></div>)
}

const Card = ({ card, showTitle = true } : { card: any, showTitle?: boolean }) => {
  return (
    <Suspense fallback={<CardSkeleton />}>
    <div
      className="group relative h-[300px] w-[300px] md:h-[450px] md:w-[450px] overflow-hidden rounded-xl"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 bg-neutral-200 h-[450px]"
      >
      </div>
      { showTitle &&
        <div className="absolute inset-0 z-10 grid place-content-end justify-center">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-2 text-4xl font-black uppercase text-gray-800 tracking-wider backdrop-blur-lg">
            {card.title}
          </p>
        </div>
      }
    </div>
    </Suspense>
  );
};

export default Example;

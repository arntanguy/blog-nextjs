export type Author = {
  name: string;
  picture: string;
};

export type CarouselImage = {
  url: string;
  title?: string;
  author?: Author;
  description?: string;
  type?: "image" | "video";
  large?: boolean;
  fullWidth?: boolean;
}

export type CarouselType = {
  title?: string;
  description?: string;
  basePath?: string;
  images: CarouselImage[];
}

export type Carousels = { 
  [name: string]: CarouselType
}

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
  carousels?: Carousels;
};

import { ResumeSchema } from "./ResumeSchema";
import { CarouselImage } from "@/app/blog/lib/definitions";

type StripArray<T> = T extends (infer U)[] ? U : T;

type StripAll<T> = NonNullable<StripArray<T>>;

export type ResumeWorkType = StripAll<ResumeSchema['work']> & {
  // Add additional types not in the original JSON Resume schema
  keywords?: string[]
};

export type ResumeEducationType = StripAll<ResumeSchema['education']>;

// Projects section
export type ProjectsType = StripAll<ResumeSchema['projects']>;

// Extra category for featured projects
export type FeaturedProjectType =
{
  name: string,
  description: string,
  location?: string,
  url?: string,
  startDate?: string,
  endDate: string,
  keywords?: string[],
  logo?: string,
  media: CarouselImage 
};

export type FullResumeSchema = ResumeSchema & {
  featuredProjects?: FeaturedProjectType[],
};


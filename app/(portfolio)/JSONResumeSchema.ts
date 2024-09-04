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

// Extra information for featured projects
export type FeaturedProjectType = ProjectsType &
{
  location?: string,
  startDate?: string,
  endDate: string,
  keywords?: string[],
  media: CarouselImage,
  featured: boolean
};

export type Robot = 
{
  name: string,
  url: string,
  roles?: string[]
};

export type FullResumeSchema = ResumeSchema & {
  projects?: FeaturedProjectType[],
  robots?: Robot[],
};


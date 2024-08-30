import { ResumeSchema } from "./ResumeSchema";

type StripArray<T> = T extends (infer U)[] ? U : T;

type StripAll<T> = NonNullable<StripArray<T>>;

export type ResumeWorkType = StripAll<ResumeSchema['work']> & {
  // Add additional types not in the original JSON Resume schema
  keywords?: string[]
};

export type ResumeEducationType = StripAll<ResumeSchema['education']>;

// Projects section
export type ProjectsType = StripAll<ResumeSchema['projects']>;

import { ResumeSchema } from "./ResumeSchema";

type StripArray<T> = T extends (infer U)[] ? U : T;

export type ResumeWorkType = StripArray<ResumeSchema['work']> & {
  // Add additional types not in the original JSON Resume schema
  keywords?: string[]
};

export type ResumeEducationType = StripArray<ResumeSchema['education']>;

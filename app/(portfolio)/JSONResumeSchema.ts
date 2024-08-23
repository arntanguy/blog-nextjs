import { ResumeSchema } from "./ResumeSchema";

type StripArray<T> = T extends (infer U)[] ? U : T;
export type ResumeWorkType = StripArray<ResumeSchema['work']>;
export type ResumeEducationType = StripArray<ResumeSchema['education']>;

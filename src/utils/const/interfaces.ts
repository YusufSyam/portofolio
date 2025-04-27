import { TProjectType, TTechStack } from "./types";

export interface ICProjects {
    name: string;
    image?: string | null;
    projectType: TProjectType,
    techs: Array<TTechStack>;
    githubLink?: string | null;
    projectLink?: string | null;
    articleLink?: string | null;
    summary: string;
    shortSummary?: string;
    role?: string | Array<String>;
    contribution?: "part" | "whole";
}
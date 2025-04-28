import { TProjectType, TTechStack } from "./types";

export interface ICProjects {
    idx: number,
    name: string;
    image?: string | null;
    projectType: TProjectType,
    techs: Array<TTechStack>;
    githubLink?: string | null;
    projectLink?: string | null;
    articleLink?: string | null;
    summary: string;
    shortSummary?: string;
    role?: Array<String>;
    contribution?: "part" | "whole";
    anotherLinks?: Array<IAnotherProjectLink>
}
export type IAnotherProjectLinkType= "repo" | "code" | "other"

export interface IAnotherProjectLink {
    linkName: string;
    href: string;
    type?: IAnotherProjectLinkType;
    description?: string;
}
import { TTechStack } from "../../components/TechStackChipIcon.component";

export interface ICProjects {
    name: string;
    image?: string;
    projectType: "data science" | "machine learning" | "iot" | "website" | "desktop app" | "etc",
    techs: Array<TTechStack>;
    githubLink?: string | null;
    projectLink?: string | null;
    articleLink?: string | null;
    summary: string;
}
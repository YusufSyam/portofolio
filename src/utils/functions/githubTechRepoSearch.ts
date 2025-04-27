import { CLinks } from "../const/links";

export function getGithubSearcQueryLink(stack:string){
    return `${CLinks.github}?tab=repositories&q=${stack}&type=&language=&sort=`
}

export function getGithubSearchLanguageLink(stack:string){
    return `${CLinks.github}?tab=repositories&q=&type=&language=${stack}&sort=`
}
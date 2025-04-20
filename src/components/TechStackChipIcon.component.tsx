import React, { ReactNode } from 'react';
import { IconCPPFilled, IconGitFilled, IconJavaFilled, IconJavascriptFilled, IconKerasFilled, IconNextJSFilled, IconPandasOutline, IconPythonFilled, IconPytorchOutline, IconReactOutline, IconRStudioFilled, IconTableauOutline, IconTailwindOutline, IconTensorflowFilled, IconTypescriptFilled, IconWordpressFilled } from '../assets/icons/Fluent';

// export type TTechStack= "cpp"
export type TTechStack= "tensorflow" | "python" | "typescript" | "javascript" | "java" | "cpp" | "r" | "keras" | "pandas" | "pytorch" | "tableau" | "reactjs" | "nextjs" | "tailwind" | "git" | "wordpress"

export interface ITechStackIcon {
    techIcon: TTechStack;
}

export const techStackChip : Record<TTechStack, ReactNode> = {
    "cpp": <IconCPPFilled size={24} className='' color='white' />,
    "git": <IconGitFilled size={24} className='' color='white' />,
    "java": <IconJavaFilled size={24} className='' color='white' />,
    "javascript": <IconJavascriptFilled size={24} className='' color='white' />,
    "keras": <IconKerasFilled size={21} className='' color='white' />,
    "nextjs": <IconNextJSFilled size={22} className='' color='white' />,
    "pandas": <IconPandasOutline size={24} className='' color='white' />,
    "python": <IconPythonFilled size={22} className='' color='white' />,
    "pytorch": <IconPytorchOutline size={22} className='' color='white' />,
    "r": <IconRStudioFilled size={24} className='' color='white' />,
    "reactjs": <IconReactOutline size={24} className='' color='white' />,
    "tableau": <IconTableauOutline size={22} className='' color='white' />,
    "tailwind": <IconTailwindOutline size={24} className='' color='white' />,
    "tensorflow": <IconTensorflowFilled size={22} className='' color='white' />,
    "typescript": <IconTypescriptFilled size={24} className='' color='white' />,
    "wordpress": <IconWordpressFilled size={22} className='' color='white' />,
}
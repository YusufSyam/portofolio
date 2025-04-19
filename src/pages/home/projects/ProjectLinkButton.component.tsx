import { ReactNode } from "react"

import React from 'react';
import { IconGithubFilled, IconRightArrowNoTail } from "../../../assets/icons/Fluent";
import Button2 from "../../../components/Button2.component";
import { Link } from "react-router-dom";

export interface IProjectLinkButton {
    href?: string;
}

export const GithubProjectLink: React.FC<IProjectLinkButton> = ({ href = "#" }) => {
    return (
        <Link to={href} target="_blank">
            <Button2 label={'github'} icon={<IconGithubFilled size={22} color='white' />} bgColor='dark' />
        </Link>
    )
}

export const ProjectProjectLink: React.FC<IProjectLinkButton> = ({ href = "#" }) => {
    return (
        <Link to={href} target="_blank">
            <Button2 label={'project link'} icon={<IconRightArrowNoTail size={20} color='white' className='mt-[2px]' />} bgColor='grey' />
        </Link>
    )
}

export const ArticleProjectLink: React.FC<IProjectLinkButton> = ({ href = "#" }) => {
    return (
        <Link to={href} target="_blank">
            <Button2 label={'article'} icon={<IconRightArrowNoTail size={20} color='black' className='mt-[2px]' />} bgColor='cream' />
        </Link>
    )
}


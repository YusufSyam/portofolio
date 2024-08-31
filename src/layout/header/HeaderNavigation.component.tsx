import { Text } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

export interface IHeaderNavigationComp {
  href?: string;
  label?: string;
}

const HeaderNavigationComp: React.FC<IHeaderNavigationComp> = ({href='', label='label' }) => {
  return (
    <Link to={href}>
      <Text>
        {label}
      </Text>
    </Link>
  )
}
export default HeaderNavigationComp;
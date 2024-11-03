import { Text } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

export interface IFDHeaderNavigationComp {
  href?: string;
  label?: string;
}

const FDHeaderNavigationComp: React.FC<IFDHeaderNavigationComp> = ({href='', label='label' }) => {
  return (
    <Link to={href}>
      <Text className='text-primary-text-1 font-roboto tracking-5'>
        {label}
      </Text>
    </Link>
  )
}
export default FDHeaderNavigationComp;
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
      <Text className='text-white font-poppins tracking-5 sm:text-lg text-md'>
        {label}
      </Text>
    </Link>
  )
}
export default FDHeaderNavigationComp;
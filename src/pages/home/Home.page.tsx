import React from 'react';

export interface IHomePage {}

const HomePage: React.FC<IHomePage> = ({ }) => {
  return (
    <div className='font-bold'>Halo</div>
  )
}
export default HomePage;
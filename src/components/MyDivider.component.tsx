import React from 'react';

export interface IMyDividerComp {}

const MyDividerComp: React.FC<IMyDividerComp> = ({ }) => {
  return (
    <div className='h-1 w-40 bg-cream'>

    </div>
  )
}
export default MyDividerComp;
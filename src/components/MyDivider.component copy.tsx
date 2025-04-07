import React from 'react';

export interface IMyCircleDividerComp {}

const MyCircleDividerComp: React.FC<IMyCircleDividerComp> = ({ }) => {
  return (
    <div className='h-[6px] w-[6px] rounded-full bg-white'>

    </div>
  )
}
export default MyCircleDividerComp;
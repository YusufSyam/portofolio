import { Stack } from '@mantine/core';
import React from 'react';
import FDHomeCountdownComp from './FDHomeCountdown.component';

export interface IFDHomeSection3 {}

const FDHomeSection3: React.FC<IFDHomeSection3> = ({ }) => {
  return (
    <Stack>
      <FDHomeCountdownComp />
    </Stack>
  )
}
export default FDHomeSection3;
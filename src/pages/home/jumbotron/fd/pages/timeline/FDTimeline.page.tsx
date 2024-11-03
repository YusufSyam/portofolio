import React from 'react';
import FDMainLayout from '../../layout/Main.layout';
import { Stack } from '@mantine/core';
import FDTimelineStepComp from './FDTimelineStep.component';

export interface IFDTimelinePage {}

const FDTimelinePage: React.FC<IFDTimelinePage> = ({ }) => {
  return (
    <FDMainLayout>
      <Stack className='mx-24 gap-0'>
        <FDTimelineStepComp stepType='start' />
        <FDTimelineStepComp />
        <FDTimelineStepComp />
        <FDTimelineStepComp />
        <FDTimelineStepComp />
        <FDTimelineStepComp stepType='end' />
      </Stack>
    </FDMainLayout>
  )
}
export default FDTimelinePage;
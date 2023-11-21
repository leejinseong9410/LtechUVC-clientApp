import { Interpolation, Theme } from '@emotion/react';
import { MQ } from './media';

export const ContainerTheme = (): Interpolation<Theme> => {
  return {
    paddingTop: 100,
    paddingBottom: 180,
    [MQ[3]]: { paddingTop: 30, paddingBottom: 80 },
  };
};

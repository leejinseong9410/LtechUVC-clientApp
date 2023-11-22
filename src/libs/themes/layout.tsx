import { Interpolation, Theme } from '@emotion/react';
import { MQ } from './media';

export const ContainerTheme = (): Interpolation<Theme> => {
  return {
    paddingTop: 120,
    paddingBottom: 180,
    [MQ[3]]: { paddingTop: 50, paddingBottom: 80 },
  };
};

import React from 'react';
import { css } from '@emotion/react';

//libs
import { Column, Txt, Wrap } from '@/_ui_libs/_index';
import { MQ, colors, fontSize } from '@/libs/themes/_index';

//
export default function BannerTitle({
  image,
  title,
  subTitle,
}: {
  image: string;
  title: string;
  subTitle: string;
}) {
  return (
    <Wrap
      align="center"
      height="100%"
      maxHeight={360}
      minHeight={200}
      css={css`
        background-image: url(${image});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      `}
    >
      <Column
        maxWidth={1240}
        padding={{ vertical: 110, horizontal: 20 }}
        gap={16}
        css={{ [MQ[3]]: { padding: '60px 20px' } }}
      >
        <Txt as="h1" size={40} color={colors.white} css={{ [MQ[3]]: { fontSize: fontSize.s28 } }}>
          {title}
        </Txt>

        <Txt size={18} color={colors.grey200} css={{ [MQ[3]]: { fontSize: fontSize.s15 } }}>
          {subTitle}
        </Txt>
      </Column>
    </Wrap>
  );
}

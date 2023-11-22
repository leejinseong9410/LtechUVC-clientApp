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
  txtColor = 'defailt',
}: {
  image: string;
  title: string;
  subTitle: string;
  txtColor?: 'defailt' | 'black';
}) {
  return (
    <Wrap
      align="center"
      height="100%"
      css={css`
        background-image: url(${image});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      `}
    >
      <Column
        maxWidth={1240}
        padding={{ vertical: 150, horizontal: 20 }}
        gap={16}
        css={{ [MQ[3]]: { padding: '60px 20px', rowGap: 10 } }}
      >
        <Txt
          as="h1"
          size={40}
          color={txtColor === 'defailt' ? colors.white : colors.black100}
          css={{ [MQ[3]]: { fontSize: fontSize.s26 } }}
        >
          {title}
        </Txt>

        <Txt
          size={18}
          color={txtColor === 'defailt' ? colors.grey200 : colors.grey800}
          css={{ [MQ[3]]: { fontSize: fontSize.s15 } }}
        >
          {subTitle}
        </Txt>
      </Column>
    </Wrap>
  );
}

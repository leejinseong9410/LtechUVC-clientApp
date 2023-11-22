import React, { ReactNode } from 'react';

//libs
import { Column, Container, Txt } from '@/_ui_libs/_index';
import { ContainerTheme, MQ, colors } from '@/libs/themes/_index';

//
interface Props {
  children: ReactNode;
  title?: string;
  subTitle?: string;

  title_maxWidth?: number | string;
  title_padding?: {
    all?: number;
    horizontal?: number;
    vertical?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };

  maxWidth?: number;
  padding?: {
    all?: number;
    horizontal?: number;
    vertical?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}

//
export default function ContentView({
  children,
  title,
  subTitle,
  title_maxWidth,
  title_padding,
  maxWidth,
  padding,
}: Props) {
  return (
    <Container align="center" maxWidth={maxWidth} padding={padding} css={ContainerTheme()}>
      <Column
        maxWidth={title_maxWidth}
        gap={30}
        css={{ [MQ[3]]: { rowGap: 20 } }}
        padding={title_padding}
      >
        {title && (
          <Txt as="h2" size={38} css={{ [MQ[3]]: { fontSize: 26 } }}>
            {title}
          </Txt>
        )}
        {subTitle && (
          <Txt
            size={18}
            color={colors.grey800}
            lineHeight={1.7}
            css={{ [MQ[1]]: { whiteSpace: 'normal' }, [MQ[3]]: { fontSize: 15 } }}
          >
            {subTitle}
          </Txt>
        )}
      </Column>

      <Column>{children}</Column>
    </Container>
  );
}

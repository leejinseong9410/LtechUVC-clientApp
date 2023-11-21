import React, { ReactNode } from 'react';

//libs
import { Column, Container, Txt } from '@/_ui_libs/_index';
import { ContainerTheme, MQ } from '@/libs/themes/_index';

//
interface Props {
  children: ReactNode;
  title?: string;
  subTitle?: string;
  maxWidth?: number;
  horizontal?: number;
}

//
export default function ContentView({
  children,
  title,
  subTitle,
  maxWidth = 1240,
  horizontal,
}: Props) {
  return (
    <Container maxWidth={maxWidth} padding={{ horizontal: horizontal }} css={ContainerTheme()}>
      <Column>
        {title && (
          <Txt as="h2" size={38} css={{ [MQ[3]]: { fontSize: 24 } }}>
            {title}
          </Txt>
        )}
        {subTitle && (
          <Txt size={18} css={{ [MQ[3]]: { fontSize: 15 } }}>
            {subTitle}
          </Txt>
        )}
      </Column>

      {children}
    </Container>
  );
}

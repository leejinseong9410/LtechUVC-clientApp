import React from 'react';
import { CSSObject } from '@emotion/react';

//libs
import { Column, Img, LinkHref, Row, Txt, TxtSpan, Wrap } from '@/_ui_libs/_index';
import { colors, fontSize, MQ } from '@/libs/themes/_index';

//
export default function Section1({ txt }: { txt: any }) {
  return (
    <Row gap={60} crossGap={40} css={Themes('box')}>
      {/* 좌측 */}
      <Column maxWidth={520} css={{ [MQ[2]]: { maxWidth: '100%' } }}>
        <Wrap gap={16} margin={{ bottom: 50 }}>
          <Txt as="h2" size={40} css={Themes('title')}>
            {txt?.title}
          </Txt>

          <Txt size={18} color={colors.grey800} css={Themes('txt')}>
            {txt?.subTitle}
          </Txt>
        </Wrap>

        <Wrap
          align="center"
          crossAlign="center"
          height="100%"
          padding={{ vertical: 50, horizontal: 30 }}
          backgroundColor="#F5F6F9"
          borderRadius={10}
        >
          <Img src={txt?.img1} alt={txt?.content1} size={{ maxWidth: 400 }} objectFit="fill" />
        </Wrap>

        <Row margin={{ top: 10 }} crossAlign="space-between" align="center">
          <TxtSpan size={18} css={Themes('contentTxt')}>
            {txt?.content1}
          </TxtSpan>

          <LinkHref a="/business/geen-ammonia" txtSize={14} colors={{ txt: '#aaa' }}>
            {txt?.tabName} &#62;
          </LinkHref>
        </Row>
      </Column>

      {/* 우측 */}
      <Column gap={40}>
        <Column gap={10}>
          <Wrap
            align="center"
            height="100%"
            padding={{ vertical: 50, horizontal: 30 }}
            backgroundColor="#F5F6F9"
            borderRadius={10}
          >
            <Img
              src={txt?.img2}
              alt={txt?.content2}
              size={{ width: '100%', maxWidth: 320 }}
              objectFit="fill"
            />
          </Wrap>
          <Row crossAlign="space-between" align="center">
            <TxtSpan size={18} css={Themes('contentTxt')}>
              {txt?.content2}
            </TxtSpan>

            <LinkHref a="/business/smart-energy" txtSize={14} colors={{ txt: '#aaa' }}>
              {txt?.tabName} &#62;
            </LinkHref>
          </Row>
        </Column>

        <Column gap={10}>
          <Wrap
            align="center"
            height="100%"
            padding={{ vertical: 50, horizontal: 30 }}
            backgroundColor="#F5F6F9"
            borderRadius={10}
          >
            <Img
              src={txt?.img3}
              alt={txt?.content3}
              size={{ width: '100%', maxWidth: 320 }}
              objectFit="fill"
            />
          </Wrap>

          <Row crossAlign="space-between" align="center">
            <TxtSpan size={18} css={Themes('contentTxt')}>
              {txt?.content3}
            </TxtSpan>

            <LinkHref a="/business/hydrogen-business" txtSize={14} colors={{ txt: '#aaa' }}>
              {txt?.tabName} &#62;
            </LinkHref>
          </Row>
        </Column>
      </Column>
    </Row>
  );
}

//styled
const Themes = (txt: 'box' | 'title' | 'txt' | 'contentTxt'): CSSObject => {
  if (txt === 'box') return { [MQ[2]]: { flexDirection: 'column' } };

  if (txt === 'title') return { [MQ[3]]: { fontSize: fontSize.s32 } };

  if (txt === 'txt')
    return { color: '#aaa', [MQ[3]]: { fontSize: fontSize.s16, whiteSpace: 'normal' } };

  if (txt === 'contentTxt')
    return { color: colors.grey900, fontWeight: '500', [MQ[3]]: { fontSize: fontSize.s15 } };

  return {};
};

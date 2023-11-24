import React from 'react';
import { CSSObject } from '@emotion/react';

//libs
import { Column, Img, Row, Section, Txt, TxtSpan, Wrap } from '@/_ui_libs/_index';
import { MQ, colors, fontSize } from '@/libs/themes/_index';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom } from '@/libs/atoms/widgets-atom';

//components
import SEO from '@/seo.config';
import ContentView from '@/libs/components/_custom/ContentView';
import BannerTitle from '@/libs/components/_custom/BannerTitle';

//
export default function GeenAmmonia() {
  const lang = useRecoilValue(langAtom);
  const txt = lang?.수소융복합;

  return (
    <>
      <SEO title={txt?.banner?.title} description={txt?.banner?.subTitle} />
      <Section>
        <BannerTitle
          txtColor="black"
          image={txt?.banner?.bannerImg}
          title={txt?.banner?.title}
          subTitle={txt?.banner?.subTitle}
        />

        {/* --- 타이틀 --- */}
        <ContentView
          title={txt?.title}
          subTitle={txt?.text}
          title_maxWidth={1240}
          title_padding={{ horizontal: 20 }}
        >
          <Column gap={160} align="center" css={{ [MQ[2]]: { rowGap: 90 } }}>
            <Wrap
              maxWidth={1240}
              padding={{ horizontal: 20 }}
              margin={{ top: 60 }}
              css={{ [MQ[2]]: { marginTop: 40 } }}
            >
              <Img src={txt?.titleImg} alt={txt?.title} size={{ maxHeight: 700 }} />
            </Wrap>

            {/* --- 각 소개 (태양광 ~ 운송) --- */}
            <Wrap css={contentsInfoTheme('content_wrap')}>
              {txt?.contents?.map((item: any, i: number) => (
                <Row key={i} css={contentsInfoTheme('info_row_wrap')}>
                  <Column css={contentsInfoTheme('infoTxt', i)}>
                    <Txt as="h6" size={32} css={contentsInfoTheme('title')}>
                      {item?.title}
                    </Txt>

                    <Txt size={18} css={contentsInfoTheme('txt')}>
                      {item?.text}
                    </Txt>
                  </Column>

                  <Img src={item?.img} alt={item?.title} css={contentsInfoTheme('img', i)} />
                </Row>
              ))}
            </Wrap>

            {/* --- 기대효과 --- */}
            <Wrap align="center" maxWidth={800} gap={20} padding={{ horizontal: 20 }}>
              <Txt
                as="h5"
                size={38}
                padding={{ horizontal: 20 }}
                css={{ [MQ[3]]: { fontSize: fontSize.s28 } }}
              >
                {txt?.contents2?.title}
              </Txt>

              <Txt lineHeight={1.65} txtAlign="center" css={contentsInfoTheme('txt')}>
                {txt?.contents2?.text}
              </Txt>

              <Row
                wrap="wrap"
                align="center"
                crossAlign="center"
                gap={40}
                crossGap={30}
                margin={{ top: 30 }}
                css={{ [MQ[2]]: { flexDirection: 'column' } }}
              >
                {txt?.contents2?.items?.map((item: string, i: number) => (
                  <Wrap
                    key={i}
                    align="center"
                    crossAlign="center"
                    gap={10}
                    maxWidth={220}
                    minWidth={220}
                    maxHeight={220}
                    minHeight={220}
                    borderRadius={1000}
                    backgroundColor={
                      (i === 0 && '#F9FBFF') ||
                      (i === 1 && '#FAF9FF') ||
                      (i === 2 && '#F5F9F5') ||
                      (i === 3 && '#F9FBFF') ||
                      (i === 4 && '#FDFAFA') ||
                      (i === 5 && '#FDF9F3') ||
                      ''
                    }
                  >
                    <TxtSpan weight="bold" size={26} color="#C9D2E2">
                      0{i + 1}
                    </TxtSpan>

                    <Txt
                      maxWidth={180}
                      color={colors.grey800}
                      weight="medium"
                      size={18}
                      txtAlign="center"
                    >
                      {item}
                    </Txt>
                  </Wrap>
                ))}
              </Row>
            </Wrap>
          </Column>
        </ContentView>
      </Section>
    </>
  );
}

//
/// themes
const contentsInfoTheme = (
  txt: 'content_wrap' | 'info_row_wrap' | 'infoTxt' | 'title' | 'txt' | 'img',
  i?: number,
): CSSObject => {
  if (txt === 'content_wrap')
    return {
      rowGap: 120,
      padding: '120px 20px',
      backgroundColor: colors.ground100,
      alignItems: 'center',
      [MQ[1]]: { rowGap: 60, padding: '70px 20px' },
    };

  if (txt === 'info_row_wrap')
    return {
      maxWidth: 900,
      justifyContent: 'space-between',
      rowGap: 24,
      columnGap: 24,
      [MQ[1]]: { flexDirection: 'column' },
    };

  if (txt === 'infoTxt')
    return {
      rowGap: 20,
      maxWidth: 380,
      order: i === 0 || i === 2 || i === 4 ? 1 : 2,
      [MQ[1]]: { order: 2 },
      [MQ[3]]: { rowGap: 12 },
    };

  if (txt === 'title') return { [MQ[3]]: { fontSize: 24 } };

  if (txt === 'txt')
    return { color: colors.grey700, [MQ[3]]: { fontSize: 15, whiteSpace: 'normal' } };

  if (txt === 'img')
    return {
      maxWidth: 360,
      maxHeight: 360,
      order: i === 0 || i === 2 || i === 4 ? 2 : 1,
      [MQ[1]]: { maxWidth: '100%', order: 1 },
    };

  return {};
};

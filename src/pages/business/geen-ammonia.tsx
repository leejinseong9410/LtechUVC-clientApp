import React from 'react';
import { CSSObject } from '@emotion/react';

//libs
import {
  BoxShadow,
  Column,
  DragScrollContainer,
  Img,
  Padding,
  Row,
  Section,
  Txt,
  TxtSpan,
  Wrap,
} from '@/_ui_libs/_index';
import { MQ, colors, fontSize } from '@/libs/themes/_index';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom } from '@/libs/atoms/widgets-atom';

//components
import SEO from '@/seo.config';
import ContentView from '@/libs/components/_layout/ContentView';
import BannerTitle from '@/libs/components/_layout/BannerTitle';

//
export default function GeenAmmonia() {
  const lang = useRecoilValue(langAtom);
  const txt = lang?.그린암모니아;

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
              <Padding
                all={40}
                backgroundColor={colors.grey100}
                borderRadius={10}
                css={{ [MQ[2]]: { padding: 0 } }}
              >
                <Img
                  src={txt?.titleImg}
                  alt={txt?.title}
                  size={{ maxHeight: 400 }}
                  objectFit="contain"
                />
              </Padding>
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

            {/* --- 암모니아 직접활용 --- */}
            <Column maxWidth={1120}>
              <Txt
                as="h5"
                size={38}
                padding={{ horizontal: 20 }}
                css={{ [MQ[3]]: { fontSize: fontSize.s28 } }}
              >
                {txt?.itemsTitle}
              </Txt>

              <DragScrollContainer
                gap={40}
                css={{ padding: '40px 20px', [MQ[3]]: { columnGap: 30 } }}
              >
                {txt?.items?.map((item: any, i: number) => (
                  <BoxShadow
                    key={item?.title}
                    minWidth={280}
                    boxShadow={{ x: 0, y: 2, blur: 24, color: '#e2e2e2' }}
                  >
                    <Img src={item?.img} alt={item?.title} borderRadius="18px 18px 0 0" />

                    <Row align="center" height="100%" gap={16} padding={{ all: 20 }}>
                      <TxtSpan size={34} weight="bold" color="#C9D2E2">
                        0{i + 1}
                      </TxtSpan>

                      <Column gap={5}>
                        <Txt size={18} color={colors.black100} weight="medium">
                          {item?.title}
                        </Txt>

                        <Txt size={13} color={colors.grey600}>
                          {item?.text}
                        </Txt>
                      </Column>
                    </Row>
                  </BoxShadow>
                ))}
              </DragScrollContainer>
            </Column>

            {/* --- 아부다비 공급 허브 --- */}
            <Row
              align="start"
              crossAlign="space-between"
              gap={150}
              crossGap={40}
              maxWidth={1140}
              padding={{ horizontal: 20, bottom: 20 }}
              css={{ [MQ[1]]: { flexDirection: 'column' } }}
            >
              <Column
                gap={20}
                maxWidth={470}
                margin={{ top: 50 }}
                css={{ [MQ[1]]: { marginTop: 0 }, [MQ[2]]: { flexDirection: 'column' } }}
              >
                <Txt as="h4" color={colors.keyColor} css={{ [MQ[3]]: { fontSize: fontSize.s28 } }}>
                  {txt?.ing?.title}
                </Txt>

                <Txt css={contentsInfoTheme('txt')}>{txt?.ing?.text}</Txt>
              </Column>

              <Img src={txt?.ing?.img} alt={txt?.ing?.title} size={{ maxHeight: 410 }} />
            </Row>
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

  if (txt === 'txt') return { color: colors.grey700, [MQ[3]]: { fontSize: 15 } };

  if (txt === 'img')
    return {
      maxWidth: 360,
      maxHeight: 360,
      order: i === 0 || i === 2 || i === 4 ? 2 : 1,
      [MQ[1]]: { maxWidth: '100%', order: 1 },
    };

  return {};
};

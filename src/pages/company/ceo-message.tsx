import React from 'react';

//assets
import ceoBanner from 'public/images/ceo/ceo-banner.png';

//libs
import { Column, Img, Row, Section, Spacing, Txt, TxtSpan } from '@/_ui_libs/_index';
import { MQ, colors, fontSize, ContainerTheme } from '@/libs/themes/_index';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom } from '@/libs/atoms/widgets-atom';

//assets
import { ceoImg, cfoImg } from '@/libs/assets/images';

//components
import BannerTitle from '@/libs/components/_layout/BannerTitle';
import ContentView from '@/libs/components/_layout/ContentView';
import SEO from '@/seo.config';

//
export default function CeoMessage() {
  const lang = useRecoilValue(langAtom);
  const txt = lang?.인사말;
  const ceoIntroduce = txt?.ceo?.introduce;
  const ceoSchool = txt?.ceo?.school;
  const ceoCompany = txt?.ceo?.company;
  const cfoTxt = txt?.cfo;

  return (
    <>
      <SEO title="CEO 인사말" description="CEO 인사말" />
      <Section>
        <BannerTitle
          image={ceoBanner.src}
          title={txt?.banner?.title}
          subTitle={txt?.banner?.subTitle}
        />

        <ContentView maxWidth={1140} horizontal={20} title={txt?.infoTitle}>
          <Column margin={{ top: 30 }} gap={160} css={{ [MQ[2]]: { rowGap: 80 } }}>
            <Row
              gap={80}
              crossGap={30}
              align="start"
              crossAlign="space-between"
              css={{ [MQ[1]]: { flexDirection: 'column' } }}
            >
              <Column maxWidth={460} gap={14} css={{ [MQ[1]]: { maxWidth: '100%' } }}>
                <Img src={ceoImg} width={600} alt="LEE JI YOUNG" size={{}} />

                <Row crossAlign="space-between">
                  <Txt size={14}>CEO</Txt>
                  <Txt size={14}>LEE JI YOUNG</Txt>
                </Row>
              </Column>

              <Column>
                {/* CEO 소개 */}
                <TxtSpan color={colors.grey700} size={14}>
                  {ceoIntroduce?.position}
                </TxtSpan>

                <Row gap={30} margin={{ top: 6, bottom: 20 }}>
                  <Txt size={18} weight="medium">
                    {ceoIntroduce?.name1}
                  </Txt>
                  <Txt size={18} weight="medium">
                    {ceoIntroduce?.name2}
                  </Txt>
                </Row>

                <Txt color={colors.grey800}>{ceoIntroduce?.text}</Txt>

                <Spacing size={60} />

                {/* CEO 학력 */}
                <Txt as="strong" size={22} margin={{ bottom: 10 }}>
                  {ceoSchool?.title}
                </Txt>

                {ceoSchool?.history?.map((item: any) => (
                  <Row align="start" key={item?.text} gap={20} margin={{ top: 16 }}>
                    <TxtSpan
                      size={15}
                      color={colors.grey800}
                      css={{ minWidth: 90, [MQ[3]]: { fontSize: fontSize.s14 } }}
                    >
                      {item?.data} :
                    </TxtSpan>

                    <Txt color={colors.grey800} css={{ [MQ[3]]: { fontSize: fontSize.s14 } }}>
                      {item?.text}
                    </Txt>
                  </Row>
                ))}

                <Spacing size={60} />

                {/* CEO 경력 */}
                <Txt as="strong" size={22} margin={{ bottom: 10 }}>
                  {ceoCompany?.title}
                </Txt>

                {ceoCompany?.history?.map((item: any) => (
                  <Row align="start" key={item?.text} gap={20} margin={{ top: 16 }}>
                    <TxtSpan
                      size={15}
                      color={colors.grey800}
                      css={{ minWidth: 90, [MQ[3]]: { fontSize: fontSize.s14 } }}
                    >
                      {item?.data} :
                    </TxtSpan>

                    <Txt color={colors.keyColor} css={{ [MQ[3]]: { fontSize: fontSize.s14 } }}>
                      {item?.text}
                    </Txt>
                  </Row>
                ))}
              </Column>
            </Row>

            {/* cfo 정보 */}
            <Row
              gap={80}
              crossGap={30}
              align="start"
              crossAlign="space-between"
              css={{ [MQ[1]]: { flexDirection: 'column' } }}
            >
              <Column maxWidth={460} gap={14} css={{ [MQ[1]]: { maxWidth: '100%' } }}>
                <Img src={cfoImg} width={600} alt="LEE JI YOUNG" />

                <Row crossAlign="space-between">
                  <Txt size={14}>{cfoTxt?.job}</Txt>
                  <Txt size={14}>{cfoTxt?.name}</Txt>
                </Row>
              </Column>

              <Column>
                {/* CEO 소개 */}
                <TxtSpan color={colors.grey700} size={14}>
                  {cfoTxt?.job}
                </TxtSpan>

                <Txt size={18} weight="medium" margin={{ top: 6, bottom: 20 }}>
                  {cfoTxt?.name}
                </Txt>

                <Txt color={colors.grey800}>{cfoTxt?.text}</Txt>
              </Column>
            </Row>
          </Column>
        </ContentView>
      </Section>
    </>
  );
}

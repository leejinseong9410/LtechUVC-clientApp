import React from 'react';

//libs
import {
  Column,
  Container,
  Img,
  LoadingSpinner,
  Row,
  Section,
  Spacing,
  Txt,
  TxtSpan,
} from '@/_ui_libs/_index';
import { MQ, colors } from '../../libs/themes/_index';

//assets
import { TimeIcon } from '@/libs/assets/icons';

//utils
import { moment } from '@/libs/utils/moment';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom, langTypeAtom } from '@/libs/atoms/widgets-atom';
import BackTab from '@/libs/components/_custom/BackTab';
import { projectQuery } from '@/_https/query/projectQuery';
import SEO from '@/seo.config';

//
export default function Detail() {
  const langType = useRecoilValue(langTypeAtom);

  const queryData = projectQuery();
  const { detailData, detailLoading, refs } = queryData;

  if (detailLoading)
    return (
      <>
        <SEO />
        <Section>
          <Container
            maxWidth={800}
            padding={{ top: 80, bottom: 100, horizontal: 20 }}
            css={{ [MQ[3]]: { padding: '40px 20px 60px' } }}
          >
            <LoadingSpinner />
          </Container>
        </Section>
      </>
    );

  return (
    <>
      <SEO title={langType === 'ko' ? detailData?.ko_title : detailData?.en_title} />
      <Section>
        <Container
          maxWidth={800}
          padding={{ top: 80, bottom: 100, horizontal: 20 }}
          css={{ [MQ[3]]: { padding: '40px 20px 60px' } }}
        >
          <Txt as="h1" size={26}>
            {langType === 'ko' ? detailData?.ko_title : detailData?.en_title}
          </Txt>

          <Txt padding={{ top: 20, bottom: 24 }} color={colors.grey800}>
            {langType === 'ko' ? detailData?.ko_context : detailData?.en_context}
          </Txt>

          <Row gap={6}>
            <TimeIcon width={15} />
            <TxtSpan margin={{ bottom: 2 }} size={13}>
              {moment(detailData?.date)}
            </TxtSpan>
          </Row>

          <Spacing size={40} />

          <Column gap={10}>
            {detailData?.images?.map((item: string, i: number) => (
              <Img
                src={item}
                alt={langType === 'ko' ? detailData?.ko_title : detailData?.en_title}
                objectFit="fill"
              />
            ))}
          </Column>

          <Spacing size={40} />
          <BackTab />
        </Container>
      </Section>
    </>
  );
}

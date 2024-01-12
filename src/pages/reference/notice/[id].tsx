import React from 'react';

//libs
import { Column, Container, Img, Row, Section, Spacing, Txt, TxtSpan } from '@/_ui_libs/_index';
import { MQ } from '@/libs/themes/_index';

//assets
import { TimeIcon } from '@/libs/assets/icons';

//utils
import { moment } from '@/libs/utils/moment';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom, langTypeAtom } from '@/libs/atoms/widgets-atom';
import BackTab from '@/libs/components/_custom/BackTab';
import { useQuery } from 'react-query';
import { fetchGetNoticeDetail } from '@/_https/apis';
import { useRouter } from 'next/router';
import SEO from '@/seo.config';

//
export default function Detail() {
  const router = useRouter();
  const isLang = useRecoilValue(langAtom);
  const langType = useRecoilValue(langTypeAtom);
  const txt = isLang?.콘텐츠?.프로젝트?.banner;

  const { data } = useQuery(['notice-detail-key'], () => fetchGetNoticeDetail(router.query.id));

  console.log(data);

  return (
    <Section>
    <Container
      maxWidth={800}
      padding={{ top: 80, bottom: 100, horizontal: 20 }}
      css={{ [MQ[3]]: { padding: '40px 20px 60px' } }}
    >
      <Row gap={6} margin={{ bottom: 14 }}>
        <TimeIcon width={15} />
        <TxtSpan margin={{ bottom: 2 }} size={13}>
          {moment(new Date())}
        </TxtSpan>
      </Row>

      <Txt as="h1" size={26}>
            {langType === 'ko' ? data?.ko_title : data?.en_title}
          </Txt>

      <Spacing size={40} />
           <Column gap={10}>
            {data?.images?.map((item: string, i: number) => (
              <Img
                src={item}
                alt={langType === 'ko' ? data?.ko_title : data?.en_title}
                objectFit="cover"
                screenRatio={{ x: 3, y: 4 }}
              />
            ))}
          </Column>
      <Spacing size={40} />
      <BackTab />
    </Container>
  </Section>
  );
}
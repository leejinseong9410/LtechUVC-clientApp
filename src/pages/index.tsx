import React, { ChangeEvent, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';

//libs
import {
  Container,
  Img,
  Input,
  LoadingSpinner,
  Row,
  Section,
  Spacing,
  Txt,
  TxtSpan,
  TxtTab,
  Wrap,
} from '@/_ui_libs/_index';
import { MQ, colors } from '@/libs/themes/_index';

//components
import SEO from '@/seo.config';
import Banner from '@/libs/components/home/Banner';
import Section1 from '@/libs/components/home/Section1';
import { DetailModal } from '@/libs/components/_custom/DetailModal';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom, langTypeAtom } from '@/libs/atoms/widgets-atom';
import { noticeQuery } from '../_https/query/noticeQuery';
import { homeQuery } from '@/_https/query/homeQuery';
import Section2 from '@/libs/components/home/Section2';
import Contents1 from '@/libs/components/home/Contents1';
import Contents3 from '@/libs/components/home/Contents3';
import Contents2 from '@/libs/components/home/Contents2';

//
export default function Index() {
  const router: NextRouter = useRouter();
  const [isPopUp, setIsPopUp] = useState(true);

  const lang = useRecoilValue(langAtom);
  const langType = useRecoilValue(langTypeAtom);

  const homeQueryData = homeQuery();
  const { data, isLoading } = homeQueryData;
  const queryData = noticeQuery();
  const { alartData } = queryData;

  return (
    <>
      <SEO />

      <Section>
        <Banner />

        <Wrap
          maxWidth={1440}
          gap={200}
          padding={{ horizontal: 20, vertical: 200 }}
          css={{ [MQ[2]]: { padding: '90px 20px', rowGap: 120 } }}
        >
          {/* 사업영역 */}
          <Section1 txt={lang?.home?.item1} />

          {/* 마지막 1.5C */}
          <Section2 txt={lang?.home?.item2} />
        </Wrap>

        {isLoading ? (
          <Wrap align="center" padding={{ top: 80, bottom: 160 }} gap={24}>
            <LoadingSpinner />
            <Txt size={16} color="#aaa">
              {langType === 'ko' ? '콘텐츠를 가져오는 중입니다...' : 'Contents Loading ...'}
            </Txt>
          </Wrap>
        ) : (
          <Wrap
            maxWidth={1920}
            gap={160}
            padding={{ top: 80, bottom: 160 }}
            css={{ [MQ[2]]: { padding: '40px 0 60px', rowGap: 100 } }}
          >
            <Contents1 txt={lang?.home?.item3} data={data?.youtube} />

            <Contents2 txt={lang?.home?.item4} data={data?.press} />

            <Contents3 txt={lang?.home?.item5} data={data?.project} />
          </Wrap>
        )}
      </Section>

      {/* 팝업 */}
      {alartData?.popUpData && (
        <DetailModal
          title={langType === 'ko' ? alartData?.result?.ko_title : alartData?.result?.en_title}
          context={
            <Row gap={8}>
              <Txt size={13} color={colors.grey700}>
                {langType === 'ko' ? '더 자세한 내용이 궁금하다면?' : 'learn more'}
              </Txt>
              <TxtTab
                size={13}
                color={colors.grey700}
                css={{ textDecoration: 'underline' }}
                onClick={() => router.push(`/reference/notice/${alartData?.result?.id}`)}
              >
                {langType === 'ko' ? '더보기' : 'see more'}
              </TxtTab>
            </Row>
          }
          view={isPopUp}
          onCancel={() => setIsPopUp(false)}
        >
          <Img
            src={alartData?.result?.images[0]}
            alt=""
            size={{ height: '100%' }}
            objectFit={undefined}
            screenRatio={{ x: 3, y: 4 }}
            borderRadius="0 0 16px 16px"
          />
        </DetailModal>
      )}
    </>
  );
}

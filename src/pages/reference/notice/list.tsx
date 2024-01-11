import React, { useState } from 'react';
import { useRouter } from 'next/router';

//libs
import { Container, Item, Items, Row, Section, Txt, TxtSpan, Wrap } from '@/_ui_libs/_index';
import { MQ, colors, fontSize } from '@/libs/themes/_index';

//atoms
import { langAtom, langTypeAtom } from '@/libs/atoms/widgets-atom';
import { useRecoilValue } from 'recoil';

//utils
import { moment } from '@/libs/utils/moment';

//hooks
import { noticeQuery } from '@/_https/query/noticeQuery';
import Pagination from 'react-js-pagination';

//components
import SEO from '@/seo.config';
import BannerTitle from '@/libs/components/_custom/BannerTitle';
import LoadingSkeleton from '@/libs/components/_custom/LoadingSkeleton';


export default function List() {
  const router = useRouter();
  const { page } = router.query;

  const queryData = noticeQuery();
  const { data, isLoading } = queryData;


  

  const lang = useRecoilValue(langAtom);
  const langType = useRecoilValue(langTypeAtom);
  const txt = lang?.콘텐츠?.공고;
  
  if (isLoading) {
    return (
      <>
        <SEO />
        <Section>
          <Container
            maxWidth={900}
            padding={{ top: 80, bottom: 100, horizontal: 20 }}
            css={{ [MQ[3]]: { padding: '40px 20px 60px' } }}
          >
            <Txt as="h1" size={40} css={{ [MQ[3]]: { fontSize: fontSize.s28 } }}>
              {txt?.title}
            </Txt>

            <LoadingSkeleton />
          </Container>
        </Section>
      </>
    );
  }

  return (
    <>
      <SEO title={txt?.title} />
      <Section>
        <BannerTitle image={txt?.bannerImg} title={txt?.title} subTitle={txt?.subTitle} />

        <Container
          maxWidth={700}
          padding={{ top: 100, bottom: 140, horizontal: 20 }}
          css={{ [MQ[3]]: { padding: '30px 20px 60px' } }}
        >
          <Row
            padding={{ vertical: 12, horizontal: 14 }}
            borderRadius={12}
            backgroundColor={colors.grey100}
            align="center"
            crossAlign="space-between"
          >
            <TxtSpan color="#999">{txt?.label1}</TxtSpan>
            <TxtSpan color="#999">{txt?.label2}</TxtSpan>
          </Row>

          {data?.results?.length === 0 ? (
            <Wrap align="center" gap={10} padding={{ all: 30 }}>
              <Txt color="#999">
                {langType === 'ko' ? '현재 공고가 존재하지 않습니다' : 'COMMING SOON'}
              </Txt>
            </Wrap>
          ) : (
            <>
              <Items gap={10} margin={{ top: 16, bottom: 30 }}>
                {data?.results?.map((item: any) => (
                  <Item
                    key={item?.id}
                    cursor="pointer"
                    direction="horizontal"
                    align="start"
                    crossAlign="space-between"
                    gap={30}
                    backgroundColor="#fff"
                    padding={{ all: 14 }}
                    borderRadius={12}
                    boxShadow={{ x: 0, y: 2, blur: 18, color: '#eee' }}
                    onClick={() => router.push(`/reference/notice/${item?.id}`)}
                    css={{ '&:hover': { boxShadow: 'none' } }}
                  >
                    <Txt ellipsis={{ ellipsis: true, line: 1 }}>
                      {langType === 'ko' ? item?.ko_title : item?.en_title}
                    </Txt>
                    <TxtSpan>{moment(item?.date)}</TxtSpan>
                  </Item>
                ))}
              </Items>

              <Wrap align="center">
                <Pagination
                  activePage={page ? Number(page) : 1}
                  itemsCountPerPage={10}
                  totalItemsCount={data?.count} // data?.count
                  pageRangeDisplayed={4}
                  hideFirstLastPages={true}
                  hideNavigation={true}
                  onChange={(pageNumber: number) => {
                    router.push({ query: { page: pageNumber } });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </Wrap>
            </>
          )}
        </Container>
      </Section>
    </>
  );
}

import React, { useState } from 'react';
import { useRouter } from 'next/router';

//libs
import { Container, Item, Items, Row, Section, Txt, TxtSpan, Wrap } from '@/_ui_libs/_index';
import { MQ, colors, fontSize } from '@/libs/themes/_index';

//atoms
import { langAtom } from '@/libs/atoms/widgets-atom';
import { useRecoilValue } from 'recoil';

//components
import SEO from '@/seo.config';
import BannerTitle from '@/libs/components/_custom/BannerTitle';

//utils
import { moment } from '@/libs/utils/moment';
import Pagination from 'react-js-pagination';

//
export default function List() {
  const router = useRouter();
  const { page } = router.query;

  const lang = useRecoilValue(langAtom);
  const txt = lang?.콘텐츠?.공고;

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

          <Items gap={10} margin={{ top: 16, bottom: 30 }}>
            <Item
              cursor="pointer"
              direction="horizontal"
              align="start"
              crossAlign="space-between"
              gap={20}
              backgroundColor="#fff"
              padding={{ all: 14 }}
              borderRadius={12}
              boxShadow={{ x: 0, y: 2, blur: 18, color: '#eee' }}
              onClick={() => router.push(`/reference/notice/1`)}
              css={{ '&:hover': { boxShadow: 'none' } }}
            >
              <Txt ellipsis={{ ellipsis: true, line: 1 }}>asdasdasd</Txt>
              <TxtSpan>{moment(new Date())}</TxtSpan>
            </Item>
          </Items>

          <Wrap align="center">
            <Pagination
              activePage={page ? Number(page) : 1}
              itemsCountPerPage={10}
              totalItemsCount={12} // data?.count
              pageRangeDisplayed={4}
              hideFirstLastPages={true}
              hideNavigation={true}
              onChange={(pageNumber: number) => {
                router.push({ query: { page: pageNumber } });
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </Wrap>
        </Container>
      </Section>
    </>
  );
}

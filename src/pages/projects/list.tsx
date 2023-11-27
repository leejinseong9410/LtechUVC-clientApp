import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

//libs
import { Container, Img, Item, Items, Row, Section, Txt, TxtSpan } from '@/_ui_libs/_index';
import { ContainerTheme, MQ, colors } from '@/libs/themes/_index';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom, langTypeAtom } from '@/libs/atoms/widgets-atom';

//utils
import { moment } from '@/libs/utils/moment';
import { projectQuery } from '@/_https/query/projectQuery';

//components
import SEO from '@/seo.config';
import BannerTitle from '@/libs/components/_custom/BannerTitle';
import LoadingSkeleton from '@/libs/components/_custom/LoadingSkeleton';

//
export default function List() {
  const router = useRouter();

  const queryData = projectQuery();
  const { isLoading, data, refs } = queryData;

  const isLang = useRecoilValue(langAtom);
  const langType = useRecoilValue(langTypeAtom);

  const txt = isLang?.콘텐츠?.프로젝트;

  if (isLoading) {
    return (
      <>
        <SEO title={txt?.title} description={txt?.subTitle} />
        <Section>
          <BannerTitle
            txtColor="black"
            image={txt?.bannerImg}
            title={txt?.title}
            subTitle={txt?.subTitle}
          />

          <Container maxWidth={900} padding={{ horizontal: 20 }} css={ContainerTheme()}>
            <LoadingSkeleton />
          </Container>
        </Section>
      </>
    );
  }

  return (
    <>
      <SEO title={txt?.title} description={txt?.subTitle} />

      <Section>
        <BannerTitle
          txtColor="black"
          image={txt?.bannerImg}
          title={txt?.title}
          subTitle={txt?.subTitle}
        />

        <Container maxWidth={900} padding={{ horizontal: 20 }} css={ContainerTheme()}>
          <Items
            direction="horizontal"
            wrap="wrap"
            gap={30}
            crossGap={40}
            css={{ [MQ[1]]: { columnGap: 16, rowGap: 30 } }}
          >
            {data?.pages?.map((page) => {
              return page?.results?.map((item: any) => {
                return (
                  <Item
                    key={item?.id}
                    cursor="pointer"
                    onClick={() => router.push(`/projects/${item?.id}`)}
                    gap={14}
                    css={{
                      flex: '0 0 calc(33.333% - 20px)',
                      [MQ[1]]: { flex: '0 0 calc(50% - 8px)' },
                    }}
                  >
                    <Img
                      src={item?.images[0]}
                      alt={langType === 'ko' ? item?.ko_title : item?.en_title}
                      screenRatio={{ x: 4, y: 3 }}
                      css={{ '&:hover': { boxShadow: '0 5px 20px rgba(0,0,0,0.22)' } }}
                    />

                    <Row
                      align="center"
                      crossAlign="space-between"
                      gap={20}
                      crossGap={2}
                      css={{ [MQ[3]]: { flexDirection: 'column', alignItems: 'start' } }}
                    >
                      <Txt as="strong" size={15} ellipsis={{ ellipsis: true, line: 1 }}>
                        {langType === 'ko' ? item?.ko_title : item?.en_title}
                      </Txt>
                      <TxtSpan size={12} color={colors.grey500}>
                        {moment(item?.date)}
                      </TxtSpan>
                    </Row>
                  </Item>
                );
              });
            })}
          </Items>

          <div ref={refs} />
        </Container>
      </Section>
    </>
  );
}

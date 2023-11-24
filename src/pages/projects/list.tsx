import React from 'react';
import { useRouter } from 'next/router';

//libs
import { Container, Img, Item, Items, Row, Section, Txt, TxtSpan } from '@/_ui_libs/_index';
import { ContainerTheme, MQ, colors } from '@/libs/themes/_index';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom } from '@/libs/atoms/widgets-atom';

//components
import SEO from '@/seo.config';
import BannerTitle from '@/libs/components/_custom/BannerTitle';

//utils
import { moment } from '@/libs/utils/moment';

//
export default function List() {
  const router = useRouter();
  const isLang = useRecoilValue(langAtom);

  const txt = isLang?.콘텐츠?.프로젝트;

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
            {[
              { id: 1, img: txt?.bannerImg, title: '프로젝트입니다', date: new Date() },
              { id: 1, img: txt?.bannerImg, title: '프로젝asasdsaadsd트입니다', date: new Date() },
              { id: 1, img: txt?.bannerImg, title: '프로젝트입니다', date: new Date() },
              { id: 1, img: txt?.bannerImg, title: '프로젝트입니다', date: new Date() },
              { id: 1, img: txt?.bannerImg, title: '프로젝트입니다', date: new Date() },
            ].map((item: any) => (
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
                  src={item?.img}
                  alt={item?.title}
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
                    {item?.title}
                  </Txt>
                  <TxtSpan size={12} color={colors.grey500}>
                    {moment(item?.date)}
                  </TxtSpan>
                </Row>
              </Item>
            ))}
          </Items>
        </Container>
      </Section>
    </>
  );
}

import React from 'react';
import Link from 'next/link';
import { Interpolation, Theme } from '@emotion/react';

//libs
import {
  Column,
  Container,
  Img,
  Item,
  Items,
  LinkHref,
  Row,
  Section,
  Txt,
  TxtSpan,
} from '@/_ui_libs/_index';
import { ContainerTheme, MQ, colors } from '@/libs/themes/_index';

//atoms
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { drawerAtom, langAtom } from '@/libs/atoms/widgets-atom';

//components
import SEO from '@/seo.config';
import BannerTitle from '@/libs/components/_layout/BannerTitle';
import { moment } from '@/libs/utils/moment';

//
export default function List() {
  const setIsDrawer = useSetRecoilState(drawerAtom);
  const isLang = useRecoilValue(langAtom);

  const txt = isLang?.콘텐츠?.프로젝트?.banner;

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
          <Items direction="horizontal" wrap="wrap" gap={30} crossGap={50}>
            {[
              { id: 1, img: txt?.bannerImg, title: '프로젝트입니다', date: new Date() },
              { id: 1, img: txt?.bannerImg, title: '프로젝asasdsaadsd트입니다', date: new Date() },
              { id: 1, img: txt?.bannerImg, title: '프로젝트입니다', date: new Date() },
              { id: 1, img: txt?.bannerImg, title: '프로젝트입니다', date: new Date() },
              { id: 1, img: txt?.bannerImg, title: '프로젝트입니다', date: new Date() },
            ].map((item: any) => (
              <Item
                key={item?.id}
                gap={14}
                css={{
                  flex: '0 0 calc(33.333% - 20px)',
                  [MQ[1]]: { flex: '0 0 calc(50% - 15px)' },
                }}
              >
                <Img src={item?.img} alt={item?.title} screenRatio={{ x: 4, y: 3 }} />
                <Row align="center" crossAlign="space-between" gap={200}>
                  <Column gap={4}>
                    <Txt as="strong" size={15} ellipsis={{ ellipsis: true, line: 1 }}>
                      {item?.title}
                    </Txt>
                    <TxtSpan color={colors.grey500}>{moment(item?.date)}</TxtSpan>
                  </Column>

                  <LinkHref
                    a={`/projects/${item?.id}`}
                    txtSize={13}
                    colors={{ txt: '#aaa' }}
                    borderRadius={10}
                    padding={{ all: 8 }}
                    border={{ solid: 1, color: '#e2e2e2' }}
                    css={{ '&:hover': { backgroundColor: colors.grey100 } }}
                  >
                    자세히 보기
                  </LinkHref>
                </Row>
              </Item>
            ))}
          </Items>
        </Container>
      </Section>
    </>
  );
}

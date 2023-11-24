import React, { useState } from 'react';

//libs
import { Container, Img, Item, Items, Row, Section, Txt, TxtSpan } from '@/_ui_libs/_index';
import { MQ, colors, fontSize } from '@/libs/themes/_index';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom } from '@/libs/atoms/widgets-atom';

//components
import SEO from '@/seo.config';

//hooks
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

//utils
import { moment } from '@/libs/utils/moment';
import { DetailModal } from '@/libs/components/_custom/DetailModal';

//
export default function Gallery() {
  const isLang = useRecoilValue(langAtom);
  const [isDetail, setIsDetail] = useState<number | null>(null);
  const date = moment(new Date());

  const txt = isLang?.콘텐츠?.갤러리;

  return (
    <>
      <SEO title={txt?.title} description={txt?.subTitle} />

      <Section>
        <Container
          maxWidth={900}
          padding={{ top: 80, bottom: 100, horizontal: 20 }}
          css={{ [MQ[3]]: { padding: '40px 20px 60px' } }}
        >
          <Txt as="h1" size={40} css={{ [MQ[3]]: { fontSize: fontSize.s28 } }}>
            {txt?.title}
          </Txt>

          <Txt
            size={18}
            color={colors.grey700}
            margin={{ top: 16 }}
            css={{ [MQ[3]]: { fontSize: fontSize.s15, whiteSpace: 'normal' } }}
          >
            {txt?.subTitle}
          </Txt>

          <Items
            direction="horizontal"
            wrap="wrap"
            gap={30}
            crossGap={40}
            padding={{ top: 50 }}
            css={{ [MQ[1]]: { columnGap: 16, rowGap: 24 }, [MQ[3]]: { paddingTop: 30 } }}
          >
            {[
              { id: 1, img: txt?.bannerImg, title: '프로젝트입니다', date: new Date() },
              { id: 1, img: txt?.bannerImg, title: '프로젝asasdsaadsd트입니다', date: new Date() },
              { id: 1, img: txt?.bannerImg, title: '프로젝트입니다', date: new Date() },
              { id: 1, img: txt?.bannerImg, title: '프로젝트입니다', date: new Date() },
              { id: 1, img: txt?.bannerImg, title: '프로젝트입니다', date: new Date() },
              { id: 1, img: txt?.bannerImg, title: '프로젝트입니다', date: new Date() },
            ].map((item: any) => (
              <Item
                key={item?.id}
                cursor="pointer"
                onClick={() => setIsDetail(item?.id)}
                gap={14}
                css={{
                  flex: '0 0 calc(33.333% - 20px)',
                  [MQ[1]]: { flex: '0 0 calc(50% - 8px)' },
                }}
              >
                <Img
                  src="https://res.cloudinary.com/dp0gh7jel/image/upload/v1700629122/img3_ovxxe9.png"
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

      <DetailModal
        title="공고문 타이틀"
        context={<TxtSpan size={14}>{date}</TxtSpan>}
        view={!!isDetail}
        onCancel={() => setIsDetail(null)}
      >
        <Swiper
          modules={[Pagination]}
          pagination={{ dynamicBullets: true }}
          css={{ width: '100%', height: '100%' }}
        >
          {[
            'https://res.cloudinary.com/dp0gh7jel/image/upload/v1700629122/img3_ovxxe9.png',
            'https://res.cloudinary.com/dp0gh7jel/image/upload/v1700629122/img3_ovxxe9.png',
          ]?.map((item: any, i: number) => (
            <SwiperSlide key={i}>
              <Img src={item} alt="" borderRadius="0 0 18px 18px" css={{ height: '100%' }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </DetailModal>
    </>
  );
}

import React, { useState } from 'react';

//libs
import { Container, Img, Item, Items, Row, Section, Txt, TxtSpan } from '@/_ui_libs/_index';
import { MQ, colors, fontSize } from '@/libs/themes/_index';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom, langTypeAtom } from '@/libs/atoms/widgets-atom';

//hooks
import { galleryQuery } from '@/_https/query/galleyQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

//utils
import { moment } from '@/libs/utils/moment';
import { DetailModal } from '@/libs/components/_custom/DetailModal';

//components
import SEO from '@/seo.config';
import LoadingSkeleton from '@/libs/components/_custom/LoadingSkeleton';

//
export default function Gallery() {
  const queryData = galleryQuery();
  const { isLoading, data, refs } = queryData;

  const isLang = useRecoilValue(langAtom);
  const langType = useRecoilValue(langTypeAtom);
  const txt = isLang?.콘텐츠?.갤러리;

  const detailValue = { isOpen: false, id: '', ko_title: '', en_title: '', date: '', images: [] };
  const [isDetail, setIsDetail] = useState(detailValue);

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
            {data?.pages?.map((page) => {
              return page?.results?.map((item: any) => {
                return (
                  <Item
                    key={item?.id}
                    cursor="pointer"
                    onClick={() =>
                      setIsDetail({
                        isOpen: true,
                        id: item?.id,
                        date: item?.date,
                        ko_title: item?.ko_title,
                        en_title: item?.en_title,
                        images: item?.images,
                      })
                    }
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

      {/* 상세 모달 팝업 */}
      <DetailModal
        maxHeigth={460}
        title={langType === 'ko' ? isDetail?.ko_title : isDetail?.en_title}
        context={<TxtSpan size={14}>{moment(isDetail?.date)}</TxtSpan>}
        view={isDetail.isOpen}
        onCancel={() => setIsDetail({ ...isDetail, ...detailValue })}
      >
        <Swiper
          modules={[Pagination]}
          pagination={{ dynamicBullets: true }}
          css={{ width: '100%', height: '100%' }}
        >
          {isDetail?.images?.map((item: any, i: number) => (
            <SwiperSlide key={i}>
              <Img
                src={item}
                alt=""
                borderRadius="0 0 18px 18px"
                css={{ height: '100%' }}
                screenRatio={{ x: 16, y: 9 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </DetailModal>
    </>
  );
}

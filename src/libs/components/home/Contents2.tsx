import React, { useRef } from 'react';
import { useRouter } from 'next/router';

import { CSSObject, css } from '@emotion/react';

//libs
import { Column, Img, Item, Row, Tab, Txt, TxtSpan, Wrap } from '@/_ui_libs/_index';
import { colors, fontSize, MQ } from '@/libs/themes/_index';

//hooks
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { moment } from '@/libs/utils/moment';

//atoms
import { useRecoilValue } from 'recoil';
import { langTypeAtom } from '@/libs/atoms/widgets-atom';

//assets
import { NextIcon, PrevIcon } from '@/libs/assets/icons';

//
export default function Contents2({ txt, data }: { txt: any; data: any }) {
  const router = useRouter();
  const langType = useRecoilValue(langTypeAtom);

  const prevRefs = useRef(null);
  const nextRefs = useRef(null);

  return (
    <Row align="start" gap={100} crossGap={40} css={Themes('box')}>
      {data?.length > 3 ? (
        <>
          <Swiper
            loop={true}
            freeMode={true}
            slidesPerView={3}
            spaceBetween={30}
            modules={[FreeMode, Pagination, Navigation]}
            navigation={{
              prevEl: prevRefs.current,
              nextEl: nextRefs.current,
            }}
            css={swiperTheme}
            data-aos="zoom"
            data-aos-delay="300"
          >
            {data?.map((item: any) => (
              <SwiperSlide>
                <Item
                  cursor="pointer"
                  gap={6}
                  key={item?.id}
                  onClick={() => router.push(`/reference/press/${item?.id}`)}
                >
                  <Img
                    src={item?.images[0]}
                    alt={langType === 'ko' ? item?.ko_title : item?.en_title}
                    size={{ maxWidth: 400, maxHeight: 300 }}
                    css={{ '&:hover': { boxShadow: '0 5px 20px #999' } }}
                  />
                  <Txt margin={{ top: 10 }} as="strong">
                    {langType === 'ko' ? item?.ko_title : item?.en_title}
                  </Txt>
                  <TxtSpan>{moment(item?.date)}</TxtSpan>
                </Item>
              </SwiperSlide>
            ))}
          </Swiper>
          <Column
            maxWidth={440}
            padding={{ horizontal: 20 }}
            crossAlign="end"
            css={{ [MQ[0]]: { order: 1 } }}
          >
            <Wrap>
              <Txt as="h3" css={Themes('title1')} data-aos="zoom">
                {txt?.title1}
              </Txt>
              <Txt as="h3" css={Themes('title2')} data-aos="zoom" data-aos-delay="100">
                {txt?.title2}
              </Txt>
            </Wrap>

            <Txt
              size={18}
              margin={{ top: 20, bottom: 30 }}
              css={Themes('txt')}
              data-aos="zoom"
              data-aos-delay="200"
            >
              {txt?.subTitle}
            </Txt>

            <Row gap={16} data-aos="zoom" data-aos-delay="200">
              <Tab
                variant="border"
                css={Themes('tab')}
                onClick={() => router.push('/reference/press/list')}
              >
                더보기
              </Tab>

              <Row gap={8}>
                <Tab variant="border" css={Themes('swiperTab')} ref={prevRefs}>
                  <PrevIcon width="22px" />
                </Tab>

                <Tab variant="border" css={Themes('swiperTab')} ref={nextRefs}>
                  <NextIcon width="22px" />
                </Tab>
              </Row>
            </Row>
          </Column>
        </>
      ) : (
        <Wrap align="center" backgroundColor="#f8f8f8" padding={{ all: 100 }}>
          <Column
            maxWidth={440}
            padding={{ horizontal: 20 }}
            align="center"
            css={{ [MQ[0]]: { order: 1 } }}
          >
            <Txt as="h3" css={Themes('title1')} data-aos="zoom">
              {txt?.title1}
            </Txt>
            <Txt as="h3" css={Themes('title2')} data-aos="zoom" data-aos-delay="100">
              {txt?.title2}
            </Txt>

            <Txt
              size={18}
              margin={{ top: 20, bottom: 30 }}
              css={Themes('txt')}
              txtAlign="center"
              data-aos="zoom"
              data-aos-delay="200"
            >
              {txt?.subTitle}
            </Txt>

            <Tab
              data-aos="zoom"
              data-aos-delay="350"
              variant="border"
              maxWidth={260}
              css={Themes('tab')}
              onClick={() => router.push('/reference/press/list')}
            >
              더보기
            </Tab>
          </Column>
        </Wrap>
      )}
    </Row>
  );
}

//styled
const Themes = (txt: 'box' | 'title1' | 'title2' | 'txt' | 'tab' | 'swiperTab'): CSSObject => {
  if (txt === 'box') return { [MQ[1]]: { flexDirection: 'column' } };

  if (txt === 'title1')
    return {
      lineHeight: 1.4,
      color: colors.grey400,
      fontSize: 40,
      [MQ[3]]: { fontSize: fontSize.s30 },
    };

  if (txt === 'title2')
    return { color: colors.keyColor, fontSize: 40, [MQ[3]]: { fontSize: fontSize.s30 } };

  if (txt === 'txt')
    return {
      fontSize: 18,
      color: '#999',
      whiteSpace: 'normal',
      [MQ[3]]: { fontSize: fontSize.s16 },
    };

  if (txt === 'tab')
    return {
      width: '100%',
      minHeight: 50,
      color: colors.keyColor,
      borderRadius: 10,
      padding: '12px 30px',
      border: `1px solid ${colors.keyColor}`,
      fontSize: 15,

      '&:hover': {
        backgroundColor: colors.keyColor,
        color: colors.white,
      },
    };

  if (txt === 'swiperTab')
    return {
      minWidth: 50,
      maxWidth: 50,
      minHeight: 50,
      maxHeight: 50,
      borderRadius: 10,
    };

  return {};
};

const swiperTheme = css`
  width: 100%;
  margin-left: 20px;

  @media (max-width: 1200px) {
    order: 2;
  }

  .swiper-wrapper {
    width: 100% !important;
  }
  .swiper-slide {
    width: 100%;
    max-width: 400px;
    min-width: 400px;

    @media (max-width: 768px) {
      max-width: 320px;
      min-width: 320px;
    }

    @media (max-width: 430px) {
      max-width: 270px;
      min-width: 270px;
    }
  }
`;

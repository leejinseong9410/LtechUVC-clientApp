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
export default function Contents1({ txt, data }: { txt: any; data: any }) {
  const router = useRouter();
  const langType = useRecoilValue(langTypeAtom);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  console.log(data);

  return (
    <Row align="start" gap={100} crossGap={40} css={Themes('box')}>
      {data?.length > 3 ? (
        <>
          <Wrap maxWidth={660} align="end" css={{ [MQ[0]]: { alignItems: 'start' } }}>
            <Column maxWidth={440} padding={{ horizontal: 20 }} crossAlign="end" data-aos="zoom">
              <Txt as="h3" css={Themes('title')}>
                {txt?.title}
              </Txt>

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
                  onClick={() => router.push('/media/youtube')}
                >
                  더보기
                </Tab>

                <Row gap={8}>
                  <Tab variant="border" css={Themes('swiperTab')} ref={prevRef}>
                    <PrevIcon width="22px" />
                  </Tab>

                  <Tab variant="border" css={Themes('swiperTab')} ref={nextRef}>
                    <NextIcon width="22px" />
                  </Tab>
                </Row>
              </Row>
            </Column>
          </Wrap>

          <Swiper
            loop={true}
            freeMode={true}
            slidesPerView={3}
            spaceBetween={30}
            modules={[FreeMode, Pagination, Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
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
                  onClick={() => window.open(`${item.link}`, '_blank')}
                >
                  <Img
                    src={item?.image}
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
        </>
      ) : (
        <Column align="center" gap={50}>
          <Wrap align="center">
            <Column maxWidth={440} padding={{ horizontal: 20 }} align="center">
              <Txt as="h3" css={Themes('title')} data-aos="zoom">
                {txt?.title}
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

              <Row gap={16} crossAlign="center" data-aos="zoom" data-aos-delay="200">
                <Tab
                  maxWidth={200}
                  variant="border"
                  css={Themes('tab')}
                  onClick={() => router.push('/media/youtube')}
                >
                  더보기
                </Tab>

                <Row gap={8} width="auto">
                  <Tab variant="border" css={Themes('swiperTab')} ref={prevRef}>
                    <PrevIcon width="22px" />
                  </Tab>

                  <Tab variant="border" css={Themes('swiperTab')} ref={nextRef}>
                    <NextIcon width="22px" />
                  </Tab>
                </Row>
              </Row>
            </Column>
          </Wrap>

          <Wrap maxWidth={700} padding={{ horizontal: 20 }} data-aos="zoom" data-aos-delay="300">
            <Swiper
              loop={true}
              spaceBetween={20}
              modules={[Pagination, Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              css={{ width: '100%' }}
            >
              {data?.map((item: any) => (
                <SwiperSlide>
                  <Item
                    cursor="pointer"
                    gap={6}
                    key={item?.id}
                    onClick={() => window.open(`${item.link}`, '_blank')}
                  >
                    <Img
                      src={item?.image}
                      alt={langType === 'ko' ? item?.ko_title : item?.en_title}
                      css={{ '&:hover': { boxShadow: '0 5px 20px #999' } }}
                      size={{ maxHeight: 400 }}
                    />
                    <Txt margin={{ top: 10 }} as="strong">
                      {langType === 'ko' ? item?.ko_title : item?.en_title}
                    </Txt>
                    <TxtSpan>{moment(item?.date)}</TxtSpan>
                  </Item>
                </SwiperSlide>
              ))}
            </Swiper>
          </Wrap>
        </Column>
      )}
    </Row>
  );
}

//styled
const Themes = (txt: 'box' | 'title' | 'txt' | 'tab' | 'swiperTab'): CSSObject => {
  if (txt === 'box') return { [MQ[1]]: { flexDirection: 'column' } };

  if (txt === 'title')
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

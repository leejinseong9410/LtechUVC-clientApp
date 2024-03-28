import React, { useState } from 'react';
import { CSSObject, keyframes } from '@emotion/react';

//libs
import {
    BackgroundImgBox,
  BoxShadow,
  Column,
  DragScrollContainer,
  Img,
  LinkHref,
  Padding,
  Row,
  Section,
  Txt,
  TxtSpan,
  Wrap,
} from '@/_ui_libs/_index';
import { MQ, colors, fontSize } from '@/libs/themes/_index';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom, langTypeAtom } from '@/libs/atoms/widgets-atom';

//components
import SEO from '@/seo.config';
import ContentView from '@/libs/components/_custom/ContentView';
import BannerTitle from '@/libs/components/_custom/BannerTitle';

// images
import swipe from 'public/images/swipe-right.png'

//video
import VideoPlayer from 'react-player';

import styled from '@emotion/styled';

export default function SupervisionCamera() {
    const lang = useRecoilValue(langAtom);
    const txt = lang?.슈퍼비전;
    const langType = useRecoilValue(langTypeAtom);

    const [hoverIndex, setHoverIndex] = useState(null);

    const hoverIndexHandler = (index: any) => { 
        setHoverIndex(index);
    }

    const moveUpDown = keyframes`
    0%, 100% { transform: translateY(-4px); }
    50% { transform: translateY(4px); }
  `;

    const AnimatedText = styled.div`
    animation: ${moveUpDown} 2s ease-in-out infinite;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8px;
    position: absolute;
    bottom: 20px;
  `;

    const hoverTxtHandler = (i: number) => { 
        if (i == 0) { 
            return colors.blue
        } else { 
            return colors.blue
        }
    }

    return ( 
        <>
        <SEO title={txt?.banner?.title} description={txt?.banner?.subTitle} />
        <Section>
            <BannerTitle
            txtColor="black"
            image={txt?.banner?.bannerImg}
            title={txt?.banner?.title}
            subTitle={txt?.banner?.subTitle}
            />
            <ContentView
            title={txt?.title}
            subTitle={txt?.text}
            title_maxWidth={1240}
            title_padding={{ horizontal: 20 }}
            >
                <Column gap={160} align='center' css={{ [MQ[2]]: { rowGap: 90} }}>
                    <Wrap
                    maxWidth={1240}
                    padding={{ horizontal: 50, vertical: 0}}
                    margin={{ top: 100 }}
                    css={{ [MQ[2]]: { marginTop: 40 }}}
                    >
                         <Padding
                          data-aos="zoom"
                           data-aos-delay="300"
                           all={10}
                           backgroundColor={colors.grey100}
                            border={{ solid: 1, position: "top", color: colors.grey200,}}
                            borderRadius={15}
                            css={{ [MQ[2]]: { padding: 0 } }}
                            align='center'
                          >
                                <Img
                                 src={txt?.header[0].titleImg}
                                 alt={txt?.title}
                                 size={{ maxHeight: 400 }}
                                 objectFit="cover"
                                 borderRadius={10}
                                />
                                     <Txt size={14} padding={{horizontal: 25, vertical: 15}} css={contentsInfoTheme('info_row_wrap')} txtAlign='center'>
                                        {txt?.header[0].title }
                                         </Txt>
                            </Padding>
                     </Wrap>
                     <Wrap css={contentsInfoTheme('content_wrap')} align='center'>
                        <Column maxWidth={1240}>
                        <Txt
                        as='h5'
                        size={38}
                        padding={{ horizontal: 20}}
                        css={{ [MQ[3]]: { fontSize: fontSize.s24 }}}
                        data-aos="zoom"
                        >
                            {txt?.contentsTitle}
                        </Txt>
                        <DragScrollContainer
                        gap={40}
                        css={{ padding: '40px 20px', [MQ[3]]: { columnGap: 30 } }}
                        >
                            {txt?.contents?.map(( item: any, i: number ) => (
                                <BoxShadow
                                key={item?.title}
                                minWidth={280}
                                boxShadow={{ x:0, y:2, blur: 32, color: "#e2e2e2"}}
                                data-aos="zoom-out"
                                >
                                    <Img src={item?.img} alt={item?.title} borderRadius="18px 18px 0 0"/>

                                    <Row align='center' height='100%' gap={16} padding={{ all: 20}}>
                                        <TxtSpan size={34} weight='bold' color='#C9D2E2'>
                                            0{i + 1}
                                        </TxtSpan>

                                        <Column gap={5}>
                                            <Txt size={18} color={colors.black100} weight='medium'>
                                                {item?.title}
                                            </Txt>
                                        </Column>
                                    </Row>
                                </BoxShadow>
                           ))}
                        </DragScrollContainer>
                        <Column align='center' gap={10} data-aos="zoom" margin={{ top: 120}}>
                            <AnimatedText>
                                <Img src={swipe} alt="swipe" size={{ maxWidth: 50 }} objectFit='contain'/>
                                <TxtSpan>{langType === 'ko' ? "옆으로 스크롤해서 살펴보기" : "Scroll Sideways to Take a Look"}</TxtSpan>
                            </AnimatedText>
                        </Column>
                        </Column>
                     </Wrap>

                     <Wrap maxWidth={1240}>
                        <Txt
                         as='h1'
                         size={38}
                         padding={{ horizontal: 20}}
                         css={{ [MQ[3]]: { fontSize: fontSize.s24 }}}
                         data-aos="zoom"
                          >
                          {txt?.videoTitle}
                     </Txt>
                     </Wrap>

                     <Column css={contentsInfoTheme('content_wrap')}>
                        {txt?.videoContents.map(( item: any, i: number) => ( 
                         <Wrap align='center'>
                            <Row
                            maxHeight={500} 
                            maxWidth={1240} 
                            gap={20} crossGap={0} 
                            crossAlign='space-between'
                            align='center'
                            css={{ [MQ[2]]: { flexDirection: "column" }}}>
                                <VideoPlayer 
                                url={item.src}
                                controls={true}
                                pip={false}
                                light={false}
                                width="100%"
                                />
                                <source src={item.src} type='video/mp4'/>
                                <Txt
                                 as='h6'
                                 size={24}
                                 padding={{ horizontal: 20}}
                                 css={{ [MQ[3]]: { fontSize: fontSize.s16 }}}
                                 data-aos="zoom"
                                >
                                {item.descrition}
                                </Txt>
                            </Row>
                         </Wrap>
                        ))}
                     </Column>
                     <Column maxWidth={1240} gap={30}>
                        <Column gap={5}>
                         <Txt
                             as='h5'
                             size={38}
                             padding={{ horizontal: 20 }}
                             css={{ [MQ[3]]: { fontSize: fontSize.s24 }}}
                             data-aos="zoom"
                          >
                            {txt?.productsTitle}
                        </Txt>
                        <TxtSpan
                               size={18}
                               padding={{ horizontal: 20 }}
                               css={{ [MQ[3]]: { fontSize: fontSize.s12 }}}
                               data-aos="zoom"
                        >
                            {txt?.productsSubtitle}
                        </TxtSpan>
                        </Column>
                        <Row
                        gap={50}
                        crossGap={50}
                        maxWidth={1240}
                        align='start'
                        crossAlign='center'
                        css={{ [MQ[2]]: { flexDirection: "column"}}}
                        >
                            {txt?.products.map(( item: any, i: number) => ( 
                                <Wrap
                                css={{ cursor: "pointer"}}
                                key={i}
                                gap={12}
                                align='center'
                                crossAlign='center'
                                data-aos='zoom-up'
                                adta-aos-delay= "300"
                                onMouseEnter={() => hoverIndexHandler(i)}
                                onClick={() => hoverIndexHandler(i)}
                                >
                                    <Img 
                                    src={item?.img} 
                                    alt={item?.name}
                                    objectFit='contain'
                                    size={{ maxWidth: 180, minWidth: 180, maxHeight: "100%", minHeight: 180}}
                                    />
                                    <Txt 
                                    as='h6' 
                                    size={24} 
                                    color={ hoverIndex == i ? colors.blue : colors.black300 } 
                                    txtAlign='center'
                                    css={{ [MQ[2]]: { fontSize: fontSize.s18}}}
                                    >
                                        {item?.name}
                                    </Txt>
                                </Wrap>
                            ))}
                        </Row>
                        <Img 
                        src={(hoverIndex == 0 ? txt?.productDetail1 : txt?.productDetail2 )} 
                        alt="productImg" 
                        objectFit='contain'/>
                     </Column>

                     <Row
                     maxWidth={1240}
                     align='center'
                     crossAlign='center'
                     gap={10}
                     crossGap={6}
                     data-aos='zoom-up'
                     adta-aos-delay= "100"
                     >
                    <Txt 
                    as='h6' 
                    size={20}
                    css={{ [MQ[3]]: { fontSize: fontSize.s15 }}}
                    >
                        {langType === 'ko' ? "더많은 정보는" : "More Infomation"} 👉🏻 </Txt>
                     <LinkHref a="https://ltechkorea.co.kr/theme/business/html/solution/03.php" txtSize={20} colors={{ txt: '#aaa' }} css={{ [MQ[3]]: {fontSize: fontSize.s15}}}>
                        {langType === "ko" ? "눌러서 확인하기" : "Tap to confirm"}
                    </LinkHref>
                     </Row>
                </Column>
            </ContentView>
        </Section>
        </>
    )
}

/// themes
const contentsInfoTheme = (
    txt: 'content_wrap' | 'info_row_wrap' | 'infoTxt' | 'title' | 'txt' | 'img',
    i?: number,
  ): CSSObject => {
    if (txt === 'content_wrap')
      return {
        rowGap: 120,
        padding: '120px 20px',
        backgroundColor: colors.ground100,
        alignItems: 'center',
        [MQ[1]]: { rowGap: 60, padding: '70px 20px' },
      };
  
    if (txt === 'info_row_wrap')
      return {
        maxWidth: 900,
        justifyContent: 'space-between',
        rowGap: 24,
        columnGap: 24,
        [MQ[1]]: { flexDirection: 'column' },
      };
  
    if (txt === 'infoTxt')
      return {
        rowGap: 20,
        maxWidth: 380,
        order: i === 0 || i === 2 || i === 4 ? 1 : 2,
        [MQ[1]]: { order: 2 },
        [MQ[3]]: { rowGap: 12 },
      };
  
    if (txt === 'title') return { [MQ[3]]: { fontSize: 24 } };
  
    if (txt === 'txt') return { color: colors.grey700, [MQ[3]]: { fontSize: 15 } };
  
    if (txt === 'img')
      return {
        maxWidth: 360,
        maxHeight: 360,
        order: i === 0 || i === 2 || i === 4 ? 2 : 1,
        [MQ[1]]: { maxWidth: '100%', order: 1 },
      };
  
    return {};
  };
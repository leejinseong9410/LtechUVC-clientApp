import React from 'react';
import { css } from '@emotion/react';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom } from '@/libs/atoms/widgets-atom';

//libs
import { Column, Container, Item, Items, Padding, Row, Section, Txt, TxtSpan, Wrap } from '@/_ui_libs/_index';
import { ContainerTheme, MQ, colors, fontSize } from '@/libs/themes/_index';

//components
import SEO from '@/seo.config';
import BannerTitle from '@/libs/components/_custom/BannerTitle';

export default function Privacy() {
    const lang = useRecoilValue(langAtom);
    const txt = lang?.개인정보처리;

    const row_key = ["서비스", "상세", "필수/선택", "처리 목적", "보유 및 이용 기간"];
    const row_value = ["대표 홈페이지", "Contact US", "이름, 이메일, 제목, 문의 내용", "본인확인, 사용자 문의 처리", "이용목적 달성 시 파기"];

    return(
        <>
        <SEO title={txt?.banner?.title} description={txt?.banner?.subTitle} />
        <BannerTitle 
        txtColor="black" 
        image={txt?.banner?.bannerImg}
        title={txt?.banner?.title}
        subTitle={txt?.banner?.subTitle} />

        <Column gap={50} align='center' css={{ [MQ[2]]: { rowGap: 40}}} maxWidth={1000} padding={{ top:100, left: 40, right: 40, bottom: 100 }}>
            <Txt size={16} weight='medium' color={colors.grey700} css={{ [MQ[2]]: { rowGap: 20}}}>{txt?.rowValue}</Txt>
            <Container align='center' border={{ solid: 1, position: "top", color: colors.grey200}}>
                <Txt margin={{ top: 40}} size={22} weight='bold' color={colors.black300}>개인정보의 처리 목적</Txt>
                <Items 
                    margin={{ top: 50, bottom: 50 }}
                    direction='horizontal' 
                    wrap='wrap' gap={30} 
                    crossGap={40} 
                    css={{ [MQ[1]]: { columnGap: 16, rowGap: 30 } }}>
                        {row_key.map((item, index) => { 
                            return (
                                <Container align='center'>
                                 <Row crossAlign='space-between' css={{ [MQ[3]]: { flexDirection: 'column', alignItems: 'center', rowGap: 10} }} maxWidth={"50%"}>
                                    <Txt size={18} weight='bold' color={colors.grey500}>[{item}]</Txt>
                                    <TxtSpan color={ colors.black100} size={18} weight='normal'>{row_value[index]}</TxtSpan>
                                </Row>
                                </Container>
                            )
                        })}
                    </Items>
            </Container>
        </Column>
        </>
    )
}
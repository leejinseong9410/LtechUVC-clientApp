//libs
import { Column, Container, Img, Item, Items, Section, Txt, TxtSpan } from '@/_ui_libs/_index';
import { MQ, colors, fontSize } from '@/libs/themes/_index';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom, langTypeAtom } from '@/libs/atoms/widgets-atom';

//utils
import { moment } from '@/libs/utils/moment';

//hooks
import { youtubeQuery } from '@/_https/query/youtubeQuery';

//components
import SEO from '@/seo.config';
import FixedContents from '@/libs/components/_custom/FixedContents';
import LoadingSkeleton from '@/libs/components/_custom/LoadingSkeleton';

//
export default function Gallery() {
  const queryData = youtubeQuery();
  const { isLoading, data, refs } = queryData;

  const langType = useRecoilValue(langTypeAtom);
  const isLang = useRecoilValue(langAtom);
  const txt = isLang?.콘텐츠?.유튜브;

  const nearData = data?.pages[0]?.nearYoutube[0];

  if (isLoading) {
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
          padding={{ top: 80, bottom: 100 }}
          css={{ [MQ[3]]: { padding: '40px 0 60px' } }}
        >
          <Column gap={16} padding={{ horizontal: 20 }}>
            <Txt as="h1" size={40} css={{ [MQ[3]]: { fontSize: fontSize.s28 } }}>
              {txt?.title}
            </Txt>

            <Txt
              size={18}
              color={colors.grey700}
              css={{ [MQ[3]]: { fontSize: fontSize.s15, whiteSpace: 'normal' } }}
            >
              {txt?.subTitle}
            </Txt>
          </Column>

          {/* 고정 콘텐츠 */}
          <FixedContents
            onClick={() => window.open(`${nearData.link}`, '_blank')}
            img={nearData?.image}
            title={langType === 'ko' ? nearData?.ko_title : nearData?.en_title}
            subTitle={`🎥 ${txt?.near}`}
            date={moment(nearData?.date)}
            context={langType === 'ko' ? nearData?.ko_context : nearData?.en_context}
          />

          {/* 리스트 */}
          <Items
            direction="horizontal"
            wrap="wrap"
            gap={30}
            crossGap={40}
            padding={{ top: 50, horizontal: 20 }}
            css={{ [MQ[1]]: { columnGap: 16, rowGap: 24 }, [MQ[3]]: { paddingTop: 30 } }}
          >
            {data?.pages?.map((page) => {
              return page?.results?.map((item: any) => {
                return (
                  <Item
                    key={item?.id}
                    cursor="pointer"
                    onClick={() => window.open(`${item?.link}`, '_blank')}
                    gap={14}
                    css={{
                      flex: '0 0 calc(33.333% - 20px)',
                      [MQ[1]]: { flex: '0 0 calc(50% - 8px)' },
                    }}
                  >
                    <Img
                      src={item?.image}
                      alt={langType === 'ko' ? item?.ko_title : item?.en_title}
                      screenRatio={{ x: 4, y: 3 }}
                      css={{ '&:hover': { boxShadow: '0 5px 20px rgba(0,0,0,0.22)' } }}
                    />

                    <Column gap={6}>
                      <Txt
                        as="strong"
                        size={15}
                        ellipsis={{ ellipsis: true, line: 1 }}
                        padding={{ right: 20 }}
                      >
                        {langType === 'ko' ? item?.ko_title : item?.en_title}
                      </Txt>

                      <Txt
                        size={14}
                        lineHeight={1.4}
                        color={colors.grey700}
                        ellipsis={{ ellipsis: true, line: 2 }}
                      >
                        {langType === 'ko' ? item?.ko_context : item?.en_context}
                      </Txt>

                      <TxtSpan size={12} color={colors.grey500} margin={{ top: 4 }}>
                        {moment(item?.date)}
                      </TxtSpan>
                    </Column>
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

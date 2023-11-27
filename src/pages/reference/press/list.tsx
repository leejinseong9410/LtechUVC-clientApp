import { useRouter } from 'next/router';

//libs
import { Column, Container, Img, Item, Items, Section, Txt, TxtSpan } from '@/_ui_libs/_index';
import { MQ, colors, fontSize } from '@/libs/themes/_index';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom, langTypeAtom } from '@/libs/atoms/widgets-atom';

//components
import SEO from '@/seo.config';
import FixedContents from '@/libs/components/_custom/FixedContents';
import LoadingSkeleton from '@/libs/components/_custom/LoadingSkeleton';

//utils
import { moment } from '@/libs/utils/moment';

//hooks
import { pressQuery } from '@/_https/query/pressQuery';

//
export default function List() {
  const router = useRouter();

  const queryData = pressQuery();
  const { isLoading, data, refs } = queryData;

  const nearData = data?.pages[0]?.nearPress[0];

  const isLang = useRecoilValue(langAtom);
  const langType = useRecoilValue(langTypeAtom);

  const txt = isLang?.콘텐츠?.보도자료;

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
            onClick={() => router.push(`/reference/press/${nearData?.id}`)}
            img={nearData?.images[0]}
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
                    onClick={() => router.push(`/reference/press/${item?.id}`)}
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

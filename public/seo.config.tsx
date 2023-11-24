import { NextSeo, NextSeoProps } from 'next-seo';

interface SEOProps extends NextSeoProps {
  title?: string;
  description?: string;
  image?: string | any;
}

function SEO({ title, description, image }: SEOProps) {
  return (
    <NextSeo
      title={title ? `${title} | 엘텍유브이씨, LTechUVC` : '엘텍유브이씨, LTechUVC'} // 50~60자 이하
      description={
        description
          ? description
          : 'LTechUVC는 그린 암모니아, 그린 수소, 연료전지 사업 등 탄소중립을 선도하는 친환경 에너지 기업입니다'
      } // 50~160자 이하
      canonical="https://www.ltk-uvc.com"
      openGraph={{
        type: 'website',
        locale: 'ko_KR',
        url: 'https://www.ltk-uvc.com',
        title: title ? `${title} | 엘텍유브이씨, LTechUVC` : '엘텍유브이씨, LTechUVC',
        description: description
          ? description
          : 'LTechUVC는 그린 암모니아, 그린 수소, 연료전지 사업 등 탄소중립을 선도하는 친환경 에너지 기업입니다',
        site_name: '엘텍유브이씨, LTechUVC',
        images: [
          {
            url: image
              ? image
              : 'https://res.cloudinary.com/dp0gh7jel/image/upload/v1700796847/iPhone_14_Pro_1_kax2ix.png',
            alt: 'LTechUVC는 그린 암모니아, 그린 수소, 연료전지 사업 등 탄소중립을 선도하는 친환경 에너지 기업입니다',
          },
        ], // 16:9 , 1200px 이하
      }}
      twitter={{
        cardType: 'summary_large_image', //4096x4096 이하 2:1
        handle: '엘텍유브이씨, LTechUVC',
        site: 'https://www.ltk-uvc.com',
      }}
    />
  );
}

export default SEO;

import React, { useState } from 'react';

// Import video files
import firstVideo from '/public/videos/first.mp4';
import secondVideo from '/public/videos/second.mp4';

// libs
import { Column, Row, Txt, TxtSpan, Wrap } from '@/_ui_libs/_index';
import { MQ, colors, fontSize } from '@/libs/themes/_index';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom } from '@/libs/atoms/widgets-atom';
import { MouseIcon } from '@/libs/assets/icons';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export default function Banner() {
  const lang = useRecoilValue(langAtom);
  const [activeVideo, setActiveVideo] = useState(0);
  const videos = [
    'https://res.cloudinary.com/dp0gh7jel/video/upload/v1700550433/89b863b8-bc34-4269-ad4c-09e81e2f5661_ctniyo.mp4',
    'https://res.cloudinary.com/dp0gh7jel/video/upload/v1700550442/second_gwp06b.mp4',
  ];

  const switchVideo = () => {
    setActiveVideo(activeVideo === 0 ? 1 : 0);
  };

  const moveUpDown = keyframes`
  0%, 100% { transform: translateY(-4px); }
  50% { transform: translateY(4px); }
`;

  // Create a styled component with the animation
  const AnimatedText = styled.div`
    animation: ${moveUpDown} 2s ease-in-out infinite;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8px;
    position: absolute;
    bottom: 20px;
  `;

  return (
    <Wrap width="100%" height="100%" minHeight="100vh">
      <video
        css={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit: 'cover',
        }}
        key={activeVideo}
        src={videos[activeVideo]}
        autoPlay
        muted
        playsInline
        onEnded={switchVideo}
      />

      <Column
        width="100%"
        height="100%"
        minHeight="100vh"
        align="center"
        crossAlign="center"
        backgroundColor="rgba(0,0,0,0.6)"
        zIndex={50}
      >
        <Column maxWidth={1400} gap={20} padding={{ all: 20 }}>
          <Txt as="h1" color={colors.white} css={{ [MQ[3]]: { fontSize: fontSize.s34 } }}>
            {lang?.home?.banner?.title}
          </Txt>

          <Txt
            size={18}
            color={colors.grey200}
            css={{ [MQ[3]]: { fontSize: fontSize.s15, whiteSpace: 'normal' } }}
          >
            {lang?.home?.banner?.subTitle}
          </Txt>

          <Row gap={8} align="center" margin={{ top: 10 }}>
            {videos.map((_, index) => (
              <div
                key={index}
                onClick={() => setActiveVideo(index)}
                css={{
                  cursor: 'pointer',
                  width: '40px',
                  height: '10px',
                  backgroundColor: colors.white,
                  opacity: activeVideo === index ? 1 : 0.4,
                  borderRadius: 100,

                  [MQ[3]]: { width: '30px' },
                }}
              />
            ))}
          </Row>
        </Column>

        <AnimatedText>
          <TxtSpan size={12} color="#eee">
            Scroll Down
          </TxtSpan>
          <MouseIcon width="15px" />
        </AnimatedText>
      </Column>
    </Wrap>
  );
}

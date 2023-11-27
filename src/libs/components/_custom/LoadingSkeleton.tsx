import React from 'react';
import { Row, Skeleton } from '@/_ui_libs/_index';
import { MQ } from '@/libs/themes/media';

export default function LoadingSkeleton() {
  return (
    <Row
      direction="horizontal"
      wrap="wrap"
      gap={30}
      crossGap={40}
      css={{ [MQ[1]]: { columnGap: 16, rowGap: 30 } }}
    >
      {Array(12)
        .fill(0)
        .map((_, i) => (
          <Skeleton
            key={i}
            minHeight={200}
            borderRadius={14}
            css={{ flex: '0 0 calc(33.333% - 20px)', [MQ[1]]: { flex: '0 0 calc(50% - 8px)' } }}
          />
        ))}
      =
    </Row>
  );
}

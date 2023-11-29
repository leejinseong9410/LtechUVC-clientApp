import type { AppProps } from 'next/app';
import { useState } from 'react';

//hooks
import { RecoilRoot } from 'recoil';
import { dehydrate, Hydrate, QueryClient, QueryClientProvider } from 'react-query';

//style
import '@/styles/globals.css';
import '@/styles/pagination.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

//components
import AppLayout from '@/libs/core/App';

//
export default function MyApp({ Component, pageProps }: AppProps) {
  const [client] = useState(() => new QueryClient());
  const dehydratedState = dehydrate(client);

  return (
    <QueryClientProvider client={client}>
      <Hydrate state={dehydratedState}>
        <RecoilRoot>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

import '@/styles/globalStyles.css';
import type { AppProps } from 'next/app';
import { TenantProvider } from '@/tenants/tenantContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TenantProvider>
      <Component {...pageProps} />
    </TenantProvider>
  );
}

export default MyApp;

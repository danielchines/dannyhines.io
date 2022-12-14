import * as React from 'react';

import { PreloadProvider } from '@/lib/PreloadContext';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <PreloadProvider>{children}</PreloadProvider>
      <Footer />
    </>
  );
}

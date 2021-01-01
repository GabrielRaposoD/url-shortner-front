import { NextSeo } from 'next-seo';
import { Footer, ShortenerCard } from '@components/index';

const Index: React.FC<any> = () => {
  return (
    <>
      <NextSeo title='Shortener' description="Um simples encurtador de URL's" />
      <div
        className='min-w-screen flex flex-col items-center justify-center max-h-screen min-h-screen overflow-hidden bg-gray-900'
        style={{
          backgroundImage: 'url(bg.png)',
        }}
      >
        <ShortenerCard />
        <Footer />
      </div>
    </>
  );
};

export default Index;

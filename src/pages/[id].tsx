import { useEffect } from 'react';

export async function getStaticProps(context) {
  const id = context.params.id;
  const shortened = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `shortener/${id}`
  ).then((r) => r.json());
  return {
    props: {
      shortened: shortened,
    },
  };
}

export async function getStaticPaths() {
  const sites = await fetch(process.env.NEXT_PUBLIC_API_URL + 'shortener/').then((r) =>
    r.json()
  );
  const paths = sites.map((site) => ({
    params: {
      id: site.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default function SiteFeedback({ shortened }) {
  useEffect(() => {
    window.location.replace(shortened.url);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen text-4xl font-bold text-black'>
      Redirecting...
    </div>
  );
}

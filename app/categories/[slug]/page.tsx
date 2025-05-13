// my-digital-notebook/app/posts/[slug]/page.tsx

import { Metadata } from 'next';

interface PostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return [
    { slug: 'post-1' },
    { slug: 'post-2' },
    { slug: 'post-3' },
  ];
}

export const metadata: Metadata = {
  title: 'Post',
};

export default function PostPage({ params }: PostPageProps) {
  const { slug } = params;

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">تدوينة: {slug}</h1>
        <p className="text-gray-600">
          هنا سيتم عرض محتوى التدوينة "{slug}".
        </p>
      </main>
    </>
  );
}

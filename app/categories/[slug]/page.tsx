// my-digital-notebook/app/categories/[slug]/page.tsx

import { Metadata } from 'next';

interface CategoryPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return [
    { slug: 'ai' },
    { slug: 'e-learning' },
    { slug: 'business' },
    { slug: 'humanities' },
    { slug: 'misc' },
  ];
}

export const metadata: Metadata = {
  title: 'Category',
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">تصنيف: {slug}</h1>
        <p className="text-gray-600">
          هنا سيتم عرض المقالات المتعلقة بتصنيف "{slug}".
        </p>
      </main>
    </>
  );
}

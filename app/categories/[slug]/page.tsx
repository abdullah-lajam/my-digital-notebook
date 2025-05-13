// app/categories/[slug]/page.tsx
import { Metadata } from 'next';
import { getAllCategorySlugs } from '@/lib/content';

interface CategoryPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export const metadata: Metadata = { title: 'Category' };

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">تصنيف: {slug}</h1>
      {/* لاحقاً استورد وسْرد مقالات التصنيف */}
    </main>
  );
}

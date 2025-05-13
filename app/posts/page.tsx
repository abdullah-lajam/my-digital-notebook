// app/posts/[slug]/page.tsx
import { Metadata } from 'next';
import { getAllPostSlugs } from '@/lib/content';

interface PostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export const metadata: Metadata = { title: 'Post' };

export default function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">تدوينة: {slug}</h1>
      {/* هنا ضَع منطق جلب وعرض محتوى Markdown لاحقاً */}
    </main>
  );
}

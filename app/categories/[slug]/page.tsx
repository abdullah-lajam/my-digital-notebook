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
    <main className="container mx-auto px-

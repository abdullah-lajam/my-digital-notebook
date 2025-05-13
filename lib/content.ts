// lib/content.ts
import fs from 'fs';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'content');

export function getAllPostSlugs(): string[] {
  const walk = (dir: string): string[] =>
    fs.readdirSync(dir).flatMap((file) => {
      const filePath = path.join(dir, file);
      return fs.statSync(filePath).isDirectory()
        ? walk(filePath)
        : file.endsWith('.md') || file.endsWith('.mdx')
        ? [file.replace(/\.mdx?$/, '')]
        : [];
    });

  return walk(POSTS_DIR);
}

export function getAllCategorySlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}


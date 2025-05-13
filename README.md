# مدونتي الرقمية - دليل المستخدم

هذا المشروع عبارة عن مدونة شخصية مبنية باستخدام Next.js ويمكن نشرها على GitHub Pages. يتميز المشروع بدعم اللغة العربية (RTL)، الوضع الليلي/النهاري، نظام التصنيفات (Tags)، وأداة بحث داخلية.

## المميزات

- تصميم متجاوب (Responsive) يعمل على جميع الأجهزة
- دعم كامل للغة العربية (RTL)
- وضع ليلي/نهاري
- نظام تصنيفات (Tags) للتدوينات
- أداة بحث داخلية
- صفحات للأقسام المختلفة
- نموذج اتصال
- SEO محسّن

## البدء باستخدام المدونة

### المتطلبات الأساسية

- Node.js (الإصدار 18 أو أحدث)
- حساب GitHub

### التثبيت

1. انسخ هذا المستودع (Fork) إلى حسابك على GitHub
2. قم بتنزيل المستودع إلى جهازك المحلي:

\`\`\`bash
git clone https://github.com/YOUR_USERNAME/my-digital-notebook.git
cd my-digital-notebook
\`\`\`

3. قم بتثبيت الاعتمادات:

\`\`\`bash
npm install
\`\`\`

4. قم بتشغيل الخادم المحلي:

\`\`\`bash
npm run dev
\`\`\`

5. افتح المتصفح على العنوان: `http://localhost:3000`

## إضافة محتوى جديد

### إضافة تدوينة جديدة

لإضافة تدوينة جديدة، قم بإنشاء ملف Markdown جديد في المجلد المناسب حسب القسم:

- `/content/ai/` للذكاء الاصطناعي
- `/content/e-learning/` للتعليم الإلكتروني
- `/content/business/` لإدارة الأعمال
- `/content/humanities/` للإنسانيات
- `/content/misc/` للتدوينات المتفرقة

يجب أن يحتوي كل ملف Markdown على معلومات وصفية (Frontmatter) في بداية الملف:

\`\`\`markdown
---
title: "عنوان التدوينة"
date: "2023-12-31"
excerpt: "وصف مختصر للتدوينة"
coverImage: "/images/cover.jpg"
tags: ["تاج1", "تاج2", "تاج3"]
---

محتوى التدوينة هنا...
\`\`\`

### إضافة صور

1. ضع الصور في مجلد `/public/images/`
2. يمكنك الإشارة إلى الصور في التدوينات باستخدام المسار النسبي:

\`\`\`markdown
![وصف الصورة](/images/اسم-الصورة.jpg)
\`\`\`

## تخصيص المدونة

### تغيير المعلومات الشخصية

قم بتعديل الملفات التالية لتخصيص معلوماتك الشخصية:

- `app/layout.tsx`: لتغيير عنوان الموقع والوصف
- `components/footer.tsx`: لتغيير روابط التواصل الاجتماعي
- `app/about/page.tsx`: لتحديث صفحة "حول"

### تخصيص التصميم

يمكنك تخصيص ألوان وتصميم المدونة من خلال:

- `app/globals.css`: لتعديل الألوان الأساسية
- `tailwind.config.ts`: لتخصيص إعدادات Tailwind CSS

## النشر على GitHub Pages

1. قم بتعديل ملف `next.config.mjs` وتأكد من تعيين `basePath` إلى اسم المستودع الخاص بك:

\`\`\`javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/my-digital-notebook',
};
\`\`\`

2. قم بإنشاء ملف `.github/workflows/deploy.yml` لإعداد GitHub Actions:

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out
          branch: gh-pages
\`\`\`

3. قم بدفع التغييرات إلى GitHub:

\`\`\`bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push
\`\`\`

4. في إعدادات المستودع على GitHub، قم بتفعيل GitHub Pages واختر فرع `gh-pages` كمصدر.

## المساهمة

نرحب بالمساهمات! يرجى إنشاء fork للمستودع وإرسال طلب سحب (Pull Request) مع تغييراتك.

## الترخيص

هذا المشروع مرخص تحت رخصة MIT.

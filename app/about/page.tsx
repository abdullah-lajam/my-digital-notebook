import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export const metadata = {
  title: "حول - مدونتي الرقمية",
  description: "تعرف على صاحب المدونة وخلفيته",
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">حول المدونة</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1 flex justify-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            <Image src="/placeholder.svg?height=200&width=200" alt="صورة شخصية" fill className="object-cover" />
          </div>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">مرحباً، أنا عبدالله</h2>
          <p className="text-lg mb-4">
            مهتم بالتقنية والتعليم وإدارة الأعمال. أشارك في هذه المدونة تجاربي وأفكاري في مجالات متنوعة.
          </p>
          <p className="text-lg mb-4">
            أعمل في مجال تقنية المعلومات منذ أكثر من 10 سنوات، وأهتم بشكل خاص بالذكاء الاصطناعي وتطبيقاته في التعليم
            والأعمال.
          </p>
          <p className="text-lg">
            هدفي من هذه المدونة هو مشاركة المعرفة والخبرات مع المهتمين، وتوثيق رحلتي المهنية والشخصية.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">ماذا ستجد في هذه المدونة؟</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>الذكاء الاصطناعي 🤖</CardTitle>
          </CardHeader>
          <CardContent>
            <p>تدوينات حول أحدث تقنيات الذكاء الاصطناعي، تطبيقاتها، وتأثيرها على مختلف المجالات.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>التعليم الإلكتروني 🎓</CardTitle>
          </CardHeader>
          <CardContent>
            <p>تجارب وأفكار حول التعليم عن بعد، المنصات التعليمية، وأساليب التعلم الحديثة.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>إدارة الأعمال 💼</CardTitle>
          </CardHeader>
          <CardContent>
            <p>استراتيجيات وأدوات لإدارة المشاريع، تطوير الأعمال، والقيادة الفعالة.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>إنسانيات 🧠</CardTitle>
          </CardHeader>
          <CardContent>
            <p>تأملات في الحياة، التطوير الذاتي، والعلاقات الإنسانية.</p>
          </CardContent>
        </Card>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h2>مسيرتي المهنية</h2>
        <p>
          بدأت مسيرتي المهنية في مجال تطوير البرمجيات، ثم انتقلت للعمل في مجال التعليم التقني. عملت مع العديد من
          المؤسسات التعليمية والشركات التقنية، وساهمت في تطوير حلول تقنية مبتكرة.
        </p>

        <h2>اهتماماتي البحثية</h2>
        <p>
          أهتم بالبحث في مجالات الذكاء الاصطناعي التوليدي، تعلم الآلة، وتطبيقاتها في التعليم. كما أهتم بدراسة تأثير
          التقنية على المجتمع والاقتصاد.
        </p>

        <h2>التواصل</h2>
        <p>
          أرحب بالتواصل والنقاش حول المواضيع المطروحة في المدونة. يمكنك التواصل معي عبر صفحة الاتصال أو عبر منصات
          التواصل الاجتماعي.
        </p>
      </div>
    </div>
  )
}

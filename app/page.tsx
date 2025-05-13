import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getAllPosts } from "@/lib/posts"

export default function Home() {
  // في الواقع، ستأتي هذه البيانات من ملفات Markdown
  const latestPosts = getAllPosts().slice(0, 3)

  const categories = [
    { name: "الذكاء الاصطناعي", slug: "ai", icon: "🤖" },
    { name: "التعليم الإلكتروني", slug: "e-learning", icon: "🎓" },
    { name: "إدارة الأعمال", slug: "business", icon: "💼" },
    { name: "إنسانيات", slug: "humanities", icon: "🧠" },
    { name: "تدوينات متفرقة", slug: "misc", icon: "📝" },
  ]

  return (
    <div className="space-y-12">
      {/* قسم الترحيب */}
      <section className="py-12 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">مرحباً بك في مدونتي الرقمية</h1>
          <p className="text-xl text-muted-foreground mb-8">
            مساحة شخصية لمشاركة أفكاري وتجاربي في مجالات متنوعة من التقنية والتعليم والإدارة
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/about">تعرف علي</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">تواصل معي</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* الأقسام الرئيسية */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">استكشف الأقسام</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.slug} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">{category.icon}</span>
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" asChild className="w-full">
                  <Link href={`/categories/${category.slug}`} className="flex items-center justify-between w-full">
                    <span>استكشف القسم</span>
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* أحدث التدوينات */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">أحدث التدوينات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Card key={post.slug} className="hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src={post.coverImage || "/placeholder.svg?height=200&width=400"}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="w-full">
                  <Link href={`/posts/${post.slug}`} className="flex items-center justify-between w-full">
                    <span>قراءة المزيد</span>
                    <BookOpen className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/posts">جميع التدوينات</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getCategoryPosts, getCategoryInfo } from "@/lib/posts"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = getCategoryInfo(params.slug)

  if (!category) {
    return {
      title: "القسم غير موجود",
      description: "لم يتم العثور على القسم المطلوب",
    }
  }

  return {
    title: `${category.name} - مدونتي الرقمية`,
    description: category.description,
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params
  const category = getCategoryInfo(slug)

  if (!category) {
    notFound()
  }

  const posts = getCategoryPosts(slug)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
        <p className="text-xl text-muted-foreground">{category.description}</p>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {posts.map((post) => (
            <Card key={post.slug} className="flex flex-col md:flex-row overflow-hidden">
              <div className="relative h-48 md:h-auto md:w-1/3">
                <Image
                  src={post.coverImage || "/placeholder.svg?height=200&width=300"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col">
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
                <CardFooter className="mt-auto">
                  <Button variant="ghost" asChild className="w-full md:w-auto">
                    <Link href={`/posts/${post.slug}`} className="flex items-center gap-2">
                      <span>قراءة المزيد</span>
                      <BookOpen className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl mb-4">لا توجد تدوينات في هذا القسم حالياً</p>
          <Button asChild>
            <Link href="/">العودة للصفحة الرئيسية</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

import { notFound } from "next/navigation"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Tag, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getPostBySlug, getRelatedPosts } from "@/lib/posts"

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "التدوينة غير موجودة",
      description: "لم يتم العثور على التدوينة المطلوبة",
    }
  }

  return {
    title: `${post.title} - مدونتي الرقمية`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
  }
}

export default function PostPage({ params }: PostPageProps) {
  const { slug } = params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug)

  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <Link href={`/categories/${post.category}`} className="hover:text-primary transition-colors">
            {post.categoryName}
          </Link>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{post.date}</time>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              <Tag className="h-3 w-3 ml-1" />
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {post.coverImage && (
        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>
      )}

      <div
        className="prose prose-lg max-w-none dark:prose-invert mb-12"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="border-t pt-8 mt-8">
        <h2 className="text-2xl font-bold mb-6">تدوينات ذات صلة</h2>

        {relatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/posts/${relatedPost.slug}`} className="block group">
                <div className="border rounded-lg overflow-hidden h-full transition-shadow group-hover:shadow-md">
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.coverImage || "/placeholder.svg?height=200&width=400"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 mb-4">{relatedPost.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{relatedPost.date}</span>
                      <span className="text-primary group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                        <ArrowLeft className="h-4 w-4 rtl:hidden" />
                        <ArrowRight className="h-4 w-4 hidden rtl:block" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">لا توجد تدوينات ذات صلة حالياً</p>
        )}
      </div>

      <div className="flex justify-between items-center border-t pt-8 mt-8">
        {post.prevPost ? (
          <Button variant="ghost" asChild>
            <Link href={`/posts/${post.prevPost.slug}`} className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              <span>التدوينة السابقة</span>
            </Link>
          </Button>
        ) : (
          <div></div>
        )}

        {post.nextPost ? (
          <Button variant="ghost" asChild>
            <Link href={`/posts/${post.nextPost.slug}`} className="flex items-center gap-2">
              <span>التدوينة التالية</span>
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <div></div>
        )}
      </div>
    </article>
  )
}

"use client"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { searchPosts } from "@/lib/posts"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [results, setResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true)
      try {
        // في الواقع، سنستخدم وظيفة البحث الحقيقية
        const searchResults = await searchPosts(query)
        setResults(searchResults)
      } catch (error) {
        console.error("Error searching posts:", error)
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }

    if (query) {
      fetchResults()
    } else {
      setResults([])
      setIsLoading(false)
    }
  }, [query])

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">نتائج البحث</h1>
      <p className="text-muted-foreground mb-8">{query ? `نتائج البحث عن "${query}"` : "يرجى إدخال كلمة للبحث"}</p>

      {isLoading ? (
        <div className="text-center py-12">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-muted-foreground">جاري البحث...</p>
        </div>
      ) : results.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {results.map((post) => (
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
                    {post.tags.map((tag: string) => (
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
      ) : query ? (
        <div className="text-center py-12">
          <p className="text-xl mb-4">لم يتم العثور على نتائج</p>
          <p className="text-muted-foreground">لم نتمكن من العثور على أي محتوى يطابق "{query}"</p>
        </div>
      ) : null}
    </div>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Tajawal } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "مدونتي الرقمية",
  description: "مدونة شخصية لمشاركة الأفكار والمعرفة",
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://abdullah-lajam.github.io/my-digital-notebook",
    title: "مدونتي الرقمية",
    description: "مدونة شخصية لمشاركة الأفكار والمعرفة",
    siteName: "مدونتي الرقمية",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={cn(tajawal.className, "min-h-screen flex flex-col")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

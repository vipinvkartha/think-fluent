import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { BookOpen, GraduationCap, Globe, Target, Users, Award } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:16px_16px]" />
        <div className="container relative px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                IELTS Reimagined
              </h1>
              <p className="mx-auto max-w-[700px] text-primary-foreground/90 md:text-xl">
                Expert IELTS preparation and study abroad guidance to help you achieve your dreams.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">Get Started</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="courses" className="py-24 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Comprehensive solutions for your international education journey
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="card-hover border-2">
              <CardHeader>
                <BookOpen className="w-12 h-12 mb-4 text-primary" />
                <CardTitle className="text-xl">IELTS Preparation</CardTitle>
                <CardDescription>Comprehensive courses tailored to your needs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <span className="bg-primary/10 p-1 rounded-full mr-2">•</span>
                    Expert instructors
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 p-1 rounded-full mr-2">•</span>
                    Practice tests
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 p-1 rounded-full mr-2">•</span>
                    Speaking sessions
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 p-1 rounded-full mr-2">•</span>
                    Writing feedback
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="card-hover border-2">
              <CardHeader>
                <Globe className="w-12 h-12 mb-4 text-primary" />
                <CardTitle className="text-xl">Study Abroad</CardTitle>
                <CardDescription>Your gateway to international education</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <span className="bg-primary/10 p-1 rounded-full mr-2">•</span>
                    University selection
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 p-1 rounded-full mr-2">•</span>
                    Application guidance
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 p-1 rounded-full mr-2">•</span>
                    Visa assistance
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 p-1 rounded-full mr-2">•</span>
                    Pre-departure support
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="card-hover border-2">
              <CardHeader>
                <Target className="w-12 h-12 mb-4 text-primary" />
                <CardTitle className="text-xl">Personalized Approach</CardTitle>
                <CardDescription>Learning adapted to your goals</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <span className="bg-primary/10 p-1 rounded-full mr-2">•</span>
                    Individual assessment
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 p-1 rounded-full mr-2">•</span>
                    Custom study plans
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 p-1 rounded-full mr-2">•</span>
                    Progress tracking
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 p-1 rounded-full mr-2">•</span>
                    Regular feedback
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white dark:bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div className="space-y-4">
              <Users className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-4xl font-bold">1000+</h3>
              <p className="text-muted-foreground">Students Trained</p>
            </div>
            <div className="space-y-4">
              <Award className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-4xl font-bold">95%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div className="space-y-4">
              <GraduationCap className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="text-muted-foreground">Partner Universities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-16 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm text-muted-foreground">
                ThinkFluent is dedicated to helping students achieve their dreams through expert IELTS preparation and study abroad guidance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#courses" className="text-muted-foreground hover:text-primary transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="#study-abroad" className="text-muted-foreground hover:text-primary transition-colors">
                    Study Abroad
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Email: info@thinkfluent.com</li>
                <li>Phone: +1 234 567 890</li>
                <li>Address: 123 Education St</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Facebook
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Twitter
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            © 2024 ThinkFluent. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
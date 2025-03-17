"use client"

import * as React from "react"
import Link from "next/link"
import { GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold">ThinkFluent</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="#courses" className="flex items-center text-lg font-medium transition-colors hover:text-primary">
              Courses
            </Link>
            <Link href="#study-abroad" className="flex items-center text-lg font-medium transition-colors hover:text-primary">
              Study Abroad
            </Link>
            <Link href="#about" className="flex items-center text-lg font-medium transition-colors hover:text-primary">
              About
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">Contact Us</Button>
        </div>
      </div>
    </header>
  )
}
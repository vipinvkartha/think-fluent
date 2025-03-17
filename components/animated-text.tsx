"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export function AnimatedText({ text, className, delay = 50 }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  
  useEffect(() => {
    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(intervalId)
        setTimeout(() => {
          setIsTyping(false)
        }, 300)
      }
    }, delay)

    return () => {
      clearInterval(intervalId)
      setIsTyping(false)
    }
  }, [text, delay])

  return (
    <span className={cn("inline-block transition-all duration-200", className)}>
      {displayedText}
      {isTyping && <span className="animate-blink-fast">|</span>}
    </span>
  )
} 
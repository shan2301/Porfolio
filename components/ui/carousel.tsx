'use client';

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CarouselProps {
  images?: string[];
  className?: string;
}

export function Carousel({ images = [], className }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  if (!images || images.length === 0) {
    return (
      <div className={cn("w-full h-64 bg-muted rounded-lg flex items-center justify-center", className)}>
        <p className="text-muted-foreground">No screenshots available</p>
      </div>
    )
  }

  const next = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative h-64 md:h-96 overflow-hidden rounded-lg bg-muted">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
          >
            <img
              src={image}
              alt={`Screenshot ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      
      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2"
            onClick={prev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={next}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/50"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}



import * as React from "react"
import { cn } from "@/lib/utils"
import { useCarousel } from "./carousel-context"

/**
 * CarouselContent component
 * 
 * Container for carousel items that creates the scrollable area.
 * This component is required inside a Carousel component and should wrap all CarouselItem components.
 * 
 * @example
 * ```jsx
 * <Carousel>
 *   <CarouselContent>
 *     <CarouselItem>Slide 1</CarouselItem>
 *     <CarouselItem>Slide 2</CarouselItem>
 *   </CarouselContent>
 * </Carousel>
 * ```
 */
const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

export { CarouselContent }

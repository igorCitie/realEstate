import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  type PanInfo,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Adapted from the ReactBits "Carousel" (reactbits.dev/components/carousel):
// same drag + spring + 3D rotate-on-swipe feel, but responsive and built for
// full-bleed images using the framer-motion already in this project.

const SPRING = { type: "spring", stiffness: 300, damping: 30 } as const;
const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;

type SlideProps = {
  src: string;
  alt: string;
  index: number;
  width: number;
  x: ReturnType<typeof useMotionValue<number>>;
};

function Slide({ src, alt, index, width, x }: SlideProps) {
  // Rotate each slide as it slides past the viewport for the 3D swipe effect.
  const range = [-(index + 1) * width, -index * width, -(index - 1) * width];
  const rotateY = useTransform(x, range, [45, 0, -45], { clamp: false });

  return (
    <motion.div
      className="relative h-full shrink-0"
      style={{ width, rotateY }}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="pointer-events-none h-full w-full select-none object-cover"
      />
    </motion.div>
  );
}

type ImageCarouselProps = {
  images: string[];
  alt?: string;
};

export default function ImageCarousel({ images, alt = "" }: ImageCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const x = useMotionValue(0);

  // Measure the container so slides can be full-width and responsive.
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setWidth(el.clientWidth);
    const ro = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Keep the active index valid if the image set changes.
  useEffect(() => {
    setIndex((prev) => Math.min(prev, Math.max(images.length - 1, 0)));
  }, [images.length]);

  const canDrag = images.length > 1;

  const goTo = (next: number) =>
    setIndex(Math.max(0, Math.min(next, images.length - 1)));

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;
    if (direction !== 0) goTo(index + direction);
  };

  return (
    <div className="w-full shrink-0">
      <div
        ref={containerRef}
        className="relative h-64 w-full overflow-hidden bg-ink/5 sm:h-72 lg:h-72"
        style={{ perspective: 1000 }}
      >
        <motion.div
          className="flex h-full cursor-grab active:cursor-grabbing"
          drag={canDrag ? "x" : false}
          dragConstraints={{
            left: -width * Math.max(images.length - 1, 0),
            right: 0,
          }}
          style={{ x }}
          animate={{ x: -index * width }}
          transition={SPRING}
          onDragEnd={handleDragEnd}
        >
          {width > 0 &&
            images.map((src, i) => (
              <Slide
                key={i}
                src={src}
                alt={alt ? `${alt} — foto ${i + 1}` : `Foto ${i + 1}`}
                index={i}
                width={width}
                x={x}
              />
            ))}
        </motion.div>

        {canDrag && (
          <>
            <button
              type="button"
              aria-label="Foto anterior"
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-clay p-1.5 text-cream backdrop-blur transition-colors hover:bg-ink disabled:opacity-0"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Próxima foto"
              onClick={() => goTo(index + 1)}
              disabled={index === images.length - 1}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-clay p-1.5 text-cream backdrop-blur transition-colors hover:bg-ink disabled:opacity-0"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {canDrag && (
        <div className="flex justify-center gap-2 pt-5">
          {images.map((_, i) => (
            <button
              type="button"
              key={i}
              aria-label={`Ir para foto ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-200 ${
                i === index ? "w-5 bg-clay" : "w-2 bg-clay/50 hover:bg-clay/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

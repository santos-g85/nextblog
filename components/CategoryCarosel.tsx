"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import * as React from "react";
import { useRouter } from "next/navigation";
import { CategoryItem } from "@/types/category";

export function CategoryCarosel() {
  const router = useRouter()
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [count, setCount] = React.useState(0);
  const [categories, setCategories] = React.useState<CategoryItem[]>([]);

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    fetchCategories();
  }, []);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);

    const interval = setInterval(() => {
      if (!api) return;

      const current = api.selectedScrollSnap();
      if (current === count - 1) {
        api.scrollTo(0); 
      } else {
        api.scrollNext();
      }
    }, 3000); 

    return () => clearInterval(interval); 
  }, [api, count]);

  return (
    <Carousel className="w-full max-w-7xl mx-auto" setApi={setApi}>
      <CarouselContent className="-ml-2">
        {categories.map((item) => (
          <CarouselItem
            key={item.id}
            className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
            // onClick={() => router.push(`posts/${item.id}`)}
          >
            <div className="p-2">
              <Card className="h-full">
                <CardContent className="flex aspect-square items-center justify-center p-6 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-sm">
                  <span className="text-lg sm:text-xl font-medium text-center">
                    {item.name}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}

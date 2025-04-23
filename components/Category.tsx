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
import { CategoryItem } from "@/types/category";
import * as React from "react";

const categories: CategoryItem[] = [
  { id: 1, name: "Technology", icon: "" },
  { id: 2, name: "Travel", icon: "" },
  { id: 3, name: "Health", icon: "" },
  { id: 4, name: "Food", icon: "" },
  { id: 5, name: "Finance", icon: "" },
  { id: 6, name: "Sports", icon: "" },
  { id: 7, name: "Lifestyle", icon: "" },
];

export function Category() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [count, setCount] = React.useState(0);

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

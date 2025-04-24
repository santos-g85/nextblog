import Image from "next/image";
import { Button } from "./ui/button";

export const Featured = () => {
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold mb-8">
        <b>Hey hello ! </b> dolor sit amet consectetur adipisicing elit.
      </h1>
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2">
          <Image
            src="/code.jpg"
            alt="Featured Story"
            width={800}
            height={300}
            className="rounded-lg md:w-full"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-2xl font-semibold">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eligendi vitae labore unde, fuga dolorem molestias, 
            ipsum veritatis maiores perspiciatis similique consequatur voluptatem eum nam? 
            Veniam commodi aliquid eligendi explicabo doloremque.
          </p>
          <Button variant="outline">Read More</Button>
        </div>
      </div>
    </div>
  );
};

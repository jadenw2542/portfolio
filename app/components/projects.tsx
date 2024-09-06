import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import path from "path";
import fs from "fs";
import Image from "next/image";

const getImages = (projectName: string) => {
  const imagesDir = path.join(process.cwd(), `public/imgs/${projectName}`);
  const imageFiles = fs.readdirSync(imagesDir);

  // Ensure to use forward slashes and map to relative public folder paths
  return imageFiles.map((file) => `/imgs/geowizard/${file}`);
};

export default function Projects() {
  const geowizard = getImages("geowizard");
  return (
    <div id="projects" className="h-screen text-background">
      <h1>My Projects</h1>

      <div className=" relative w-7/12">
        <Carousel className="w-full">
          <CarouselContent>
            {geowizard.map((src, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    {/* Ensure that this element has position: relative */}
                    <CardContent className="flex aspect-video items-center justify-center p-6 relative">
                      <Image
                        src={src}
                        alt={`Image ${index}`}
                        layout="fill" // Makes the image fill its container
                        objectFit="contain" // Ensures the image covers the container
                        objectPosition="center" // Centers the image in the container
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Defines image sizes for different screen widths
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 bg-primary bg-secondary p-2 rounded-full hover:bg-muted" />
          <CarouselNext className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 bg-primary bg-secondary p-2 rounded-full hover:bg-muted"/>
        </Carousel>
      </div>
    </div>
  );
}

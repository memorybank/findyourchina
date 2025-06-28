"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image";

import discover_food from "@/public/discover_food.jpeg";

const locals = [
  {
    image: discover_food,
  },
  {
    image: discover_food,
  },
  {
    image: discover_food,
  },
  {
    image: discover_food,
  },
  {
    image: discover_food,
  },
];

export const Locals = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="food">
        <TabsList className="flex w-full">
          <TabsTrigger value="food">Food</TabsTrigger>
          <TabsTrigger value="shop">Shop</TabsTrigger>
          <TabsTrigger value="homestay">Homestay</TabsTrigger>
          <TabsTrigger value="cultural">Cultural places</TabsTrigger>
        </TabsList>
        <TabsContent value="food">
          <ScrollArea className="rounded-md border whitespace-nowrap">
            <div className="">
              <div className="container mx-auto">
                <div className="flex flex-col  gap-10">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {locals.map((local, index) => (
                        <CarouselItem className="basis-1/3 lg:basis-1/3 py-4" key={index}>
                          <Card>
                            <CardContent className="aspect-square items-center justify-center p-6">
                              <Image
                                src={local.image}
                                alt="Portrait of local"
                                height="400"
                                width="400"
                              />
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </TabsContent>
        <TabsContent value="shop">
          <ScrollArea className="rounded-md border whitespace-nowrap">
            <div className="">
              <div className="container mx-auto">
                <div className="flex flex-col  gap-10">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {locals.map((local, index) => (
                        <CarouselItem className="basis-1/3 lg:basis-1/3 py-4" key={index}>
                          <Card>
                            <CardContent className="aspect-square items-center justify-center p-6">
                              <Image
                                src={local.image}
                                alt="Portrait of local"
                                height="400"
                                width="400"
                              />
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </TabsContent>
        <TabsContent value="homestay">
          <ScrollArea className="rounded-md border whitespace-nowrap">
            <div className="">
              <div className="container mx-auto">
                <div className="flex flex-col  gap-10">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {locals.map((local, index) => (
                        <CarouselItem className="basis-1/3 lg:basis-1/3 py-4" key={index}>
                          <Card>
                            <CardContent className="aspect-square items-center justify-center p-6">
                              <Image
                                src={local.image}
                                alt="Portrait of local"
                                height="400"
                                width="400"
                              />
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </TabsContent>
        <TabsContent value="cultural">
          <ScrollArea className="rounded-md border whitespace-nowrap">
            <div className="">
              <div className="container mx-auto">
                <div className="flex flex-col  gap-10">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {locals.map((local, index) => (
                        <CarouselItem className="basis-1/3 lg:basis-1/3 py-4" key={index}>
                          <Card>
                            <CardContent className="aspect-square items-center justify-center p-6">
                              <Image
                                src={local.image}
                                alt="Portrait of local"
                                height="400"
                                width="400"
                              />
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

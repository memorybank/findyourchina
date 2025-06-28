import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

const image_url = "https://ik.imagekit.io/lrigu76hy/tailark/abstract-bg.jpg?updatedAt=1745733473768"

export default function HeroSection() {
    return (
        <>
            <main className="">
                <section>
                    <div className="pb-8 md:pb-8 lg:pb-8">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">Find your China</h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg">Discover the essence of your travel destination in China. We offer personalized travel planning for dining, shopping, homestay and cultural exploration.
                                </p>

                                <p className="mt-8 max-w-2xl text-pretty text-lg">Our strong suite is private tour group, big cities, and less than one week stay.</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-orange-400 px-5 text-base">
                                        <Link href="https://wa.me/message/O2TCQDCJG56NM1">
                                            <span className="text-nowrap">Connect with us via WhatsApp</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <Image
                                className="-z-10 order-first ml-auto h-56 w-full object-cover invert sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0"
                                src={image_url}
                                alt="Abstract Object"
                                height="4000"
                                width="3000"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

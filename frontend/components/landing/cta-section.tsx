'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import {
   BarChart,
   ChevronRight,
   File,
   Globe,
   HeartHandshake,
   Rss,
   Shield,
} from 'lucide-react'
import Link from 'next/link'
import { useEffect, useId, useRef, useState } from 'react'
import Image from 'next/image'
import { buttonVariants } from '~/components/ui/button'
import { ny } from '~/lib/utils'
import Marquee from '~/components/ui/marquee'

const tiles = [
   {
      image: <Image alt="" src="/assets/commanders/angela.png" width={100} height={100} />,
      bg: (
         <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full"></div>
      ),
   },
   {
      image: <Image alt="" src="/assets/commanders/fanny.png" width={100} height={100} />,
      bg: (
         <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full"></div>
      ),
   },
   {
      image: <Image alt="" src="/assets/commanders/layla.png" width={100} height={100} />,
      bg: (
         <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full"></div>
      ),
   },
   {
      image: <Image alt="" src="/assets/commanders/ling.png" width={100} height={100} />,
      bg: (
         <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full"></div>
      ),
   },
   {
      image: <Image alt="" src="/assets/commanders/pao.png" width={100} height={100} />,
      bg: (
         <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full"></div>
      ),
   },
]

function shuffleArray(array: any[]) {
   let currentIndex = array.length
   let randomIndex
   // While there remain elements to shuffle.
   while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
         array[randomIndex],
         array[currentIndex],
      ]
   }
   return array
}

function Card(card: { image: JSX.Element, bg: JSX.Element }) {
   const id = useId()
   const controls = useAnimation()
   const ref = useRef(null)
   const inView = useInView(ref, { once: true })

   useEffect(() => {
      if (inView) {
         controls.start({
            opacity: 1,
            transition: { delay: Math.random() * 2, ease: 'easeOut', duration: 1 },
         })
      }
   }, [controls, inView])

   return (
      <motion.div
         key={id}
         ref={ref}
         initial={{ opacity: 0 }}
         animate={controls}
         className={ny(
            'relative size-20 cursor-pointer overflow-hidden rounded-2xl border',
            // light styles
            'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
            // dark styles
            'transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
         )}
      >
         {card.image}
         {card.bg}
      </motion.div>
   )
}

export default function CallToActionSection() {
   const [randomTiles1, setRandomTiles1] = useState<typeof tiles>([])
   const [randomTiles2, setRandomTiles2] = useState<typeof tiles>([])
   const [randomTiles3, setRandomTiles3] = useState<typeof tiles>([])
   const [randomTiles4, setRandomTiles4] = useState<typeof tiles>([])

   useEffect(() => {
      if (typeof window !== 'undefined') {
      // Ensures this runs client-side
         setRandomTiles1(shuffleArray([...tiles]))
         setRandomTiles2(shuffleArray([...tiles]))
         setRandomTiles3(shuffleArray([...tiles]))
         setRandomTiles4(shuffleArray([...tiles]))
      }
   }, [])

   return (
      <section id="cta">
         <div className="py-14">
            <div className="flex w-full flex-col items-center justify-center">
               <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                  <Marquee
                     reverse
                     className="-delay-[200ms] [--duration:10s]"
                     repeat={5}
                  >
                     {randomTiles1.map((review, idx) => (
                        <Card key={idx} {...review} />
                     ))}
                  </Marquee>
                  <Marquee reverse className="[--duration:25s]" repeat={5}>
                     {randomTiles2.map((review, idx) => (
                        <Card key={idx} {...review} />
                     ))}
                  </Marquee>
                  <Marquee
                     reverse
                     className="-delay-[200ms] [--duration:20s]"
                     repeat={5}
                  >
                     {randomTiles1.map((review, idx) => (
                        <Card key={idx} {...review} />
                     ))}
                  </Marquee>
                  <Marquee reverse className="[--duration:30s]" repeat={5}>
                     {randomTiles2.map((review, idx) => (
                        <Card key={idx} {...review} />
                     ))}
                  </Marquee>
                  <Marquee
                     reverse
                     className="-delay-[200ms] [--duration:20s]"
                     repeat={5}
                  >
                     {randomTiles3.map((review, idx) => (
                        <Card key={idx} {...review} />
                     ))}
                  </Marquee>
                  <Marquee reverse className="[--duration:30s]" repeat={5}>
                     {randomTiles4.map((review, idx) => (
                        <Card key={idx} {...review} />
                     ))}
                  </Marquee>
                  <div className="to-background dark:to-background absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-70%" />
               </div>
            </div>
         </div>
      </section>
   )
}

'use client'
import BlurFade from '~/components/ui/blur-fade';
import { MagicCard, MagicContainer } from '~/components/ui/magic-card';
import Particles from '~/components/ui/particles'
import { Card, CardContent } from '~/components/ui/card'
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '~/components/ui/carousel'

export default function Page() {

   const streamerPath = "./assets/streamers/" 
   const streamers = [
      {
         id: 1,
         name: "Finn Official",
         image: streamerPath + "Finn Official.png",
         tiktokUrl: "https://www.tiktok.com/@finngamingofficial"
      },
      {
         id: 2,
         name: "Arep TV Chess Official",
         image: streamerPath + "Arep TV Chess Official.png",
         tiktokUrl: "https://www.tiktok.com/@areptvchess"
      },
      {
         id: 3,
         name: "Finn Official",
         image: streamerPath + "Finn Official.png",
         tiktokUrl: "https://www.tiktok.com/@finngamingofficial"  
      },
      {
         id: 4,
         name: "Arep TV Chess Official",
         image: streamerPath + "Arep TV Chess Official.png",
         tiktokUrl: "https://www.tiktok.com/@areptvchess"
      }
   ]

   return (
      <>
         <section
            id="hero"
            className="relative mx-auto mt-36 mb-12 max-w-7xl px-6 text-center md:px-8"
         >
            <h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:to-white/40">
               Check Out Our Beloved Streamers!
            </h1>
         </section>          
         <MagicContainer className="relative hidden mx-auto max-w-7xl lg:flex h-[500px] w-full flex-col gap-14 lg:h-[250px] mb-8 lg:flex-row px-6 text-center md:px-8">
            {streamers.map((streamer, idx) => (
               <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>     
                  <MagicCard className="flex h-full w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-2xl">
                     <img
                        className="size-full h-full w-full rounded-lg object-cover"
                        src={streamer.image}
                        alt={`Streamer ${idx + 1}`}
                        onClick={() => window.open(streamer.tiktokUrl, '_blank')}
                     />
                     <code className="mt-1.5 bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                        <small className="text-sm font-semibold leading-none">
                           {streamer.name}
                        </small>
                     </code>
                     <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                  </MagicCard>
               </BlurFade>
            ))}
         </MagicContainer>

         <Carousel className="relative flex lg:hidden mx-auto w-full max-w-xs">
            <CarouselContent>
               {streamers.map((streamer, idx) => (
                  <CarouselItem key={idx}>
                     <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>  
                        <MagicCard className="flex h-full w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-2xl">
                           <img
                              className="size-full h-full w-full rounded-lg object-cover"
                              src={streamer.image}
                              alt={`Streamer ${idx + 1}`}
                              onClick={() => window.open(streamer.tiktokUrl, '_blank')}
                           />
                           <code className="mt-1.5 bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                              <small className="text-sm font-semibold leading-none">
                                 {streamer.name}
                              </small>
                           </code>
                           <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                        </MagicCard>
                     </BlurFade>
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
         </Carousel>

         <Particles
            className="absolute inset-0 -z-10"
            quantity={50}
            ease={70}
            size={0.05}
            staticity={40}
            color="#ffffff"
         />
      </>
   )
}

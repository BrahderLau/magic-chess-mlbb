'use client'

import { useRouter } from 'next/navigation';
import { SiteFooter } from '~/components/site-footer';
import { SiteHeader } from '~/components/site-header';
import Particles from '~/components/ui/particles'
import PulsatingButton from '~/components/ui/pulsating-button'

export default function NotFound() {

   const router = useRouter();

   return (
      <>
         <SiteHeader />
            <main className="mx-auto flex-1 overflow-hidden">
               <section
                  id="hero"
                  className="relative mx-auto my-36 max-w-7xl px-6 text-center md:px-8"
               >
                  <h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:to-white/40">
                     Ou-ouch!
                     <br className="hidden md:block" />
                     {' '}
                     404 Not Found
                  </h1>
                  <PulsatingButton
                     text="Take Me Back to Home!"
                     pulseColor="255, 117, 24"
                     backgroundColor="#EC5800"
                     textColor="#ffffff"
                     animationDuration="1.5s"
                     buttonWidth="200px"
                     buttonHeight="50px"
                     onClick={() => router.push('/')}
                  />
               </section>
               <Particles
                  className="absolute inset-0 -z-10"
                  quantity={50}
                  ease={70}
                  size={0.05}
                  staticity={40}
                  color="#ffffff"
               />
            </main>
         <SiteFooter />
      </>
   )
}

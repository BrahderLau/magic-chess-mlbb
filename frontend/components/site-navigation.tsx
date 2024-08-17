'use client'

import * as React from 'react'
import Link from 'next/link'

import { ny } from '~/lib/utils'
// import { Icons } from '~/components/icons'
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   navigationMenuTriggerStyle,
} from '~/components/ui/navigation-menu'

const tournamentComponents: { title: string, href: string, description: string }[] = [
   {
      title: 'Professional',
      href: '/tournaments/professional',
      description:
      'Professionals who compete for massive rewards and dignity',
   },
   {
      title: 'Amateur',
      href: '/tournaments/amateur',
      description:
      'Endless tournaments for you to become professional one day',
   },
   {
      title: 'Rookie',
      href: '/tournaments/rookie',
      description:
      'Esports starts from applying the fundamental skills and knowledge',
   },
   {
      title: 'Student',
      href: '/tournaments/student',
      description: 'New bloods to shine bright in eSport',
   },
   {
      title: 'Women',
      href: '/tournaments/women',
      description:
      'Empower and encourage women to shine in eSport category',
   },
   {
      title: 'Open For All',
      href: '/tournaments/open-for-all',
      description:
      'Regardless you are well-experienced or new to tournament, just fight',
   },
   {
      title: 'Scrim / Friendly',
      href: '/tournaments/scrim',
      description:
      'Test out new commanders, strategies and synergies',
   },
]

const teamComponents: { title: string, href: string, description: string }[] = [
   {
      title: 'The Duos',
      href: '/teams/team-of-2',
      description:
        'Work closely with the other partner to win against the other 3 teams',
   },
   {
      title: 'The Fantastic Four',
      href: '/teams/team-of-4',
      description:
        'Each individual with unique strength wins the game',
   },
]

export function MainNavigationMenu() {
   return (
      <NavigationMenu>
         <NavigationMenuList>
            <NavigationMenuItem>
               <NavigationMenuTrigger>Tournaments</NavigationMenuTrigger>
               <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                     {tournamentComponents.map(component => (
                        <ListItem
                           key={component.title}
                           title={component.title}
                           href={component.href}
                        >
                           {component.description}
                        </ListItem>
                     ))}
                  </ul>
               </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <NavigationMenuTrigger>Teams</NavigationMenuTrigger>
               <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                     {teamComponents.map(component => (
                        <ListItem
                           key={component.title}
                           title={component.title}
                           href={component.href}
                        >
                           {component.description}
                        </ListItem>
                     ))}
                  </ul>
               </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <Link href="/players" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                     Players
                  </NavigationMenuLink>
               </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <Link href="/streamers" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                     Streamers
                  </NavigationMenuLink>
               </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <Link href="/contact-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                     Contact Us
                  </NavigationMenuLink>
               </Link>
            </NavigationMenuItem>
         </NavigationMenuList>
      </NavigationMenu>
   )
}

const ListItem = React.forwardRef<
   React.ElementRef<'a'>,
   React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
   return (
      <li>
         <NavigationMenuLink asChild>
            <a
               ref={ref}
               className={ny(
                  'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
                  className,
               )}
               {...props}
            >
               <div className="text-sm font-medium leading-none">{title}</div>
               <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                  {children}
               </p>
            </a>
         </NavigationMenuLink>
      </li>
   )
})
ListItem.displayName = 'ListItem'

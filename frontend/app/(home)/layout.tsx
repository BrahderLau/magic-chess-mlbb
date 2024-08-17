import { SiteFooter } from '~/components/site-footer'
import { SiteHeader } from '~/components/site-header'

interface HomeLayoutProps {
   children: React.ReactNode
}

export default async function HomeLayout({
   children,
}: HomeLayoutProps) {
   return (
      <>
         <SiteHeader />
         <main className="mx-auto flex-1 overflow-hidden">{children}</main>
         <SiteFooter />
      </>
   )
}

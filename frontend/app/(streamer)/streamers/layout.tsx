import { SiteFooter } from '~/components/site-footer'
import { SiteHeader } from '~/components/site-header'

interface StreamerLayoutProps {
   children: React.ReactNode
}

export default async function StreamerLayout({
   children,
}: StreamerLayoutProps) {
   return (
      <>
         <SiteHeader />
         <main className="mx-auto flex-1 overflow-hidden">{children}</main>
         <SiteFooter />
      </>
   )
}

import { SiteFooter } from '~/components/site-footer'
import { SiteHeader } from '~/components/site-header'

interface Custom404LayoutProps {
   children: React.ReactNode
}

export default async function Custom404Layout({
   children,
}: Custom404LayoutProps) {
   return (
      <>
         <SiteHeader />
         <main className="mx-auto flex-1 overflow-hidden">{children}</main>
         <SiteFooter />
      </>
   )
}

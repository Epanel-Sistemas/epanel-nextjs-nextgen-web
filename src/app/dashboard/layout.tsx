import Sidebar from '~/components/Sidebar'
import Topbar from '~/components/Topbar'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="dark:bg-brand-green flex h-full lg:flex">
      <Sidebar />
      <div className="dark:bg-brand-green flex w-full flex-col overflow-auto dark:text-white">
        <Topbar />
        <div className="flex w-full flex-[1] justify-center pb-12 pt-8 lg:px-6">
          <div className="w-full min-w-[550px] max-lg:px-8 2xl:w-9/12">
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

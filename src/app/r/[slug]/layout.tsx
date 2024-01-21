const Layout = ({children}: {children: React.ReactNode}) => {
    return <div className="sm:container max-w-7xl mx-auto h-full pt-12">
        <div>
        {/* TODO: Button to take us back */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-yy-4 md:gap-x-4 py-6">
        <div className="flex flex-col col-span-2 space-y-6">{children}</div>
        </div>
        </div>
        </div>
}
export default Layout;
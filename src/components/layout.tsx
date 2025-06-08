import type { PropsWithChildren } from "react"
import Navbar from "./navbar"
const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted">
            <Navbar />
            <main className="min-h-screen container mx-auto">
                {children}
            </main>
            <footer className="backdrop-blur py-8">
                <div className="container mx-auto px-4 text-center text-gray-200">
                    <p>Footer</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout

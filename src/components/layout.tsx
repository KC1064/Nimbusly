import type { PropsWithChildren } from "react"
import Navbar from "./navbar"
import { Github } from "lucide-react"
const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted">
            <Navbar />
            <main className="min-h-screen container mx-auto">
                {children}
            </main>
            <footer className="backdrop-blur py-8">
                <div className="container mx-auto px-4 text-center flex justify-center gap-2 text-gray-200">
                    <p className="flex gap-2">Made By <Github /></p>
                    <a href="https://github.com/KC1064">KC1064</a>
                </div>
            </footer>
        </div>
    )
}

export default Layout

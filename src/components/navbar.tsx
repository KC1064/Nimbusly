import { Link } from "react-router-dom";
import SearchBar from "./search-bar";
import ToggleTheme from "./toggle-theme";

export default function Navbar() {
    
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-1">
            <div className="mx-auto container flex justify-between items-center">
                <Link to={"/"}>
                    <img src="./light.png" alt="" className="h-20 w-20" />
                </Link>
                <div className="flex gap-4">
                    <SearchBar />
                    <ToggleTheme />
                </div>
            </div>
        </header>
    )
}

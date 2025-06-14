import { Link } from "react-router-dom";
import { CitySearch } from "./city-search";
import ToggleTheme from "./toggle-theme";

export default function Navbar() {

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4">
            <div className="container mx-auto flex h-16 items-center justify-between px-3">
                <Link to={"/"}>
                    <img
                        src="light.png"
                        alt="Nimbusly logo"
                        className="h-24"
                    />
                </Link>

                <div className="flex gap-4">
                    <CitySearch />
                    <ToggleTheme />
                </div>
            </div>
        </header>
    );
}
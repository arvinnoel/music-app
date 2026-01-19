import { HomeIcon, UserCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import spotifyLogo from "../assets/spotify-logo.png"; // your logo in assets

const TopBar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-zinc-800">
            <div className="flex items-center justify-between px-4 md:px-6 h-16">

                <div className="flex items-center gap-4">
                    <img src={spotifyLogo} alt="Spotify" className="h-8 w-auto" />

                    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition text-gray-400">
                        <HomeIcon className="h-6 w-6" />
                        <span className="hidden md:block font-medium">Home</span>
                    </div>

                    <div className="flex items-center bg-zinc-900 rounded-full px-3 py-2 w-40 sm:w-56 md:w-72 ml-4">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none ml-2 text-sm w-full placeholder-gray-400"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3 cursor-pointer hover:bg-zinc-800 px-3 py-1.5 rounded-full">
                    <UserCircleIcon className="h-8 w-8 text-gray-300" />
                    <span className="hidden md:block text-white text-sm font-medium">Arvin</span>
                </div>
            </div>
        </header>
    );
};

export default TopBar;

import playlist from "../assets/playlist-cover.jpg"
import blindingLights from "../assets/blinding-lights.jpg";
import levitating from "../assets/levitating.jpg";
import asItWas from "../assets/as-it-was.webp";
import saveYourTears from "../assets/save-your-tears.jpg";
import peaches from "../assets/peaches.jpg";
import Nolie from "../assets/No-lie.jpg"
import shape from "../assets/shape-of-you.jpg";
import cheap from "../assets/cheap-thrills.jpg";
import Faded from "../assets/faded.jpg";
export const playlistData = {
    id: 1,
    name: "Best English hits",
    description: "Your daily mix of favorite tracks",
    image: playlist,
    tracks: [
        {
            id: 1,
            title: "Blinding Lights",
            artist: "The Weeknd",
            album: "After Hours",
            duration: "3:20",
            albumImage: blindingLights,
        },
        {
            id: 2,
            title: "Levitating",
            artist: "Dua Lipa",
            album: "Future Nostalgia",
            duration: "3:23",
            albumImage: levitating,
        },
        {
            id: 3,
            title: "As It Was",
            artist: "Harry Styles",
            album: "Harry's House",
            duration: "2:47",
            albumImage: asItWas,
        },
        {
            id: 4,
            title: "Save Your Tears",
            artist: "The Weeknd",
            album: "After Hours",
            duration: "3:35",
            albumImage: saveYourTears,
        },
        {
            id: 5,
            title: "Peaches",
            artist: "Justin Bieber",
            album: "Justice",
            duration: "3:18",
            albumImage: peaches,
        },
        {
            id: 6,
            title: "No lie",
            artist: "Sean Paul & Dua Lipa",
            album: " Mad Love the Prequel",
            duration: "4:20",
            albumImage: Nolie,
        },
        {
            id: 7,
            title: "Shape of you",
            artist: "Ed sheeran",
            album: "Shape OF You",
            duration: "2:21",
            albumImage: shape,
        },
        {
            id: 8,
            title: "Cheap Thrills",
            artist: "Sia",
            album: "This is Acting",
            duration: "3:31",
            albumImage: cheap,
        },
        {
            id: 9,
            title: "Faded",
            artist: "Alan Walker",
            album: "Different World",
            duration: "3:32",
            albumImage: Faded,
        },
    ],
};

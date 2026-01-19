import TopBar from "./components/TopBar";
import PlaylistHeader from "./components/PlaylistHeader";
import TrackList from "./components/TrackList";
import { playlistData } from "./data/playlistData";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <TopBar />
      <main className="pt-14 md:pt-16">
        <section className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">

          <div className="rounded-xl overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-900 to-black">
            <PlaylistHeader playlist={playlistData} />
            <TrackList tracks={playlistData.tracks} />
          </div>

        </section>
      </main>

    </div>
  );
}

export default App;
